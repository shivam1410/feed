---
title: "STOCK-JEPA: Prior-Anchored Latent Revision Representation Learning in Equity Markets"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07006"
authors: ["Yizhi Luo, Jiahe Yi, Jianhui Zhang, Shuo Sun"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.07006v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Learning effective representations helps characterize the structure and dynamics of equity markets from financial data with a low signal-to-noise ratio. Black-box deep models can capture complex patterns but may overfit sample noise and lack explicit economic structure. Meanwhile, classic linear financial models provide interpretable references, but their oversimplified assumptions leave non-linear signals uncaptured. To combine the strengths of these two directions, we propose Stock-JEPA, a joint-embedding predictive framework that learns predictable incremental revisions relative to a point-in-time financial prior. First, we leverage a low-complexity financial model to produce fixed statistics summarizing multi-horizon return and risk. A prior projector then maps these statistics into the target encoder's latent space as an anchor. Second, we design a context-conditioned revision predictor to estimate the future representation's predictable displacement from the anchor. Separate losses update the two branches: the anchor learns from prior statistics, while the revision captures additional predictable information from historical context. Third, we freeze all representation modules and train a downstream readout, evaluating its forecasts through cross-sectional ranking and portfolio performance. Theoretically, we prove that optimal revision reduces the prior anchor's expected squared error for the same future representation by exactly $\mathbb{E}[\|\boldsymbol{\Delta}\|_2^2]$. This non-negative gain is the expected squared magnitude of the additional signal predictable from historical context. Experimentally, Stock-JEPA outperforms 13 strong baselines across large-scale China and U.S. equity universes on 5 key evaluation metrics. Ablation studies and representation analysis further demonstrate the value of the learned revisions for representation learning in equity markets.
