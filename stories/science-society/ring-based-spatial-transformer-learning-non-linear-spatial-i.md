---
title: "Ring-based Spatial Transformer: Learning Non-linear Spatial Interactions between Building Distribution and Pedestrian Flow"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14660"
authors: ["Shun Nakayama, Takahiro Kanamori, Wanglin Yan"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.14660v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14660v1 Announce Type: new Abstract: This study proposes a ring-based SpatialTransformer to learn how building uses at different distances from a railway station interact to generate pedestrian flow. Concentric ring buffers at 100-meter intervals up to 800 meters were defined around 100 randomly selected stations in Tokyo, treating each ring as a spatial token. Self-Attention was applied to learn inter-zone interactions directly from data, without prior structural assumptions. GPS-derived walking trip counts served as the target variable and Geographically Weighted Regression as the baseline. Across 30 independent trials, the SpatialTransformer consistently outperformed GWR in predictive accuracy. SHAP analysis revealed that mid-to-outer distance zone features dominate pedestrian flow prediction, while features from the 0-100m zone contributed little. The attention matrix showed that each distance zone attends most strongly to spatially distant zones, demonstrating that pedestrian flow is regulated by structural interactions across the entire catchment area rather than by any single zone in isolation. These findings challenge the compact city assumption that station-proximate development maximizes pedestrian flow, and suggest that land use distribution across the full walkable catchment area deserves greater consideration in urban planning practice.
