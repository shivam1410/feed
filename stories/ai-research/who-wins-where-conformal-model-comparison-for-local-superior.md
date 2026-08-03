---
title: "Who Wins Where? Conformal Model Comparison for Local Superiority"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.29053"
authors: ["Yi Zhou, Baishi Li, Xuan Yao, Ke-Wei Huang"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2607.29053v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.29053v1 Announce Type: new Abstract: Standard model comparison is global, aggregating losses across the covariate space to declare a single winner. This can obscure heterogeneous performance, where different models are preferable in different regions. We introduce conformalized local model comparison, a split-sample framework for constructing calibrated local best-model maps. Given a model comparison score, such as the difference between two squared losses, the method uses three disjoint splits to fit competing models, estimate local centers and scales from out-of-sample scores, and conformally calibrate residual uncertainty. At a target point, the procedure declares a local winner only when a one-sided conformal bound excludes a tie, with the score's sign determining the favored model. We prove finite-sample marginal control for one-sided erroneous declarations on the realized future comparison score, establish pointwise consistency of the localized mean-score estimator away from tie boundaries, show that aggregate comparison can disagree sharply with the prevalence of local superiority, and derive a squared-loss bias--variance decomposition that clarifies how model structure affects local wins. Synthetic and real-data experiments show that the method recovers heterogeneous winner regions, abstains under uncertainty, and yields higher conditional gain than global selection.
