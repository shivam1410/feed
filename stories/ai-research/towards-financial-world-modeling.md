---
title: "Towards Financial World Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09048"
authors: ["Humzah Merchant, Alec Guthrie, Simon Mahns, Randall Balestriero, Bradford Levy"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2610.09048v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Building a world model requires a state representation useful for planning and decision-making---potentially over tasks unknown at training time. In the context of financial markets, planning and decision-making may require a model to reason about market-wide conditions, asset-specific expected returns, liquidity, volatility, and cross-asset relationships. Yet financial representation learning has largely been evaluated on individual predictive tasks, oftentimes on a single time period using comparatively narrow datasets. We address this through three primary contributions. First, we introduce Market-1T, a dataset containing nearly one trillion observations across U.S. equities from 2008 to 2025 at 1 Hz resolution. Second, we develop and implement a rigorous evaluation protocol. Third, we conduct a systematic large-scale study of financial representation learning, comparing 18 encoder-training strategies across nearly two decades of market regimes. We evaluate learned representations both by their predictive utility on common finance tasks and through probes of latent structure. We find that encoders with similar predictive performance can organize market state very differently. Collectively, we establish a foundation for training and evaluating financial market representations in support of world models such as DINO-WM, V-JEPA 2, and LeWM.
