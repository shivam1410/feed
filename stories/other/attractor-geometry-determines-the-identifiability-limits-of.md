---
title: "Attractor Geometry Determines the Identifiability Limits of System Discovery"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18490"
authors: ["Matteo Gallo, Fabio Anselmi, Paolo Lazzari"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18490v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18490v1 Announce Type: new Abstract: Symbolic discovery of governing equations from data is limited not only by algorithm design and data volume, but by the geometry of the attractor: what the long-run dynamics allow to be recovered. Using a within-system design on Lorenz-84, where one forcing parameter drives fixed-point, limit-cycle, and chaotic regimes while the governing equations and library stay fixed, we show that a single number, $\lambda_{\min}(M)$, the smallest eigenvalue of the invariant-measure moment matrix, sets the identifiability ceiling for both sparse regression (SINDy) and evolutionary symbolic regression (PySR). Derived from the Birkhoff ergodic theorem and obtained from a short reference trajectory before any run, $\lambda_{\min}(M)$ measures how fully the attractor covers function space: where it vanishes, recovery is impossible for any algorithm, sparse or combinatorial alike; as it grows, both algorithms improve. Chaos raises $\lambda_{\min}(M)$ by spreading the attractor, but also enlarges it and amplifies noise; because noise enters SINDy's regression bottleneck linearly and PySR's discrimination channel superlinearly, the same transition can push the two methods in opposite directions, so deeper chaos is not uniformly better. Parameter-free mechanistic scores from this framework transfer without refitting to a held-out Lorenz-96 system, confirming mechanism rather than curve-fitting; a criterion read from the equations predicts when added chaos will not improve conditioning. We also introduce Soft F1, a coefficient-weighted structural metric that resolves performance differences invisible to binary-success and predictive scores. The first question of discovery is then not which algorithm, but what the attractor permits.
