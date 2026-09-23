---
title: "Modular Norm RandOpt: Population-Efficient Ensembling through Architecture-Aware Perturbations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25745"
authors: ["Kirato Yoshihara, Hiroaki Hamade"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.25745v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25745v1 Announce Type: new Abstract: RandOpt samples weight-perturbed language models and ensembles top-ranked candidates through plurality voting, but its global perturbation scale ignores heterogeneous module geometry. We propose \mbox{\textbf{\emph{Modular Norm RandOpt}}}, an architecture-aware sampling method using module-wise natural norms and calibrated scales while preserving selection and voting. It outperforms RandOpt using $3\times$ fewer candidates on Countdown and at least $12\times$ fewer on GSM8K, with corresponding wall-clock savings. Evaluations across seven tasks and three Qwen scales ($0.5$B--$3$B) show higher mean accuracy than RandOpt on Countdown, GSM8K, and MATH-500 at every scale. The gains extend to Llama 3.2 $3$B and Gemma 3 $4$B on Countdown and GSM8K. On Qwen2.5-1.5B, our ensembles also achieve higher mean accuracy than iterative baselines on both tasks at comparable main-run evaluation budgets. On GSM8K, a tail-density diagnostic implies only a $1.2$--$1.8\times$ candidate reduction, while most ensemble improvement is associated with more favorable correct-expert support. These results highlight perturbation geometry as a key design choice for population-efficient, gradient-free search around pretrained models.
