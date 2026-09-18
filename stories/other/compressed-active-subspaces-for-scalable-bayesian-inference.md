---
title: "Compressed Active Subspaces for Scalable Bayesian Inference"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19539"
authors: ["Thomas Flynn, Sanket Jantre, Byung-Jun Yoon, Kibaek Kim"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19539v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19539v1 Announce Type: new Abstract: Active subspace methods provide a framework for quantifying predictive uncertainty in high-dimensional models by identifying and performing inference along parameter directions that have the greatest influence on the model output. However, the construction of active subspaces requires storing many full-dimensional model gradients, which becomes prohibitive as model size increases. We address this limitation by proposing Compressed Active Subspaces (CAS), a scalable approach that first maps the model parameters to a compressed space using a structured isometric embedding and then constructs the active subspace within this reduced parameterization. Our approach substantially reduces the memory required for active subspace construction and enables Bayesian inference for large models where standard active subspace methods become impractical. We demonstrate the scalability of CAS on neural networks of increasing size while maintaining predictive performance and robust uncertainty estimates.
