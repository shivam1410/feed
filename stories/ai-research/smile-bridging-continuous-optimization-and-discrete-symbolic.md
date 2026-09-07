---
title: "SMILE: Bridging Continuous Optimization and Discrete Symbolic Recovery"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04639"
authors: ["Mansooreh Montazerin, Antonio Ortega, Ajitesh Srivastava"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.04639v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04639v1 Announce Type: new Abstract: Symbolic regression (SR) discovers closed-form mathematical expressions from data, offering interpretability beyond black-box models. Existing methods suffer from slow convergence in combinatorial search spaces and lack mechanisms to exploit compositional structure in the data. We introduce SMILE (Sine, Multiplication, Identity, Logarithm, Exponential), a hybrid framework that unifies continuous gradient-based optimization with discrete symbolic recovery through three stages: structural analysis of the data to identify the compositional hierarchy of the target expression, continuous optimization to learn parameters of a network that encodes the target expression using interpretable activations, and symbolic recovery through structured pruning, coefficient optimization, and rounding. This final stage distills the learned network into a compact expression with exact symbolic constants. We evaluate SMILE on SRBench across ground-truth and black-box datasets, with ablation studies validating each component. SMILE achieves the highest symbolic solution rate at the largest noise levels, demonstrating strong robustness where competing methods degrade substantially. It consistently lies on the Pareto front of accuracy versus complexity, recovering significantly simpler expressions in a fraction of the time required by the competing methods.
