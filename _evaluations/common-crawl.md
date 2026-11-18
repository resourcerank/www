---
title: "Common Crawl Web Corpus"
resource_id: "RR-DS-0029"
category: "Dataset"
version: "CC-MAIN-2026-38"
license: "CC-BY-4.0 / Crawl Terms"
steward: "Common Crawl Foundation"
canonical_url: "https://commoncrawl.org"
assessor: "Open Corpus & AI Provenance WG"
assessed_date: 2026-10-02
overall_score: 86
decision_id: "RDR-007"
decision_record: "/decisions/rdr-007-open-web-corpora/"
summary: "Petabyte-scale open repository of web crawl data distributed in standardized WARC, WAT, and WET formats."
dimensions:
  - name: "Provenance & Lineage"
    weight: 25
    score: 84
    notes: "Complete crawl timestamps, IP metadata, and WARC headers preserved; downstream domain copyright heterogeneity requires filtering."
  - name: "Empirical Evidence & Reproducibility"
    weight: 30
    score: 88
    notes: "Immutable S3/HTTPS crawl snapshots enable exact dataset reconstruction across academic and industrial pipelines."
  - name: "Operational Reliability & Maintenance"
    weight: 25
    score: 85
    notes: "Consistent monthly crawl cadence since 2011 with publicly accessible Parquet columnar index tables."
  - name: "Open Standards & Interoperability"
    weight: 20
    score: 88
    notes: "Built on ISO 28500 WARC standard and Apache Parquet URL indices."
evidence:
  - id: "EV-029-A"
    type: "Schema"
    description: "ISO 28500 WARC / Parquet Columnar Index Validation"
    reference: "s3://commoncrawl/cc-index/table/cc-main/"
  - id: "EV-029-B"
    type: "Audit"
    description: "Crawl Manifest Integrity & Robots.txt Compliance Report"
    reference: "commoncrawl.org/blog/2026-crawl-metrics"
---

### Executive Assessment

Common Crawl remains the primary open benchmark corpus for web-scale linguistics, information retrieval, and foundation model pretraining. Its immutable monthly partitions provide strong reproducibility guarantees.

### Key Strengths

* **Immutable Snapshots:** Partition identifiers (`CC-MAIN-YYYY-WW`) allow researchers to cite exact byte ranges and reproduce filtering pipelines deterministically.
* **Open Format Compliance:** Native WARC and Parquet manifests integrate cleanly with distributed compute frameworks.

### Risk & Limitations

* **Upstream Licensing Heterogeneity:** While crawl archives are openly distributed, individual crawled pages retain their original copyright status, requiring downstream compliance filtering.
