---
title: "Certified World Models as Sensing Clocks: Drift-Aware Deadlines for Active Perception"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01537"
authors: ["Hongbo Wang"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.01537v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01537v1 Announce Type: new Abstract: Certified world models estimate how long their predictions remain valid. We turn this validity horizon into an operational sensing clock: a rule for when an agent should stop coasting and re-sense. Starting from an audited equivariant world model, we derive a deadline for no-sensing intervals and show that deployable deadlines in learned world models must be drift-aware: on-manifold Lyapunov rates alone overestimate coasting validity, while calibrated native rollout-drift envelopes carry the deployed guarantee. On a frozen 3D VN-JEPA model, the resulting clock controls held-out interval-simultaneous certificate violation across seeds and data shards. In a cue-conditioned theorem-bed (a synthetic bench where all schedulers share the exact model, isolating the scheduling rule), the clock remains valid on the deployment distribution and substantially reduces eventful-tail violations relative to exact-mixture expected-belief scheduling at matched sensing budget. We also report limits: in the short-horizon frozen VN-JEPA regime, empirical conformal horizons match the deployed clock on validity and budget, and a partial-reset exploration finds no clean budget-matched advantage for the spectral term. Thus the contribution is a certified sensing-clock primitive and drift-aware deployment method, not a claim that spectral clocks empirically dominate all non-spectral schedulers.
