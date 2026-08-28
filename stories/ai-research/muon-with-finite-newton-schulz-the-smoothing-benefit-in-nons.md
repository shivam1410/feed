---
title: "Muon with Finite Newton-Schulz: The Smoothing Benefit in Nonsmooth Nonconvex Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26288"
authors: ["Mingyi Li, Taira Tsuchiya"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.26288v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26288v1 Announce Type: new Abstract: Muon has emerged as a strong optimizer for the matrix-valued parameters in large language model pretraining, approximately orthogonalizing its momentum with a few Newton-Schulz iterations. Existing theory either replaces this iteration with the exact polar factor it approximates, or treats its finite depth as an approximation error, and thus the iteration Muon actually runs can only hurt the guarantees. We show that finite Newton-Schulz can instead be beneficial for nonsmooth nonconvex optimization. To this end, we analyze Muon through the online-to-nonconvex conversion, which views the update rule as an online learner and converts its regret bound into a stationarity guarantee. The finite Newton-Schulz iteration smooths the discontinuous polar map into a Lipschitz map of the singular values, and Muon with finite Newton-Schulz can be regarded as an online learner with a smoothed spectral potential. This smoothing is exactly what the conversion needs: we prove that a Newton-Schulz depth growing only logarithmically in the target accuracy suffices for convergence to stationary points in nonsmooth nonconvex optimization, whereas Muon with the exact-polar update may fail to converge. The resulting sample complexity bounds match the best-known guarantees for nonsmooth nonconvex optimization and are optimal for smooth nonconvex optimization up to problem-dependent factors. The argument extends beyond Newton-Schulz to general spectral maps with the same smoothing property.
