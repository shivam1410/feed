---
title: "A matched-integrator evaluation of Hamiltonian neural networks on pendulum and Kepler dynamics"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10235"
authors: ["Lenick Kemunto Nyabuto, Yae Ulrich Gaba, Birahim Tewe"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.10235v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

Hamiltonian Neural Networks (HNNs) substantially outperform generic networks at learning conservative dynamics. In matched experiments where HNN and parameter-identical baseline were trained on pendulum data, HNN reduced mean energy drift 42-fold and trajectory error 15.8-fold over 100 timesteps. Energy conservation remained bounded with lower variability across training runs; advantages increase in nonlinear regions. However, learned Hamiltonians lack separable structure H(q,p)=T(p)+V(q), so standard symplecticity guarantees don't apply. This matters for long-horizon physics simulation where energy conservation determines accuracy—architectural priors enable dramatically better results than generic learning.
