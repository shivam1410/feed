---
title: "Neural Network-Assisted CLEAN for Channel Modeling in Low-SNR Regimes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27450"
authors: ["Chaofan Deng, Linyu Sun, Jaeho Lee, Arijit Raychowdhury"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.27450v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27450v1 Announce Type: new Abstract: Accurate multipath parameter estimation is critical for modern wireless communication systems, particularly in challenging low-SNR environments. Traditional Maximum Likelihood Estimation algorithms, such as CLEAN, provide high-resolution parameter extraction but suffer from prohibitive computational complexity due to exhaustive grid search. Conversely, purely data-driven deep learning approaches lack physical grounding and struggle to generalize across variable multipath densities and off-grid parameters. To address these limitations, this paper proposes Neural Network-Assisted CLEAN (NN-CLEAN), a hybrid framework that embeds a multi-head residual network directly into the iterative CLEAN extraction loop. By replacing the exhaustive grid search with rapid, parallelizable forward passes while delegating residual subtraction to exact mathematical models, NN-CLEAN isolates physical multipath parameters without accumulating non- physical errors. Extensive Monte Carlo simulations demonstrate that NN-CLEAN achieves estimation accuracy exceeding 96% at 5 dB SNR, matching the traditional Grid-Search CLEAN (GS- CLEAN) baseline, while providing a massive reduction in computational complexity and substantially outperforming subspace methods and standalone one-shot neural networks. Crucially, NN-CLEAN exhibits a near-flat scaling in execution runtime and memory consumption as batch sizes increase. This highly efficient parallelization establishes NN-CLEAN as a robust, real- time solution for channel estimation in MIMO systems.
