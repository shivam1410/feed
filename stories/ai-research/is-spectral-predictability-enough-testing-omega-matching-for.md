---
title: "Is spectral predictability enough? Testing {\\Omega}-matching for synthetic pretraining under distribution shift"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30802"
authors: ["Edric Castel C. Hao, Juan Raphael S. Se\\~na, Neon S. De Jesus"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.30802v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Synthetic pretraining under distribution shift requires deciding what synthetic data to use. A natural criterion is to match the spectral predictability $\Omega$ of the source to the target, but is $\Omega$ sufficient? We test this hypothesis, which we call predictability-aware pretraining, across three architectures (LSTM, PatchTST, TCN) and three seeds. Under ideal synthetic-to-synthetic conditions, $\Omega$-matched pretraining can outperform even an oracle baseline (+46.8% MSE reduction, LSTM), though the benefit is already architecture-dependent. On the real-world ETTm1 benchmark, however, this relationship does not hold: sine-plus-noise pretraining at matched $\Omega$ yields only a marginal mean improvement +2.3% averaged over all three architectures, up to +65.5% on individual channels), whereas $\Omega$ matched chaotic ODE trajectories systematically degrade performance -13.2%). The two sources agree on the direction of transfer for only 53% of configurations across all three architectures (Pearson r=-0.02), indicating that $\Omega$ carries little information about which source will transfer beneficially. We further observe an architecture-dependent asymmetry in the response to the direction of the $\Omega$ gap. We conclude that $\Omega$ matching can help in controlled settings but is not sufficient to predict transfer across sources, and we discuss additional signal properties that a source-selection criterion may need to consider.
