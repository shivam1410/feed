---
title: "Improving Parameter Utilization by Sharing Neural Experts Across Layers in Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22199"
authors: ["Dian Jiao, Jiaxin Duan, Shuai Zhao, Jiabing Leng, Yiran Zhang, Feng Huang"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.22199v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22199v1 Announce Type: new Abstract: Transformer-based large language models often suffer from inter-layer parameter redundancy, where functional transformations are redundantly learned across network depths. We propose CS-MoE, a novel Transformer architecture featuring cross-layer expert sharing to address this inefficiency. Deviating from the widely used Mixture-of-Experts (MoE) architecture that terminates each Transformer block with layer-isolated experts, CS-MoE combines layer-independent experts with concurrent access to a centralized, globally shared expert pool. This \textit{Global Experts Sharing} mechanism enables elastic control over token-level parameter activation and computational consumption (FLOPs). Experiments demonstrate that CS-MoE achieves lower perplexity than equal-scale dense Transformers while activating only 55\% of parameters. Furthermore, its performance scales monotonically with an increased number of activated experts and approaches MoE counterparts that consume more FLOPs by expanding the shared pool with a fixed FLOPs budget. CS-MoE also establishes a flexible Pareto frontier between computational cost and model capacity, offering an efficient alternative for computation-constrained environments.
