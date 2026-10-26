---
title: "Forecasting Associations, Not Interventions: A Preregistered Causal Audit of Covariate-Aware Time Series Foundation Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31869"
authors: ["Zong-Han Bai"]
date: "Mon, 26 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31869v1"
image: ""
generated: "2026-10-26T19:00:28+05:30"
---

Covariate-aware time series foundation models (TSFMs) accept a future path for a control variable and return a forecast, inviting what-if queries. The query is interventional; the models are trained on observational data. We determine whether their answers are the conditional slope $\partial E[Y|X]$ or the interventional effect $\partial E[Y|do(X)]$, at three levels. Theory: a Bayes-optimal observational predictor answers interventional queries associationally unless the adjustment set is available and used; for in-context least squares we derive the resulting confounding gap -- a model's effect estimate under an observational minus under a randomized context -- in closed form, a parameter-free reference line. Behaviour: on a preregistered grid with exact counterfactual ground truth, Chronos-2, TiRex-2, TabPFN-TS and TimesFM-2.5 all track this line ($R^2$ 0.90-1.00) and respond more confounded than regression itself (slopes 1.3-1.8), on linear and nonlinear structural models. Pairs of models with identical observational laws prove this is not an identifiability limit: when the effect is identifiable, least squares recovers 100% of the true effect difference, Chronos-2 75%, TiRex-2 34%. Representation: linear probes decode the data-generating regime (94-96%) and the true effect ($R^2$ 0.7-0.9) from embeddings that the forecasts ignore. On two physical systems with randomized actuators, pretrained models under-respond by 2-5x and ignore in-window confounding. Minutes of interventional post-training on 3,000 synthetic series cut the gap by up to 83% and transfer outside the training prior. Its forecasting cost is a replay-distribution effect: replaying the model's own pretraining prior cuts it from +47% to +10% MASE, and with low-rank adaptation yields a recipe meeting the preregistered criterion over three seeds (52-61% gap reduction at +1-3% cost) while improving the DoTime benchmark.
