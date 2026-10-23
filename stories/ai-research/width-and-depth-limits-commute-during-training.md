---
title: "Width and Depth Limits Commute During Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30729"
authors: ["Ruijia Zhang, Soufiane Hayou"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.30729v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Recent work established that the infinite-width and infinite-depth limits of residual networks commute at initialization when residual branches are scaled by $1/\sqrt{depth}$. In particular, the network output converges to the same limit whether width and depth tend to infinity sequentially or jointly. We extend this commutativity result to training in linear residual networks. Under the same $1/\sqrt{depth}$ residual-branch scaling (Depth-$\mu$P) and the $\mu$P width parameterization, we prove that, for any fixed number of gradient-descent steps with gradient clipping, the network output converges in $L^2$ along every joint width--depth growth path as both width and depth tend to infinity. Consequently, the infinite-width and infinite-depth limits commute throughout any finite training horizon. Without gradient clipping, the corresponding $L^2$ convergence does not hold in general, but we establish the weaker convergence in probability.
