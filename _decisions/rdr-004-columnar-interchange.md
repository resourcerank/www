---
title: "Adopt Apache Arrow & Parquet for Bulk Evaluation Dataset Distribution"
rdr_id: "RDR-004"
status: "Accepted"
domain: "Data Interchange"
date: 2026-09-20
review_cycle: "Annual (Next: 2027-09)"
authors:
  - "Data Infrastructure Working Group"
related_resource_name: "Apache Arrow (RR-SW-0014)"
related_evaluation: "/evaluations/apache-arrow/"
supersedes: "None"
summary: "Mandate Apache Parquet for bulk archival snapshots and Apache Arrow IPC for streaming evaluation telemetry."
---

### Context & Problem Statement

Publishing large evaluation registries and benchmark histories solely as paginated JSON endpoints creates high egress overhead and slows analytical replication by third-party auditors.

### Decision

All bulk ResourceRank dataset exports shall be published as **Apache Parquet** files accompanied by SHA-256 manifests, using **Apache Arrow** schemas as the canonical type system.

### Consequences

* **Positive:** Up to 80% storage reduction over raw JSONL; direct querying via DuckDB, Polars, Spark, and R without custom parsers.
* **Trade-off:** Human inspection requires CLI tooling (`parquet-tools` or DuckDB) rather than a plain text editor.
