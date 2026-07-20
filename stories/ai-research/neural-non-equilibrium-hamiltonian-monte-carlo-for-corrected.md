---
title: "Neural Non-Equilibrium Hamiltonian Monte Carlo for Corrected Boltzmann Sampling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15682"
authors: ["Moxian Qian"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.15682v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15682v1 Announce Type: new Abstract: Sampling from an unnormalized Boltzmann density requires proposals that move probability mass globally while retaining enough path-probability information for statistical correction. We introduce Neural Non-Equilibrium Hamiltonian Monte Carlo (NHMC), a train-then-correct learned Hamiltonian sampler. Starting from a tractable base distribution, NHMC learns stochastic Hamiltonian-style paths toward the target. Once training is complete, the learned proposal parameters are fixed; the proposal then generates complete paths and endpoint configurations, which are statistically corrected using the recorded non-equilibrium work. This dimensionless generalized work is determined by the probability ratio between the forward proposal path and a reverse reference path. During training, minimizing its mean reduces a path-space KL divergence and controls an upper bound on endpoint mismatch. During evaluation, the same quantity defines weights for self-normalized importance sampling on paths (path-SNIS), estimates normalizing constants or free-energy differences, and gives the acceptance ratio for path-space independent Metropolis-Hastings (path-IMH). The same forward-reverse laws also define a shared-bridge round-trip Metropolis kernel that acts directly on configurations and preserves the Boltzmann target. On double-well and finite-volume lattice $\phi^4$ targets, the NHMC construction gives corrected estimates when path overlap is sufficient; when overlap is poor, weight degeneracy, low acceptance, and long autocorrelation expose proposal failure. We additionally report a molecular internal-coordinate feasibility study using an MD prior and learned-force path proposal.
