---
title: "PEBS: Per-rater Empirical-Bayes Shrinkage for RLHF Reward-Model Calibration"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27578"
authors: ["Arnav Raj"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27578v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27578v1 Announce Type: new Abstract: Reward models for Reinforcement Learning from Human Feedback (RLHF) pool preferences across thousands of annotators and fit one global affine calibrator, collapsing raters with systematically different rating-scale offsets and slopes into a single average-rater fit that does not match any individual annotator. PEBS is a per-rater empirical-Bayes shrinkage estimator: it fits per-rater affine calibrators on a held-out slice of each annotator's ratings and applies Morris-James-Stein empirical-Bayes shrinkage toward the population mean, in closed form and without retraining the reward model. On PRISM, PEBS reduces within-user held-out RMSE by 8.58% over the pooled population-slope baseline. The procedure replicates on PluriHarms harm ratings (Qwen-2.5 base, in-family) with a +9.66% RMSE reduction over the same population-slope baseline. PEBS is a closed-form post-hoc estimator for annotator-specific affine calibration in RLHF reward modeling; it leaves the reward base model unchanged and estimates only the rater-level map used at inference time for new ratings.
