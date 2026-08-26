---
title: "Physics-Integrated Operator Learning via Gaussian Splatting Representations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24049"
authors: ["Jihao Zhang, Junyi Guo, Jian-Xun Wang"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2608.24049v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.24049v1 Announce Type: new Abstract: Neural operators provide efficient surrogates for spatiotemporal PDE systems, but purely data-driven formulations often accumulate substantial errors during long-horizon autoregressive prediction and may fail to exploit available governing-equation structure. Existing approaches incorporate physics primarily through residual-based training objectives or PDE-specific architectural constraints, which can introduce optimization difficulties or limit architectural generality. In this work, we introduce a representation-level approach to physics integration in which a feed-forward Gaussian splatting (FFGS) representation serves as a continuous interface between discretized solution fields and governing operators. The FFGS representation reconstructs the state as a continuous Gaussian field with closed-form spatial derivatives, allowing available physical PDE operators to be integrated directly within the learned evolution map without introducing a physics-residual loss. We evaluate the framework across two- and three-dimensional PDE systems, including advection, diffusion, nonlinear self-advection, and reaction dynamics. Over long-horizon autoregressive rollouts, the proposed framework reduces relative $\ell_2$ error by $1.5\times$--$2.2\times$ compared with the strongest purely data-driven baseline across the benchmark suite, while consistently improving spectral fidelity. The framework also remains effective when the governing equations are partially known, demonstrating robustness to incomplete physics. These results demonstrate that continuous field representations can provide a practical interface for incorporating known physical structure into generic neural-operator surrogates.
