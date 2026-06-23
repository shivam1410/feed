---
title: "Formalizing Task-Space Complexity for Zero-Shot Generalization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20967"
authors: ["Jung-Hoon Cho, Heling Zhang, Siqi Du, Roy Dong, Cathy Wu"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20967v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20967v1 Announce Type: new Abstract: Policies must operate across diverse conditions, yet a single policy is often conservative while fully adaptive schemes can be complex. We study zero-shot generalization in contextual dynamical systems and introduce a performance-centric, directional task dissimilarity--the signed divergence--that upper bounds the generalization gap from a source context to a target context. The signed divergence induces $\varepsilon$-tolerance sets that certify when a source policy class generalizes, and it yields a concrete notion of task-space complexity: the minimum number of source contexts needed so that every target context incurs at most $\varepsilon$ generalization gap. Under a mild local smoothness assumption on performance, the induced tolerance sets admit certified inner/outer balls and instance-dependent volume bounds on task-space complexity. In the finite-oracle setting, source selection reduces to set cover; a greedy strategy inherits the standard $H(n)$ approximation guarantee. Using a Mass-Spring-Damper system with linear-quadratic regulator (LQR) controllers and a nonlinear CartPole system with deep reinforcement learning controllers, we show that greedy selection achieves the same $\varepsilon$-coverage with fewer policies than uniform or random baselines. Our approach delivers a performance-based task similarity measure and practical certificates for building generalizable control with simple policies.
