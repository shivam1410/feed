---
title: "The Degeneracy Distillery"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23838"
authors: ["T. Lucas Makinen, Deaglan J. Bartlett, Niall Jeffrey, Benjamin D. Wandelt"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23838v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23838v1 Announce Type: new Abstract: When two or more parameters or labels produce similar data, they are degenerate, or hard to distinguish. Degeneracies render both label prediction and inverse problems difficult, since both machine learning algorithms and probabilistic samplers rely on the distinguishability of data and its gradients with respect to parameters. However, identifying degeneracies in physical models or real-world datasets can be elucidating about the choice of model or the underlying process that produces the data. We present the degeneracy distillery, a method that (1) detects and (2) resolves degenerate parameter combinations (a) automatically and (b) symbolically, from parameter-data (or parameter-simulation) pairs alone, through estimation and flattening of the Fisher information matrix. By exploring the information geometry of the likelihood, we characterize degeneracies as an intrinsic property of the physical model, requiring no realised data observation. We demonstrate our approach on a range of synthetic and real-world problems, discovering symbolic coordinate transformations that identify the combinations of parameters of a model which yield independent effects on the data. The resulting coordinates flatten the Fisher information in expectation globally, in contrast to posterior-based methods that flatten only at a single point, and substantially reduce the simulation budget required for downstream neural posterior estimation. In test cases we require up to $10\times$ fewer simulations for posterior estimation at matched validation calibration whilst simultaneously gaining physical insight on the system.
