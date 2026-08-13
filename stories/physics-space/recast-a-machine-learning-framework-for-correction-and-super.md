---
title: "RECAST: A Machine-Learning Framework for Correction and Super-Resolution of Coarse-Grid PDE Solvers"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11572"
authors: ["Maryam Reza, Farbod Faraji"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.11572v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11572v1 Announce Type: new Abstract: Coarse-grid numerical solvers can substantially reduce the computational cost of time-dependent PDE simulation, but under-resolution often degrades both the trajectory and the spatial fidelity of the solution. We introduce RECAST (Recurrent Error Correction And Super-resolution of coarse-grid Trajectories), a machine-learning framework designed to restore this lost accuracy while retaining coarse-grid evolution. RECAST combines learned correction within the numerical time-stepping loop with reconstruction of the corresponding fine-grid state from the corrected coarse history. We evaluate the framework on six one-dimensional PDE systems spanning transport, diffusion, dispersion, reaction, and wave dynamics, using spatial grids coarsened by factors of 8-16 and 1000-step closed-loop rollouts from unseen initial conditions. Across the test cases, RECAST remains closely aligned with the fine-grid reference solutions and reduces time-averaged relative error by approximately 50-92% compared with the corresponding uncorrected coarse-grid solvers. Additional tests show generalization to unseen PDE parameter values, while comparison with a contemporary coarse-correction architecture shows that RECAST achieves lower error and better long-horizon agreement with the fine-grid reference over 5000-step rollouts. These results demonstrate that the learned correction and reconstruction capabilities of RECAST can enable substantially coarser PDE evolution without the corresponding loss of solution fidelity, providing a proof-of-concept route toward machine-learning acceleration of higher-dimensional numerical simulations across science and engineering.
