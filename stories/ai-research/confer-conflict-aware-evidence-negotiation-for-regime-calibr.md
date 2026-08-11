---
title: "CONFER: Conflict-Aware Evidence Negotiation for Regime-Calibrated Weak Supervision in Multimodal Emotion Recognition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07867"
authors: ["Bojing Hou, Ruohao Li, Yitong Zhu, Luwen Yu, Yuyang Wang"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.07867v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07867v1 Announce Type: new Abstract: Multimodal emotion recognition often treats self-reported labels as reliable supervision while overlooking self-report unreliability and cross-modal conflict. We propose \textbf{CONFER}, a graph-based conflict-aware evidence negotiation framework for weakly supervised multimodal emotion recognition. CONFER represents each modality expert as a node with a predictive belief, boundary-based uncertainty, and runtime reliability estimated from historical out-of-fold performance and current-sample uncertainty. Uncertainty-aware compatibility and reliability-directed asymmetric edge weights govern iterative message-passing negotiation, followed by peer-supported prediction readout. Conflict reduction, residual disagreement, and mean modality uncertainty further characterize three regimes---Consensus, Dissent, and Ambiguity---for sample-specific weak-label calibration. We evaluate CONFER on AMIGOS, MAHNOB-HCI, and DEAP under subject-dependent 10-fold and strict leave-one-subject-out (LOSO) protocols. CONFER achieves competitive performance, reaching \textbf{0.873} accuracy on AMIGOS-V and \textbf{0.854} accuracy on MAHNOB-V under strict LOSO evaluation. Further analyses show larger negotiation gains on high-conflict samples and improved robustness to weak-label corruption, indicating that cross-modal conflict provides useful information for both directional modality coordination and supervision-reliability estimation.
