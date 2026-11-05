---
title: "Learning Directional Randers Geometry for Latent-Space Exploration"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03675"
authors: ["Th\\'eau Blanchard (HeKA | U1346, GE Healthcare), St\\'ephanie Allassonni\\`ere (CMAP)"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03675v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Deep neural networks extract powerful latent representations from images, enabling fast and efficient downstream analysis. However, these latent spaces lack explicit geometric structure, leading to possibly poor interpolation fidelity and misleading extrapolation. Latent interpolation techniques assume symmetric transition costs which are often not the case for real world data. Their symmetric nature cannot capture directional processes, such as disease progression, where certain transitions are impossible (e.g. tumor growth dynamics or cognitive improvement in Alzheimer's disease). Although Riemannian metrics extend Euclidean geometry by incorporating curvature, they remain symmetric. We show that understanding asymmetry and not curvature alone directly addresses these problems. To do so we propose a new Finsler-Randers metric learning framework. It incorporates direction-dependent distances, thus enabling the computation of trajectories respecting monotonic sequential constraints. We demonstrate its potential for interpolation and extrapolation on controlled cross-sectional datasets.
