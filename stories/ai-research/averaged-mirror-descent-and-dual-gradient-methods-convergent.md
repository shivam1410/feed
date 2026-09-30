---
title: "Averaged Mirror Descent and Dual Gradient Methods: Convergent Algorithms for Entropic Gromov-Wasserstein Problems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31848"
authors: ["Joanna Marks, Gabriel Rioux, Riccardo Passeggeri"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.31848v2"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

The Gromov-Wasserstein (GW) distance measures the discrepancy between metric measure (mm) spaces and identifies optimal alignments between them based solely on their intrinsic structure. Since it identifies isomorphic mm spaces, it provides a natural notion of distance for heterogeneous datasets which may admit isomorphic representations. In order to accelerate computation of GW distances, many practitioners employ entropic regularization to obtain an Entropic GW (EGW) problem. The most popular EGW solver is the Mirror Descent (MD) algorithm, which reduces EGW computations to an iterative process where an entropic optimal transport (EOT) problem is solved at each iteration. Despite its widespread use, the convergence of MD for this problem has only been established for restricted classes of costs. On the other hand, a recently proposed dual gradient method is available for general costs, but requires a choice of step size which depends on the regularization parameter. To address these two issues, we introduce Averaged Mirror Descent (AMD), which averages consecutive MD steps, and prove its convergence for arbitrary costs. Then, we establish that the dual gradient method with a fixed step size also converges for arbitrary costs at the cost of a more complicated iteration. In both cases, we also account for inexact iterations which are inescapable in practice. We compare the empirical performance of these methods across various settings and, in particular, show that AMD and the dual gradient method both converge on an example where classical MD fails.
