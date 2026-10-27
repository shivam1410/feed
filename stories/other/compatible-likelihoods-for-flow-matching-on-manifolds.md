---
title: "Compatible Likelihoods for Flow Matching on Manifolds"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31981"
authors: ["Lucas Ng, Georgios Batzolis, Mark Girolami"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31981v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

On the simplest non-Euclidean manifold, the 1D flat torus, we exhibit a distribution where a recently proposed extension of Riemannian flow matching is globally optimized by a velocity field that pushes samples away from the data distribution. We trace this failure mode to a property we call compatibility; a likelihood-based flow matching objective is compatible if its population minimizer recovers the marginal velocity field induced by the data and coupling. We give a general condition for compatibility, apply it to existing methods, and bound the worst-case error in terms of a residual component vanishing under compatibility. Next, we note that existing compatible objectives put density on velocities that are infeasible on compact manifolds. We propose an objective built from an exponential family over endpoints, with the conditional velocity as sufficient statistic, which is both compatible and supported only on feasible velocities. This manifests as a reweighting of the flow matching loss which, on constant-curvature manifolds, treats errors in flow speed and direction differently. Empirically, our method recovers the correct velocity field on the test case, outperforms prior methods on high-dimensional product tori, and obtains substantial NLL improvements over prior work on two of four standard geospatial benchmarks on the sphere at moderate runtime overhead. On a large dataset of high-dimensional human poses, our method outperforms prior work according to sample-based metrics.
