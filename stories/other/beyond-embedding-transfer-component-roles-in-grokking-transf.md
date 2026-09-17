---
title: "Beyond Embedding Transfer: Component Roles in Grokking Transfer and Stability"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18078"
authors: ["Zeyu Jia"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18078v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18078v1 Announce Type: new Abstract: Warm-start transfer can make algorithmic tasks generalize rapidly, yet it is unclear which model components provide the gain and whether that gain remains stable under continued optimization. We study cross-operator transfer on modular arithmetic and separate efficacy (early velocity) from stability (post-reach drawdown). In a scale-matched 108-run battery across 12 seed blocks (96-run 2^3 factorial plus 12-run scale control), transferring internal attention/MLP weights (B) alongside token embeddings and readout (E+U) improves early accuracy by 5.46 pp (Holm p=0.0039) and cuts confirmation latency by 558 steps (Holm p=0.0088). While readout plus internal-block transfer satisfies the pre-specified +/-500-step latency equivalence criterion in 1-layer models (TOST p=0.0011, though Full is faster in 11/12 paired seeds), a prospective 2-layer replication confirms the internal-block advantage (12/12 seeds, +704.67 integral units, p=4.88x10^-4) while revealing an architectural boundary: omitting donor embeddings falls 4475.6 units below Full, outside the +/-250-unit margin. Continued target training frequently triggers severe post-grokking relapse. Freezing transferred representation carriers (E, U) nearly eliminates offline relapse (19.40% -> 0.07%, Holm p=0.005859). Online validation-triggered gating slashes True Max Drawdown from 22.06% to 0.60% on 2a+b (p=0.000488), with prospective confirmations extending protection across affine, nonlinear quadratic, and 2-layer targets (10.94-23.47 pp reductions), distinguishing continual stabilization from static early stopping. In non-abelian S_5, unshielded transfer surges transiently (95.4% peak), but a prospective shielding cohort yields no confirmed benefit (+0.15 +/- 1.14 pp). These results establish a component-level dissociation between transfer acceleration and trajectory stability, and expose the empirical boundaries of parameter shielding.
