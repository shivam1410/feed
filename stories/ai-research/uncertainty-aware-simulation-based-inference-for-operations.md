---
title: "Uncertainty-Aware Simulation-Based Inference for Operations Research with Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00019"
authors: ["Liang Guo, Lin Shaochong, Shen Zuo-Jun Max, Zhang Kun"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.00019v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00019v1 Announce Type: new Abstract: Deploying large language models (LLMs) for operations research (OR) tasks remains challenging because correctness depends on a coherent modeling process, not merely a correct final answer. Standard autoregressive generation operates on a myopic policy, which sometimes fails to anticipate whether a partial formulation can be validly extended into a globally consistent optimization model. Consequently, locally plausible steps may propagate into catastrophic downstream formulation or solver code errors. To address this, we propose an uncertainty-aware, training-free inference framework for OR mathematical modeling. Without updating model parameters, our method evaluates intermediate candidate steps using short lookahead simulations to quantify downstream predictive uncertainty or probability concentration. Candidates that demonstrate a higher likelihood of yielding coherent mathematical formulations are then dynamically selected via importance resampling. Empirical evaluations across multiple OR benchmarks (including NL4OPT, MAMO, and IndustryOR) demonstrate that our framework consistently outperforms both standard and low-temperature baselines, establishing an efficient, training-free paradigm for reliable OR formulation generation.
