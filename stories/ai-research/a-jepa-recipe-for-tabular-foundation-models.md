---
title: "A JEPA Recipe for Tabular Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25541"
authors: ["Mingyu Jeon, Suwan Cho, Jae Young Suh"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.25541v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25541v1 Announce Type: new Abstract: Tabular foundation models learn to predict cell values in context, whereas world-model self-supervision asks for prediction in representation space (LeCun, 2022; Assran et al., 2023). On a tabular foundation-model prior, the latent term of a joint-embedding predictive architecture (JEPA) collapsed in our earlier runs and took the encoder with it to a constant map. We report a recipe under which the latent term survives to convergence beside the value objective: the value head reads the encoder field rather than the predictor, and the target is an exponential moving average (EMA) difference. To bound its cost against the value-only arm, both arms train until a plateau rule stops them, with no fixed step budget. A fixed horizon had confounded a slowdown with a ceiling, since the value-only arm was still improving well past the usual budget. At convergence, in one run per arm, the JEPA arm trails the value-only arm across 147 real datasets, 32:70 wins to losses on classification (29:63 with one entry per dataset name) and 8:24 on regression, the margin small on classification and wider on regression, and the count leans the same way in each stratum and each benchmark. The JEPA arm (jepa) needs 1.42 times as many steps as the value-only arm (ds), and 1.66 times its wall-clock, to reach its plateau.
