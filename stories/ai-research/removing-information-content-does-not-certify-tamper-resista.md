---
title: "Removing Information Content Does Not Certify Tamper Resistance in Open-Weight Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09004"
authors: ["Domenic Rosati, Alessa Carbo, Ali Dadsetan, Hong Huang, Matthew Young, Subhabrata Majumdar, Frank Rudzicz, Hassan Sajjad"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2610.09004v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Does removing harmful information make open-weight models resistant to fine-tuning attacks? We show that mutual information at release alone cannot universally certify slow recovery. Function-preserving reparameterizations leave information unchanged while altering gradient-descent geometry, so an invariant certificate is bounded by the fastest reachable parameterization. We apply this principle to weight--data mutual information under training-data filtering and label--representation mutual information under capability removal. Training order can change recovery time at fixed weight--data information, while exact representation-level independence can preserve the entire parameter Jacobian. An explicit construction has both information quantities equal to zero and recovers in one gradient step. Controlled experiments illustrate order-dependent recovery and parameterization-dependent attack speed. These results identify the missing requirement for certification: constraints on attack dynamics beyond mutual information at release.
