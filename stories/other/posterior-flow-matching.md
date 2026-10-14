---
title: "Posterior Flow Matching"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.13994"
authors: ["Chenrui Ma, Xi Xiao, Lin Zhao, Xinru Jiang, Tianyang Wang, Yanning Shen, Ferdinando Fioretto"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.13994v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Flow matching learns how to transport noise toward data, but its mean prediction does not directly report the endpoint uncertainty remaining at an intermediate state. This paper introduces Posterior Flow Matching (PFM), a general generative modeling framework that learns conditional velocity means and componentwise variances with a Gaussian posterior model. The same model evaluation supplies both a transport prediction and endpoint uncertainty, making posterior diagnostics available throughout generation. These learned moments support a mean-driven ordinary differential equation (ODE) and a posterior-driven stochastic differential equation (SDE), whose local noise scales adapt to the predicted uncertainty. Across image, point-cloud, molecular, and action generation, PFM improves generation quality and provides endpoint-posterior readouts throughout generation.
