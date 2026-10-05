---
title: "Approximation Property of Dropout Neural Networks: Sobolev Rates and Confidence Bounds"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02253"
authors: ["Jia-He Yao"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.02253v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

The universal approximation property of dropout neural networks does not by itself describe the network size required for an accurate random realization. In this work, we study approximation of the unit ball of $W^{n,\infty}([0,1]^d)$ by ReLU networks whose edges are retained independently with probability $p$. The approximation error is measured uniformly over the input domain, and the guarantee holds with probability at least $1-\delta$ for a single sampled network. We construct networks of constant depth and size $\widetilde O_{n,d}(p^{-9}\varepsilon^{-\max\{d/n,2\}} \log(1/\delta))$. The construction combines bounded local subnetworks, localization on a successful approximation event, and a multiscale Taylor decomposition. Conversely, Sobolev capacity imposes a lower bound on the number of surviving edges, while approximation of a fixed affine function requires an output-layer cost of order $((1-p)/p)\varepsilon^{-2}\log(1/\delta)$ at sufficiently high confidence. For fixed $p\in(0,1)$ and $\delta<\min\{1/2,1-p\}$, the upper and lower bounds match in the accuracy exponent under a fixed or logarithmic depth budget. When $d\leq2n$, they also match in confidence up to logarithms of accuracy. We extend the lower bounds to $W^{n,r}$ targets with $L^s$ error, and distinguish this extension from the upper bound for $W^{n,\infty}$. The optimal retention dependence and logarithmic factors remain open.
