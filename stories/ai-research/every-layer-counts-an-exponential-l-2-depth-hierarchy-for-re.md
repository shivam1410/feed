---
title: "Every Layer Counts: An Exponential $L_2$ Depth Hierarchy for ReLU Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.23877"
authors: ["Itay Safran"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2608.23877v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.23877v1 Announce Type: new Abstract: We prove a depth hierarchy for ReLU neural networks in which every additional ReLU layer can save exponentially many neurons. For every $\ell\geq 3$, a globally $[0,1]$-valued, $1$-Lipschitz function is realized by a depth-$\ell$ network of width $\mathcal{O}(d^4)$, whereas every depth-$(\ell-1)$ network with unrestricted weights and width at most $2^d/[2d(\ell-2)]$ has squared $L_2$ error at least $1/24$ under an absolutely continuous distribution. To the best of our knowledge, this is the first exponential separation for ReLU networks between two fixed depths whose shallower depth is at least $3$, and the first exponential hierarchy across all adjacent fixed depths. The lower bound also immediately yields the corresponding hierarchy for exact computation. Moreover, the case $\ell=3$ gives a compactly supported depth-$3$-versus-depth-$2$ separation with unrestricted shallow-network weights, answering a question raised by Safran, Eldan, and Shamir (2019, Sec. 2.3). The corresponding distribution nevertheless has all its mass at exponential radius, so the construction falls outside the regularity regime in which such a separation would imply major threshold-circuit lower bounds. We also prove an exact separation for a more benign function. It is computed by a polynomial-width depth-$4$ network, whereas every depth-$3$ network agreeing with it on the unit hypercube requires exponentially many neurons in its first hidden layer, again without any restriction on the weights. The function is globally $[0,1]$-valued and $\mathcal{O}(\sqrt d)$-Lipschitz, and maps the unit hypercube onto $[0,1]$.
