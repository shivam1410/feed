---
title: "Attention Is All You Need (to Avoid Spurious Oscillations)"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13531"
authors: ["Jinyoung Jeong, Joseph B. Choi, Xinlun Cheng, H. S. Udaykumar, Sanghun Choi, Stephen S. Baek"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13531v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13531v1 Announce Type: new Abstract: Can attention move a shock across several cells in one update without breaking it? We develop a conservative, fixed grid finite-volume scheme in which a CFL-conditioned attention flux selects upstream information according to the transport required by the current time step. One-dimensional inviscid Burgers transport is used as the central mechanism test: the same learned flux remains reliable in the conventional small-step regime and, with a time step four times larger, preserves sharp shocks while using one stage per update. A standard fifth-order WENO scheme with third-order strong-stability-preserving Runge-Kutta time integration (WENO-5+SSP-RK3) is included alongside controlled Forward Euler comparisons to separate flux selection from time integration. The learned attention shifts upstream with the local transport reach and becomes more selective near shocks; inference-time interventions and retrained ablations show that transport-scale information and state-dependent selection contribute directly to performance. Directional two-dimensional scalar Burgers transport and the one-dimensional shallow-water system then test whether the conservation-scale-selection principle transfers beyond the original scalar setting. The results support attention as a learnable information stencil for conservative large-step shock transport, while identifying finite candidate reach and problem-dependent robustness as the present limits.
