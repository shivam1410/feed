---
title: "Action-Conditioned Transition Irreversibility for Out-of-Distribution Detection in Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28611"
authors: ["Emil Mittag, Richard Dazeley, Peter Vamplew"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28611v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Reinforcement-learning agents shape the observations they encounter; consequently, detecting out-of-distribution (OOD) states requires analysing action-conditioned trajectories rather than treating inputs as independent samples. We propose Action-Conditioned Transition Irreversibility (ACTI), a detector that evaluates forward and backward transition likelihoods, calibrates this comparison against the in-distribution profile at each timestep, and smooths the score over a short window, using no future information. We tested ACTI across six environments and fifteen detectors within OOD-RL-Bench, using the four anomaly mechanisms that qualified in every environment, with ten policy replicates per environment. All primary metrics are matched-time: each score after anomaly onset is compared with a clean twin rollout's score at the same timestep. Our method secured the top macro matched-time AUROC, outperforming the dynamics-model baseline (PEDM), while scoring transitions roughly two orders of magnitude faster. Compared to the state-only variant, ACTI achieved a small but consistent AUROC gain and a shorter detection delay. The capacity-matched forward-only baseline, ACTI-Forward, secured a statistically significant advantage in AUPRC alongside a reduced detection delay. The discrepancy in AUROC did not reach statistical significance. Ablation studies suggest instead that performance improvements stem from action conditioning, calibration at each timestep, and smoothing of the transition-likelihood scores. Based on these results, we recommend using ACTI-Forward.
