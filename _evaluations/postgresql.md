---
title: "PostgreSQL"
resource_id: "RR-SW-0003"
category: "Software"
version: "17.1"
license: "PostgreSQL"
steward: "PostgreSQL Global Development Group"
canonical_url: "https://www.postgresql.org"
assessor: "Core Systems & Storage WG"
assessed_date: 2026-08-21
overall_score: 96
decision_id: "RDR-002"
decision_record: "/decisions/rdr-002-transactional-persistence/"
summary: "Enterprise-grade open-source object-relational database system renowned for ACID compliance, extensibility, and standards conformance."
dimensions:
  - name: "Provenance & Lineage"
    weight: 25
    score: 97
    notes: "Over three decades of public commit history, BSD-style permissive license, and multi-organization core team."
  - name: "Empirical Evidence & Reproducibility"
    weight: 30
    score: 95
    notes: "Extensive TAP regression suite, Jepsen serializability analyses, and public buildfarm telemetry."
  - name: "Operational Reliability & Maintenance"
    weight: 25
    score: 97
    notes: "Predictable 5-year major version support lifecycle and deterministic point-in-time recovery."
  - name: "Open Standards & Interoperability"
    weight: 20
    score: 95
    notes: "High SQL:2023 conformance, logical replication protocols, and Foreign Data Wrappers."
evidence:
  - id: "EV-003-A"
    type: "Audit"
    description: "PostgreSQL Buildfarm Continuous Cross-Platform Matrix"
    reference: "buildfarm.postgresql.org"
  - id: "EV-003-B"
    type: "Verification"
    description: "Source Tarball SHA-256 & PGP Signature Check"
    reference: "ftp.postgresql.org/pub/source/v17.1/"
---

### Executive Assessment

PostgreSQL sets the highest benchmark in the ResourceRank software registry for governance neutrality, transactional integrity, and long-term backward compatibility.

### Key Strengths

* **No Single-Vendor Control:** Governance is distributed across independent committers and companies, eliminating relicensing risk.
* **Rich Extension Ecosystem:** Extensions such as `pgvector`, `PostGIS`, and `Timescale` enable multi-model workloads without abandoning relational guarantees.
