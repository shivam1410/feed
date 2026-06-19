---
title: "Displacement Is Not Direction: Evaluating Fidelity Metrics for Quantized LLM Deployment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19558"
authors: ["Milo\\v{s} Nikoli\\'c, Ali Hadi Zadeh, Enrique Torres Sanchez, Andreas Moshovos"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.19558v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19558v1 Announce Type: new Abstract: Fidelity metrics, such as per-token KL divergence (KLD) against a high-precision reference, are often used in practice as low-cost proxies for benchmark quality. We test this practice on a 28-quant cohort of Qwen3.6-35B-A3B and a 41-quant cohort of Devstral-Small-2-24B, evaluated across a suite of downstream benchmarks. We find that KLD is strongly correlated with benchmark score over the full cohort ($\rho=-0.72$ on Qwen and $\rho=-0.86$ on Devstral, both with $p<0.001$). However, this relationship collapses to non-significance in the near-baseline silent zone ($\rho=+0.00$ on Qwen and $\rho=-0.24$, $p=0.36$, on Devstral). This collapse persists across 14 measurement variants, including different KLD aggregations, perplexity formulations, top-1 agreement, calibration corpora, and context lengths. At the per-prompt level, KLD has only weak failure-prediction power on code, with failed-vs-passed geometric-mean ratios in $[1.08,1.22]$ across five models on LiveCodeBench, and fails as a cross-model router, achieving only $42.3\%-49.4\%$ accuracy on disagreement prompts. We trace the collapse to a structural decomposition: KLD primarily measures the volume of disagreement with the reference, with silent-zone composite $\rho=+0.94$ ($p<0.001$) on Qwen and $+0.55$ ($p=0.03$) on Devstral, while its relationship to the direction of those disagreements is weak and task-conditional.
