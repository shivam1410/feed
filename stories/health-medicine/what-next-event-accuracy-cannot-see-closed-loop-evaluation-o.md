---
title: "What Next-Event Accuracy Cannot See: Closed-Loop Evaluation of Emergency Department Trajectory Simulators"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31635"
authors: ["Zhen Xuen Brandon Low"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.31635v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Clinical trajectory models are usually evaluated by next-event accuracy on observed histories. Simulation is different: models must condition on their own generated events, allowing errors to compound. Although this problem is well known in sequence modelling, it has not been systematically quantified for clinical trajectory simulators. We developed EDSim-Bench to evaluate this failure mode using 425,028 MIMIC-IV-ED stays, with external replication on MC-MED, and release the evaluation protocol and scoring code. Starting from held-out visit prefixes, models generate the remainder of each visit and are evaluated on termination, event composition, timing, conditional fidelity, and occupancy forecasting, with a train-only order-3 n-gram as a reference baseline. Despite next-event accuracies within 0.001, three neural architectures behaved very differently under rollout. Across seeds, one Transformer recipe ranged from 0.43 to 0.96 in termination score and from 4.2- to 137-fold the divergence of the n-gram; no prefix-trained neural model approached the n-gram on termination or event composition. Inference-time interventions improved termination but did not jointly recover composition and timing. Supervising every eligible sequence position rather than only the final prefix position was associated with one to two orders of magnitude lower divergence across Transformer, GRU, and LSTM models, with the pattern persisting under model scaling, temporal shift, and external-site evaluation. Nevertheless, even the best model generated visits approximately half as long as observed, and model rankings reversed on occupancy forecasting, a downstream quantity relevant to bed management. These results show that next-event accuracy is insufficient to evaluate clinical trajectory simulators and motivate closed-loop evaluation across seeds, rollout criteria, and downstream tasks.
