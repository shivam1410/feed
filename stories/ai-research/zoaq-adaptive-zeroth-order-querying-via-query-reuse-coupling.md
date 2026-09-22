---
title: "ZoAQ: Adaptive Zeroth-Order Querying via Query-Reuse Coupling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22115"
authors: ["Yangyang Feng, Yao Shu"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.22115v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22115v1 Announce Type: new Abstract: Zeroth-order optimization (ZOO) estimates updates from function evaluations, making perturbation queries a primary cost. Fixed budgets spend the same number of queries at every step, while adaptive controllers may offset their savings by using additional oracle calls to test estimator reliability. We introduce ZoAQ, an adaptive ZOO method built around query reuse. Rather than discarding past evaluations after each step, ZoAQ makes them useful for both the next update and the decision to query further. This enables adaptive query allocation without extra validation queries. Our analysis characterizes when this agreement identifies an update that supports descent and guides the controller to a sufficient query budget. On synthetic objectives, ZoAQ reduces queries by 43-48% relative to fixed baselines using 1.2M queries. In black-box attacks, it reaches 100% success with 320 and 625 average queries on MNIST and CIFAR-10, respectively. Across four OPT fine-tuning settings, ZoAQ saves 43-46% forward evaluations relative to fixed K=4, with accuracy changes within tasks ranging from -0.018 to +0.010.
