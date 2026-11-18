# ResourceRank (`resourcerank.org`)

Open framework for evaluating software, datasets, platforms, and digital resources through structured assessments, evidence, provenance, and transparent decision records.

## Project Structure

```text
resourcerank-site/
├── _config.yml              # Jekyll configuration & collections
├── _data/
│   ├── criteria.yml         # Weighted evaluation dimensions
│   └── navigation.yml       # Primary navigation links
├── _decisions/              # Transparent Decision Records (RDR collection)
├── _evaluations/            # Structured Resource Assessments collection
├── _includes/               # Reusable HTML partials (head, header, footer, score-badge)
├── _layouts/                # Page layouts (default, evaluation, decision)
├── assets/
│   ├── css/main.css         # Responsive light/dark theme stylesheet
│   ├── images/              # Brand logo & favicon
│   └── js/main.js           # Client-side filtering, sorting, and score simulator
├── contribute/              # Submission workflow & YAML frontmatter schema
├── decisions/               # Decision Records index page
├── evaluations/             # Filterable Evaluations registry page
├── framework/               # Methodology, rubric, and interactive calculator
└── index.html               # Landing page
```

## Local Development

1. Install Ruby and Bundler (`gem install bundler`).
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run the local Jekyll development server:
   ```bash
   bundle exec jekyll serve --livereload
   ```
4. Open `http://localhost:4000` in your browser.
