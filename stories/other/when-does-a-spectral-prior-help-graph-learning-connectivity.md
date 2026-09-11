---
title: "When does a spectral prior help graph learning? Connectivity-loss estimation under road-network disruptions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11166"
authors: ["Van-Truong Le"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11166v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11166v1 Announce Type: new Abstract: Rapid evaluation of many simultaneous road-link disruptions requires a practical compromise between exact spectral recomputation and local approximation. We estimate relative algebraic-connectivity loss after multi-edge deletion using graph neural networks (GNNs) that learn a bounded correction to a first-order Fiedler sensitivity. The study considers independent, spatially clustered, and edge-betweenness-targeted failures, with graph-disjoint synthetic splits and zero-shot transfer to 13 OpenStreetMap (OSM) areas in six countries. GCN, GraphSAGE, and edge-aware MPNN backbones are compared with analytical baselines. In expanded OSM tests, residual GCN improves spatial-failure MAE by 0.0391 (95% hierarchical interval 0.0151-0.0662), while residual GraphSAGE improves targeted-failure MAE by 0.0257 (0.0095-0.0446). Second-order perturbation improves first-order MAE by only 0.0028-0.0053. Correction slopes decrease under targeted transfer, indicating residual shrinkage around systematic prior error. Leave-one-country-out OSM-to-OSM transfer is mixed: residual GCN improves targeted-failure MAE by 0.0622 (0.0169-0.1153) but worsens the spatial point estimate. Sparse scaling extends to 20,000 nodes and separates one-time spectral setup from amortized screening cost. These results characterize the spectral residual as a useful but domain-sensitive inductive bias for structural connectivity screening. Code, cached networks, and reproducibility artifacts are archived at doi:10.5281/zenodo.22307723.
