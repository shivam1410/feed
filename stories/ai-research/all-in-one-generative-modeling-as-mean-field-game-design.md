---
title: "All in One: Generative Modeling as Mean-Field Game Design"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.23026"
authors: ["Kun Zhao, Xu Chen"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.23026v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.23026v1 Announce Type: new Abstract: Mean-field games (MFGs) offer a unifying lens on continuous-time generative modeling: a cost tuple recovering twelve prominent models---Continuous Normalizing Flows, OT-Flow, Score-based Models, Schr\"{o}dinger Bridges, and more---as special cases of one variational problem. Yet two dimensions of this space remain entirely unexplored: the interaction term $\mathcal{I}$ is set to zero in many existing models, and the rich family of MFG solvers has never been applied to generative modeling. We address both gaps with MFGLab an open-source PyTorch library whose primary API is the cost tuple: all twelve models are specified by four composable cost functions, and the training loop, log-Jacobian, and reverse-ODE sampler are shared automatically. We additionally propose DI-Flow, a novel cost design that uses a differentiable entropy functional to encourage mode coverage, and provide learning-based MFG solvers that substantially outperform neural training on stochastic-dynamics rows. Experiments on two 2-D benchmarks confirm that the unified API is lossless relative to hand-coded implementations.
