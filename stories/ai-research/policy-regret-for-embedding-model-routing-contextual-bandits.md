---
title: "Policy Regret for Embedding Model Routing: Contextual Bandits with Low-Rank Experts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14929"
authors: ["Yan Dai, Negin Golrezaei, Patrick Jaillet"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.14929v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.14929v1 Announce Type: new Abstract: Modern recommendation systems increasingly rely on dynamically routing diverse queries to multiple embedding models. Despite its practical significance, this problem remains poorly understood under realistic conditions like adversarial queries, bandit feedback, and limited observability of models. We formalize embedding model routing as an adversarial contextual linear bandit with low-rank experts, where contexts are queries, actions are items, and experts are the embedding models working on low-rank latent representation spaces. We first establish that standard regret notions suffer from structural misspecification or statistical intractability, and we identify a log-quadratic policy class that is expressive enough to capture query-dependent model routing, yet structured enough to allow efficient online learning. Second, we propose a policy gradient algorithm called Hypentropy Policy Gradient (HPG). It provably adapts to the unknown low-rank structure under incomplete information and attains $\tilde{\mathcal O}(s\sqrt{M T})$ linearized policy regret -- where $s, M$, and $T$ are the intrinsic rank of the experts, the number of models, and the number of rounds -- thus avoiding a curse of dimensionality. Finally, we also provide an computationally efficient and parameter-free implementation of HPG.
