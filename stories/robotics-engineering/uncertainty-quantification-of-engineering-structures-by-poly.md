---
title: "Uncertainty Quantification of Engineering Structures by Polynomial Chaos Expansion and Multivariate Active Learning"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17233"
authors: ["Qitian Lu, Jafar Jafari-Asl, Panagiotis Spyridis, Lukas Novak"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.17233v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17233v1 Announce Type: new Abstract: In many engineering applications, a single high-fidelity model produces multiple quantities of interest (QoIs) under the same input parameters, e.g. finite element models of complex physical systems. To alleviate the high computational cost of direct model evaluations, surrogate models are widely used to construct efficient approximations of model responses. Naturally, the accuracy of surrogates strongly depends on the quality of the experimental design (ED). However, a single ED may not provide an adequate representation for all outputs simultaneously, especially when different outputs exhibit varying sensitivities to the input variables. A straightforward solution is to perform separate sampling for each output, but this results in increased sampling complexity and computational cost. From a statistical perspective, such an approach also ignores potential correlations among all outputs and may compromise data consistency. To address this issue, an adaptive sequential sampling method for constructing polynomial chaos expansion surrogate models is generalized for vector valued QoIs. The method sequentially selects new samples from a candidate pool based on their local contribution to the output variance, while balancing distance-based exploration of the input space and exploitation of aggregated variance information across all outputs. Its performance is compared with non-sequential Latin Hypercube Sampling through several numerical examples from engineering problems. Numerical results demonstrate that the proposed strategy improves both surrogate accuracy and stability, and provides a more reliable estimation of second-order statistics.
