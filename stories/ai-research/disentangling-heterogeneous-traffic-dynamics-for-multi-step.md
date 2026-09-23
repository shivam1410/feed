---
title: "Disentangling Heterogeneous Traffic Dynamics for Multi-Step Traffic Forecasting via Adaptive Spectral Decomposition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25777"
authors: ["Zijun Huang, Chenrui Fu, Wenhao Wang, Xiaochuan Gou, Chih-Chieh Hung, Guanyao Li"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25777v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25777v1 Announce Type: new Abstract: Accurate multi-step traffic forecasting remains challenging because observed traffic signals contain heterogeneous temporal dynamics with different characteristics and levels of predictability. Existing approaches typically model these dynamics within a unified representation or rely on predefined decomposition rules, which may limit their ability to flexibly separate persistent patterns from rapidly varying fluctuations. To address this issue, we propose the Adaptive Decomposition Network (ADNet), a component-specific forecasting framework that adaptively disentangles traffic dynamics into dominant and residual components. ADNet introduces a learnable complementary spectral decomposition mechanism that determines the contribution of each frequency bin to the two components. Unlike hard frequency partitioning, every frequency bin can contribute to both components with different learned proportions, allowing the decomposition to be optimized jointly with the forecasting objective. The reconstructed components are then modeled by two dedicated spatiotemporal forecasting branches, and their predictions are integrated to generate the final multi-step forecast. Experiments on the Alameda and Orange regions of the TraffiDent dataset show that ADNet achieves the best performance in 20 of the 24 reported region-horizon-metric comparisons, with particularly clear gains at longer forecasting horizons. Capacity-controlled ablation experiments further show that the learnable decomposition substantially outperforms a fixed decomposition and provides additional improvements beyond the dual-branch architecture alone. These results demonstrate the effectiveness of adaptive decomposition and component-specific modeling for multi-step traffic forecasting.
