---
title: "Parameter misspecification in physics-informed neural networks: A closed-form audit and its limits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23948"
authors: ["David McShannon, Nicholas Dietrich"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.23948v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Physics-informed neural networks (PINNs) are trained to minimize the residual of a prescribed equation, so a low training loss does not indicate whether a coefficient in that equation was specified incorrectly. This study evaluates what can be inferred about the encoded parameter from the trained network alone. When the residual is linear in the parameter, written as $A - \nu B$, the least-squares estimate $\hat{\nu} = A^{\top}B/B^{\top}B$ is obtained from a single evaluation of the frozen network, without retraining or reference data. Its accuracy depends on how closely the network satisfies its own equation, quantified by a normalized residual $\rho$. Recovery error is associated with $\rho$ (log-log correlation 0.72 across 36 convection-diffusion networks), and empirical exponents of 0.63 to 1.20 across three equations decompose into one half plus a measurable angular term. For Burgers' equation, a single-model test based on a block-bootstrap standard error flagged 3 of 300 correctly specified networks (observed false-alarm rate 1%), all 2% misspecifications at a practical budget, and two thirds of 1% misspecifications after convergence. For the self-similar blowup rate of the C\'ordoba-C\'ordoba-Fontelos equation, where the rate also enters the architecture, the estimator recovers about half of the misspecification, whereas $\rho$ increases approximately quadratically and distinguishes a 0.2% error. When the incorrect rate enters both the equation and the architecture, errors of up to 2% were not detected at the precision reached. At practical budgets, the raw loss can be lower for the misspecified model, a scaling effect that $\rho$ does not share.
