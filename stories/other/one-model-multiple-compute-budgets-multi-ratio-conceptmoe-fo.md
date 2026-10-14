---
title: "One Model, Multiple Compute Budgets: Multi-Ratio ConceptMoE for Flexible Compute Across Turns"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14074"
authors: ["Yiyang Fu, Zihao Huang, Dongchen Han, Shukai Gong, Zhen Dong, Qiyang Min, Daquan Zhou"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14074v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Large language models typically support different inference budgets through separate model sizes or fixed compute configurations. In multi-turn interactions, however, compute demand can vary substantially across turns. Using a high-compute model for every turn wastes computation, while routing among independent models may require rebuilding model-specific history states after switches. We therefore ask whether a single shared model can support multiple compute budgets that can be flexibly assigned across turns. We introduce Multi-Ratio ConceptMoE, which jointly supports token-to-concept compression ratios of 2, 4, and 8 (CR2/CR4/CR8) within a shared backbone. Lightweight full-token modules reduce compression-independent cost, ratio-specific boundary routers support distinct compression levels, and cross-ratio training enables mixed-ratio processing within the same context. Across PTBench and SFTBench, the three fixed modes outperform their compute-matched MoE baselines in all 6 comparisons while remaining competitive with independently trained fixed-ratio specialists. On CodeChat and CoSQL, mixed-ratio inference improves the accuracy--compute trade-off, outperforming the Large MoE by 5.87 and 2.68 percentage points while reducing FLOPs by 41.1% and 12.3%, respectively. Under the same turn-wise budget schedule, Multi-Ratio ConceptMoE further reduces FLOPs by 78.4% and 46.9% relative to routing among independent models. These results demonstrate that a single shared model can provide multiple compute budgets for flexible compute allocation across turns.
