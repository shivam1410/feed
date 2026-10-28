---
title: "SpatialPC: Deep Computation with Sublinear Local Credit Propagation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36139"
authors: ["Benjamin Prada, Shion Matsumoto, Ankur Arjun Mali"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36139v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

On a chain of $N$ states, any local learning rule with bounded communication range needs $\Theta(N)$ rounds before the loss can influence the earliest parameters, and this latency is usually attributed to depth. We show that it is a property of the communication geometry rather than of depth. For $N=m^d$ states placed at constant density in $d$ dimensions, a light-cone argument gives an $\Omega(N^{1/d})$ lower bound on the number of bounded-range rounds that any local algorithm needs before its gradient estimates can be sign-correct at every parameter. We construct a unit-range, degree-$2d$ directed acyclic graph that contains a Hamiltonian computation of length $N-1$ and in which every state lies within directed distance $d(m-1)=\Theta(N^{1/d})$ of the output, matching the lower bound. In the realizable-circuit model, depth and credit depth are therefore independent parameters: represented depth $\Theta(N)$ and causal credit latency $\Theta(N^{1/d})$ coexist, with a separation of order $N^{1-1/d}$. SpatialPC realizes this separation within predictive coding. Credit is propagated by adjoint prediction dynamics (APD), a local update whose $K$-round state on a settled acyclic graph is the truncated reverse-path sum $a^K=\sum_{k<K}(J^\top)^k b$, with error exactly $(J^\top)^K a^\star$. Graph geometry fixes when credit can first arrive at a state; the Jacobian-weighted path tail fixes how many further rounds accurate credit requires. A sparse two-dimensional Moore compiler retains the $N-1$ backbone with $\tfrac32N-2$ unit-range edges and has measured worst-node reachability $\sqrt N+2$ up to $N=65{,}536$, where a 65,535-edge backbone is reached in 258 local hops. With $T=2\sqrt N$ rounds, SpatialPC keeps finite-round task gradients aligned with settled gradients (cosine $0.93$ on MNIST and $0.97$ on Fashion-MNIST at $N=256$) and reaches $97.6\%$ and $88.1\%$ test accuracy after 20 epochs.
