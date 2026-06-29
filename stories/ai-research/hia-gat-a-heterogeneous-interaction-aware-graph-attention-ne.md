---
title: "hia-gat: A Heterogeneous Interaction-Aware Graph Attention Network For Frame-Level Traffic Conflict Risk Prediction On Freeways"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27577"
authors: ["Mahshid Malazizi, Seyedmehdi Khaleghian, Mina Sartipi, Toru Hirano, Yunfei Xu, Hoang H. Nguyen"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2606.27577v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27577v1 Announce Type: new Abstract: This paper formulates frame-level freeway risk assessment as a multi-agent scene graph-level binary classification problem, where each video or trajectory frame is labeled risky if any TTC- or PET-based conflict violates a specified severity threshold. We construct a relation-aware graph per frame with vehicles as nodes and two interaction types as edges: same-lane (longitudinal) and adjacent-lane (lateral), augmented with physics-informed edge features aligned to rear-end and lane-change conflict mechanisms. Building on a structured benchmarking suite of non-graph models and graph baselines, we propose HIA-GAT, a dual-stream heterogeneous graph attention network that processes longitudinal and lateral interactions through dedicated attention pathways and fuses them via a conflict-type-aware gating mechanism with event-level gate supervision derived from SSM conflict attribution. Experiments on the NGSIM I-80 and US-101 freeway datasets across nine TTC and PET threshold configurations show that HIA-GAT achieves the best average risk-ranking performance (AUC 0.835 on I-80 and 0.867 on US-101), with the largest gains on PET-only (lane-change) settings where relational structure is essential. Beyond accuracy, the learned gate provides interpretable per-vehicle attribution of dominant conflict type, supporting actionable, real-time freeway safety monitoring. We show that graph structure is critical for modeling lateral conflict risk, while longitudinal risk can often be captured by non-relational aggregation.
