document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("rr-theme", next);
    });
  }

  // 2. Mobile Navigation Toggle
  const menuBtn = document.getElementById("mobile-menu-toggle");
  const siteNav = document.getElementById("site-nav");
  if (menuBtn && siteNav) {
    menuBtn.addEventListener("click", () => {
      const open = siteNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  // 3. Evaluations Registry Filter & Sort
  const evalSearch = document.getElementById("eval-search");
  const evalCategory = document.getElementById("eval-category");
  const evalSort = document.getElementById("eval-sort");
  const evalGrid = document.getElementById("eval-grid");
  const evalCount = document.getElementById("eval-count");
  const evalEmpty = document.getElementById("eval-empty");

  if (evalGrid && evalSearch && evalCategory && evalSort) {
    const items = Array.from(evalGrid.querySelectorAll(".eval-item"));

    const updateEvaluations = () => {
      const q = evalSearch.value.trim().toLowerCase();
      const cat = evalCategory.value;
      const sortBy = evalSort.value;

      const filtered = items.filter((el) => {
        const matchesCat = cat === "all" || el.dataset.category === cat;
        const haystack = `${el.dataset.title} ${el.dataset.id} ${el.dataset.license} ${el.dataset.summary}`;
        const matchesQuery = !q || haystack.includes(q);
        return matchesCat && matchesQuery;
      });

      filtered.sort((a, b) => {
        if (sortBy === "score-desc") return Number(b.dataset.score) - Number(a.dataset.score);
        if (sortBy === "score-asc") return Number(a.dataset.score) - Number(b.dataset.score);
        if (sortBy === "date-desc") return b.dataset.date.localeCompare(a.dataset.date);
        return a.dataset.title.localeCompare(b.dataset.title);
      });

      items.forEach((el) => (el.style.display = "none"));
      filtered.forEach((el) => {
        el.style.display = "";
        evalGrid.appendChild(el);
      });

      if (evalCount) {
        evalCount.textContent = `Showing ${filtered.length} evaluation${filtered.length === 1 ? "" : "s"}`;
      }
      if (evalEmpty) {
        evalEmpty.hidden = filtered.length > 0;
      }
    };

    evalSearch.addEventListener("input", updateEvaluations);
    evalCategory.addEventListener("change", updateEvaluations);
    evalSort.addEventListener("change", updateEvaluations);
  }

  // 4. Decision Records Filter
  const rdrSearch = document.getElementById("rdr-search");
  const rdrStatus = document.getElementById("rdr-status");
  const rdrList = document.getElementById("rdr-list");

  if (rdrList && rdrSearch && rdrStatus) {
    const rdrItems = Array.from(rdrList.querySelectorAll(".rdr-item"));
    const updateRdr = () => {
      const q = rdrSearch.value.trim().toLowerCase();
      const st = rdrStatus.value;
      rdrItems.forEach((el) => {
        const matchStatus = st === "all" || el.dataset.status === st;
        const matchText = !q || el.dataset.search.includes(q);
        el.style.display = matchStatus && matchText ? "" : "none";
      });
    };
    rdrSearch.addEventListener("input", updateRdr);
    rdrStatus.addEventListener("change", updateRdr);
  }

  // 5. Framework Interactive Score Simulator
  const sliders = {
    provenance: document.getElementById("sim-provenance"),
    evidence: document.getElementById("sim-evidence"),
    reliability: document.getElementById("sim-reliability"),
    interoperability: document.getElementById("sim-interoperability"),
  };

  if (sliders.provenance) {
    const compositeEl = document.getElementById("sim-composite");
    const badgeEl = document.getElementById("sim-tier-badge");
    const formulaEl = document.getElementById("sim-formula");

    const recalc = () => {
      const p = Number(sliders.provenance.value);
      const e = Number(sliders.evidence.value);
      const r = Number(sliders.reliability.value);
      const i = Number(sliders.interoperability.value);

      document.getElementById("val-provenance").textContent = p;
      document.getElementById("val-evidence").textContent = e;
      document.getElementById("val-reliability").textContent = r;
      document.getElementById("val-interoperability").textContent = i;

      const raw = p * 0.25 + e * 0.3 + r * 0.25 + i * 0.2;
      const rounded = Math.round(raw);
      compositeEl.textContent = rounded;
      formulaEl.textContent = `(${p}×0.25) + (${e}×0.30) + (${r}×0.25) + (${i}×0.20) = ${raw.toFixed(1)}`;

      badgeEl.className = "score-pill";
      const tierSpan = badgeEl.querySelector(".score-tier");
      if (rounded >= 90) {
        badgeEl.classList.add("tier-exemplary");
        tierSpan.textContent = "Exemplary";
      } else if (rounded >= 75) {
        badgeEl.classList.add("tier-verified");
        tierSpan.textContent = "Verified";
      } else if (rounded >= 60) {
        badgeEl.classList.add("tier-provisional");
        tierSpan.textContent = "Provisional";
      } else {
        badgeEl.classList.add("tier-caution");
        tierSpan.textContent = "Needs Review";
      }
    };

    Object.values(sliders).forEach((s) => s.addEventListener("input", recalc));
    recalc();
  }

  // 6. Copy JSON / YAML Helpers
  const copyJsonBtn = document.getElementById("copy-json-btn");
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener("click", async () => {
      try {
        const formatted = JSON.stringify(JSON.parse(copyJsonBtn.dataset.json), null, 2);
        await navigator.clipboard.writeText(formatted);
        const orig = copyJsonBtn.textContent;
        copyJsonBtn.textContent = "Copied JSON!";
        setTimeout(() => (copyJsonBtn.textContent = orig), 2000);
      } catch (err) {
        console.error(err);
      }
    });
  }

  const copyTemplateBtn = document.getElementById("copy-template-btn");
  const yamlTemplate = document.getElementById("yaml-template");
  if (copyTemplateBtn && yamlTemplate) {
    copyTemplateBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(yamlTemplate.textContent.trim());
        const orig = copyTemplateBtn.textContent;
        copyTemplateBtn.textContent = "Copied YAML!";
        setTimeout(() => (copyTemplateBtn.textContent = orig), 2000);
      } catch (err) {
        console.error(err);
      }
    });
  }
});
