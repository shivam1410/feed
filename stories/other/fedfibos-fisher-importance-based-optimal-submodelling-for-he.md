---
title: "FedFIbOS: Fisher Importance based Optimal Submodelling for Heterogeneous Federated Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19559"
authors: ["Yasmeen Afzal, Jeremiah D. Deng, Haibo Zhang"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19559v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19559v1 Announce Type: new Abstract: Heterogeneous federated learning requires clients with diverse computational capacities to collaboratively train a global model, where each client trains a capacity-constrained submodel. Existing methods select submodel parameters using heuristic importance measures---most prominently parameter magnitude---without theoretical justification for why these measures support convergence. We identify a fundamental gap: existing parameter selection criteria lack theoretical grounding in the convergence framework, partial client participation introduces additional estimation effects in the Fisher scores. We propose \textbf{FedFIbOS}: Fisher Importance-based Optimal Submodelling for heterogeneous federated learning, using Fisher Information in a principled criterion derived from minimizing submodel masking error. %We formally establish when magnitude selection is equivalent to Fisher selection fail under non-IID heterogeneous federated learning. We theoretically formulate submodel selection through a Fisher-weighted quadratic masking surrogate and show that the raw Fisher top-$k$ rule implemented by FedFIbOS solves this surrogate under a Fisher-dominant ranking condition. The resulting method retains the convergence structure of the underlying masked federated optimization bound. Fisher scores are efficiently estimated from empirical diagonal Fisher information using squared gradients, enabling stable and adaptive parameter selection without additional optimization overhead. Experiments on CIFAR-10, CIFAR-100, and AGNews under pathological and Dirichlet non-IID settings show FedFIbOS achieves ${\approx}10\%$ higher accuracy than the state of the art, with improvements becoming more pronounced under stronger heterogeneity.
