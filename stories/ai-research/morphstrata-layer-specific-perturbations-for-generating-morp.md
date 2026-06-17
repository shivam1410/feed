---
title: "MorphStrata: Layer-Specific Perturbations for Generating Morphence Students in Time-Series Moving Target Defense"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17435"
authors: ["Abhishek Bhardwaj, Arnav Doshi, Anusri Nagarajan, Thanh Quynh Nhu Ta, Mohammad Masum, Robert Chun, Jaydip Sen, Saptarshi Sengupta"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.17435v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17435v1 Announce Type: new Abstract: Time-series forecasting models remain vulnerable to gradient-based adversarial attacks while existing defense mechanisms typically incur a trade-off in robustness for bounded response and compute cost. The problem is pronounced in Moving Target Defense where maintaining multiple randomized model instances substantially exacerbates the training overhead. In this work, we introduce MorphStrata, a student generation strategy with selective, layer-specific stochastic noise injection that extends the traditional Morphence defense. MorphStrata uses a Transformer backbone as the teacher and perturbs randomly selected architectural blocks to create structured heterogeneity across student models in response to varied data distributions and threat models. We evaluate against vanilla Transformer and Morphence backbones on a suite of benchmarks including the Jena Climate, Electricity Load Diagrams, and Appliances Energy Prediction using FGSM, BIM and PGD attacks across multiple attack strengths. Across datasets and attack regimes, the proposed ensemble maintains comparable adversarial RMSE. Specifically, for high entropy, periodic datasets as in the case of the AEP data, MorphStrata achieves the lowest RMSE across all attacks and perturbation budgets, improving over the static baseline by up to 24.11% and 97.97% under FGSM and BIM respectively at an epsilon value of 0.5 over 30 randomized trials. Targeting the layers to generate MorphStrata students accounts for less than 1% increase in train-times over the Morphence MTD baseline for most of the experiments, while accounting for double digit gains in adversarial RMSE reduction. We also observe a positive correlation between higher pairwise L2 distance (among generated students) and overall defense effectiveness. In summary, MorphStrata maintains adversarial robustness as an MTD defense at marginal cost deltas when compared to existing baselines.
