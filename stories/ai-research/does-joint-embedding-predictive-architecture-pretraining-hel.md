---
title: "Does Joint-Embedding Predictive Architecture Pretraining Help Time Series Forecasting?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31680"
authors: ["Yutong Feng, Bowen Liao, See Kiong Ng, Yuxuan Liang"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.31680v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Joint-embedding predictive architectures (JEPA) have emerged as a promising self-supervised pretraining paradigm for time series, learning representations by predicting target embeddings in latent space rather than reconstructing raw signals. Yet evidence on their benefits remains mixed, and most studies test only a single backbone or a narrow set of architectures, leaving unclear whether JEPA pretraining is a reliable improvement or one that depends heavily on the downstream model. We address this gap through a large scale evaluation of one JEPA instantiation across nine backbones and eleven benchmarks spanning temporal and spatio-temporal forecasting, the most extensive cross architecture assessment of JEPA for time series to date. We find that the benefit of this instantiation varies sharply across backbones, producing consistent gains for some architectures and consistent degradation for others, even on the same dataset. This pattern holds across both task families, indicating the variability is a general property of this instantiation rather than a dataset specific artifact worth accounting for when choosing a backbone in practice.
