---
title: "OpenAlex"
resource_id: "RR-DR-0052"
category: "Digital Resource"
version: "2026.10"
license: "CC0-1.0"
steward: "OurResearch"
canonical_url: "https://openalex.org"
assessor: "Scholarly Infrastructure WG"
assessed_date: 2026-10-25
overall_score: 92
decision_id: "RDR-007"
decision_record: "/decisions/rdr-007-open-web-corpora/"
summary: "Fully open catalog of the global research system indexing scholarly works, authors, institutions, venues, and citation graphs."
dimensions:
  - name: "Provenance & Lineage"
    weight: 25
    score: 91
    notes: "Aggregates Crossref, ORCID, ROR, PubMed, and arXiv with explicit source provenance per metadata field."
  - name: "Empirical Evidence & Reproducibility"
    weight: 30
    score: 90
    notes: "Monthly full-corpus snapshots hosted openly on AWS S3 enable reproducible bibliometric studies."
  - name: "Operational Reliability & Maintenance"
    weight: 25
    score: 91
    notes: "Sustained non-profit engineering by OurResearch with documented REST API rate limits and SLAs."
  - name: "Open Standards & Interoperability"
    weight: 20
    score: 96
    notes: "CC0 public domain dedication, persistent identifiers (DOI, ORCID, ROR), and JSONL bulk exports."
evidence:
  - id: "EV-052-A"
    type: "License"
    description: "CC0 1.0 Universal Public Domain Dedication"
    reference: "docs.openalex.org/download-all-data/openalex-snapshot"
  - id: "EV-052-B"
    type: "Schema"
    description: "Persistent Identifier Crosswalk (DOI / ORCID / ROR)"
    reference: "api.openalex.org/works"
---

### Executive Assessment

OpenAlex replaces proprietary bibliometric silos with a CC0-licensed, API-accessible knowledge graph built on open persistent identifiers.
