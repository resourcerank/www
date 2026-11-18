---
title: "Mandate Safetensors Serialization for Evaluated Machine Learning Checkpoints"
rdr_id: "RDR-009"
status: "Provisional"
domain: "Security & Supply Chain"
date: 2026-10-22
review_cycle: "Quarterly (Next: 2027-01)"
authors:
  - "ML Platforms & Registries WG"
related_resource_name: "Hugging Face Hub (RR-PL-0041)"
related_evaluation: "/evaluations/huggingface-hub/"
supersedes: "None"
summary: "Require non-executable tensor serialization formats (Safetensors or GGUF) for any model artifact achieving Verified status."
---

### Context & Problem Statement

Legacy Python `pickle`-based model checkpoints can execute arbitrary code upon deserialization, posing an unacceptable supply-chain risk for automated evaluation pipelines.

### Decision

Model artifacts hosted on public registries such as Hugging Face Hub must provide weights in **Safetensors** (or auditable GGUF) format to qualify for a ResourceRank score above 75 (`Verified`).

### Consequences

* **Positive:** Eliminates arbitrary code execution during weight loading and enables zero-copy memory mapping.
* **Trade-off:** Older legacy checkpoints lacking Safetensors conversions are capped at `Provisional` status until converted and checksum-verified.
