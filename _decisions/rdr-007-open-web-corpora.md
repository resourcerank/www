---
title: "Require Immutable Snapshot Identifiers for Training & Benchmark Datasets"
rdr_id: "RDR-007"
status: "Accepted"
domain: "Dataset Provenance"
date: 2026-10-10
review_cycle: "Semi-Annual (Next: 2027-04)"
authors:
  - "Open Corpus & AI Provenance WG"
related_resource_name: "Common Crawl (RR-DS-0029)"
related_evaluation: "/evaluations/common-crawl/"
supersedes: "None"
summary: "Any dataset cited as empirical evidence in a ResourceRank assessment must reference an immutable, content-addressed or dated snapshot."
---

### Context & Problem Statement

Mutable live APIs and unversioned cloud buckets undermine reproducibility when upstream records are silently altered or deleted after an evaluation is published.

### Decision

Evaluations referencing external datasets (such as Common Crawl or OpenAlex) must record an explicit snapshot identifier (e.g., `CC-MAIN-2026-38`) and cryptographic manifest hash in the `evidence` array.

### Consequences

* **Positive:** Guarantees that independent auditors can reconstruct the exact dataset state used during evaluation.
* **Trade-off:** Assessors must re-run verification checks when new upstream snapshots are released.
