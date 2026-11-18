---
title: "Standardize on PostgreSQL for Auditable Metadata & Ledger Persistence"
rdr_id: "RDR-002"
status: "Accepted"
domain: "Core Infrastructure"
date: 2026-08-28
review_cycle: "Annual (Next: 2027-08)"
authors:
  - "Architecture Review Board"
  - "Core Systems & Storage WG"
related_resource_name: "PostgreSQL (RR-SW-0003)"
related_evaluation: "/evaluations/postgresql/"
supersedes: "RDR-001"
summary: "Adopt PostgreSQL 17+ as the canonical relational store for provenance graphs, evaluation records, and cryptographic audit logs."
---

### Context & Problem Statement

ResourceRank registries require a storage engine capable of enforcing strict relational constraints across assessments, evidence artifacts, and historical revisions while remaining free of single-vendor licensing hazards.

### Evaluated Options

1. **PostgreSQL 17 (Score: 96/100):** Permissive BSD-style license, mature JSONB indexing, strong ACID guarantees, and broad managed/self-hosted parity.
2. **Proprietary Cloud NewSQL Services:** High operational convenience but introduces vendor lock-in and opaque engine internals.

### Decision

We adopt **PostgreSQL 17+** as the baseline persistence engine for all ResourceRank reference deployments. All schema migrations must remain compliant with standard SQL and avoid proprietary hosted extensions.

### Consequences

* **Positive:** Zero licensing friction; deterministic point-in-time recovery; native `jsonb` support for flexible evidence payloads.
* **Trade-off:** Horizontal write sharding requires explicit application-level partitioning beyond single-node capacity.
