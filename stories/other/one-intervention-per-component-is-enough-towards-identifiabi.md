---
title: "One Intervention per Component is Enough: Towards Identifiability in Linear Stochastic Dynamics from Steady State"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19955"
authors: ["Saber Salehkaleybar"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19955v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19955v1 Announce Type: new Abstract: We study the problem of recovering the parameters of a multivariate Ornstein-Uhlenbeck (OU) process from steady-state observational and interventional data. In many applications, such as large-scale gene perturbation experiments, only stationary "snapshot" measurements are available, making standard stochastic differential equation estimation methods that rely on time-series trajectories inapplicable. We first establish an identifiability result: one intervention per strongly connected component (SCC) of the drift graph suffices to recover all OU process parameters generically up to a global scaling factor. This holds provided that the SCC condensation graph is connected with a single root and certain spectral nondegeneracy assumptions hold. We propose a recursive learning algorithm that orders SCCs topologically and, for each component, isolates its marginal dynamics and solves a linear system derived from the steady-state moment equations, leveraging parameters recovered for upstream components. Building on this theoretical foundation, we propose a regularized least-squares estimator that jointly minimizes residuals of the steady-state mean and covariance equations across observational and interventional data. Experimental results validate our theoretical findings in recovering parameters of the underlying OU process.
