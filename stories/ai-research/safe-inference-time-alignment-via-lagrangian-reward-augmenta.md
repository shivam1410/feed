---
title: "Safe Inference-Time Alignment via Lagrangian Reward Augmentation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02781"
authors: ["Yaswanth Chittepu, Ativ Joshi, Sohini Chintala, Scott Niekum"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.02781v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02781v1 Announce Type: new Abstract: Inference-time alignment steers a frozen language model during decoding using auxiliary reward signals, avoiding the cost of repeated weight updates. However, existing inference-time alignment methods typically optimize a single scalar score, so explicit safety constraints must either be ignored or encoded through manually tuned penalties. We propose Lagrangian Reward Augmentation (LARA), a general inference-time alignment framework under safety constraints. Starting from a KL-regularized constrained objective with a reward model and a cost model, LARA dualizes the constraint and reduces the optimization problem to a one-dimensional convex problem over a nonnegative dual variable. Estimated on a small calibration set, this dual variable defines an augmented reward that can be used as a drop-in scoring signal within existing inference-time alignment methods. For sequence-level sampling methods, such as Best-of-N reranking, the calibrated dual variable corresponds to the solution of the expected-cost constrained problem. For token-level reward-guided decoding methods, the same construction yields a principled dual-calibrated heuristic rather than an exact constrained-policy guarantee. We evaluate LARA on both sequence-level and token-level inference-time alignment methods, and find that LARA improves the helpfulness-harmlessness tradeoff, with Best-of-N achieving the best performance among inference-time methods, approaching finetuning-based direct alignment baselines.
