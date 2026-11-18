---
title: "OpenStreetMap (OSM)"
resource_id: "RR-DS-0008"
category: "Dataset"
version: "Planet-261012"
license: "ODbL-1.0"
steward: "OpenStreetMap Foundation"
canonical_url: "https://www.openstreetmap.org"
assessor: "Geospatial & Civic Data WG"
assessed_date: 2026-10-15
overall_score: 91
decision_id: "RDR-002"
decision_record: "/decisions/rdr-002-transactional-persistence/"
summary: "Crowdsourced, globally maintained open geospatial database distributed under the Open Database License."
dimensions:
  - name: "Provenance & Lineage"
    weight: 25
    score: 93
    notes: "Every node, way, and relation carries full changeset attribution, timestamp, and ODbL contributor terms."
  - name: "Empirical Evidence & Reproducibility"
    weight: 30
    score: 88
    notes: "Weekly planet PBF snapshots and minutely replication diffs allow exact point-in-time spatial state reconstruction."
  - name: "Operational Reliability & Maintenance"
    weight: 25
    score: 91
    notes: "Global contributor community backed by the non-profit OpenStreetMap Foundation."
  - name: "Open Standards & Interoperability"
    weight: 20
    score: 93
    notes: "Supported across GDAL, QGIS, PostGIS, OSRM, and Overture Maps pipelines via XML and PBF schemas."
evidence:
  - id: "EV-008-A"
    type: "Provenance"
    description: "OSM Full History Planet Dump & Changeset Audit Log"
    reference: "planet.openstreetmap.org/planet/full-history/"
  - id: "EV-008-B"
    type: "License"
    description: "Open Data Commons Open Database License (ODbL) v1.0"
    reference: "opendatacommons.org/licenses/odbl/1-0/"
---

### Executive Assessment

OpenStreetMap provides unmatched transparency in geospatial data lineage. Every geometric edit is tied to an auditable changeset, enabling fine-grained quality filtering and reproducible spatial analysis.
