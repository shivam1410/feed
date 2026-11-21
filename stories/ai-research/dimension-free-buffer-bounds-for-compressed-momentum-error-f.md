---
title: "Dimension-Free Buffer Bounds for Compressed-Momentum Error Feedback"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25463"
authors: ["Alireza Moayedikia"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.25463v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

Analyses of error feedback bound the memory buffer through a compressor contraction constant -- $r/p$ for the best rank-$r$ approximation of a $p$-dimensional spectrum -- which survives into the rate. We show it need not appear at all. When the compressed momentum is re-injected into the pre-compression accumulator, the previous compressed momentum $\beta_1 M_{t-1}$ is an admissible competitor in the projection, and the buffer obeys $\|E_t\|_F \le (1-\beta_1)\|G_t\|_F + \gamma\|E_{t-1}\|_F$, free of the dimensions $m,n$ and of the rank $r$. The argument uses only that the compressor is a metric projection onto a closed cone, so it covers top-$k$ selection as well as truncated SVD, holds for every selection from the projection set with no condition on singular-value crossings, and in its trajectory-tracking form assumes nothing about the gradients. In the two-stage template of the standard analyses it replaces a Stage-2 constant of order $p^2/r^2$ by one of order $1$, against $\Theta(p/r)$ for the sharpest contraction-based bounds. Transferring the full rate costs a leakage term, which we bound by the step-weighted gradient mass $\sum_{u\le t}\eta_u\|G_u\|_F$ and show tight up to a factor $\sqrt{2}$; the price is an additive $O(\log^2 T)$ floor, not a slower rate. On BERT fine-tuning at rank ratio $32/768$ the feedback decay costs under $0.008$ validation $F_1$.
