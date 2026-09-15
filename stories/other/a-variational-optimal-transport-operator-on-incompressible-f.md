---
title: "A Variational Optimal Transport Operator on Incompressible Flow"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13729"
authors: ["Jinjin He, Shenyifan Lu, Sinan Wang, Zhiqi Li, Duowen Chen, Bo Zhu"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13729v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13729v1 Announce Type: new Abstract: We present the Variational Incompressible Optimal Transport (VIOT) operator, a generative neural operator for amortized incompressible density transport. Given a new source-target density pair, VIOT predicts a divergence-free velocity field and generates the full transport trajectory by feed-forward inference, replacing the hour-scale per-pair optimization used by adjoint fluid solvers and differentiable simulation baselines. The system consists of three components: a stream-function or vector-potential representation that enforces incompressibility by construction, a regularized incompressible transport objective that balances endpoint accuracy and flow smoothness, and a Fourier Neural Operator backbone that amortizes the solve across new pairs and grid resolutions. Together, these components make incompressible transport a reusable neural operator that facilitates various transport processes. Further, the generative capability extends beyond the training distribution, with VIOT producing incompressible transports for user-drawn source-target pairs in a real-time interactive system. We demonstrate VIOT on 2D and 3D density-transport benchmarks. Both 2D and 3D rollouts complete in seconds per pair, while per-instance baselines in our 2D comparisons optimize each new pair from scratch and require on the order of an hour, a roughly $10^4\times$ online speedup.
