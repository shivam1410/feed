---
title: "Robust Neural Stimulation Response Modeling Through Meta-Learning and Pretraining"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26649"
authors: ["Matthew J Bryan, Daniel C Muir, Felix Schwock, Azadeh Yazdan-Shahmorad, Rajesh P N Rao"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.26649v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26649v1 Announce Type: new Abstract: Objective: Model-based closed-loop neural stimulation holds promise for therapeutic applications ranging from Parkinson's disease to sensory restoration, but deployment has been limited by two obstacles: 1) forecasting models for predicting the consequences of stimulation fail catastrophically on a meaningful fraction of sessions, and 2) per-session calibration requirements are often incompatible with clinical constraints. We address both by demonstrating, for the first time, that meta-learning and pretraining can be applied to neural stimulation response modeling. Methods: Temporal basis function models (TBFMs) forecast state-dependent neural responses to stimulation. We extend TBFMs with cross-session pretraining using a novel architecture and algorithm based on model-agnostic meta-learning (MAML), evaluating them on 40 sessions of optogenetic stimulation in primary sensorimotor cortex of two non-human primates. Results: Meta-learning substantially reduces catastrophic forecast failure: for a 1k calibration set size, sessions with test R-squared < 0.05 drop from 16 of 40 (single-session training) to 1 (MAML-pretrained), and prediction intervals become significantly narrower (p < 0.05). Calibration requirements are reduced by 50-90% at matched accuracy, enabling experiments otherwise infeasible within clinical session-time constraints. Conclusion: Our results demonstrate that cross-session structure in stimulation responses is consistent enough to support pretraining, providing the first empirical evidence that meta-learning approaches are viable for neural stimulation. Significance: The robustness and sample efficiency gains directly address known obstacles to deploying model-based stimulation controllers. Our results motivate community efforts to assemble standardized multi-site stimulation datasets and to further explore meta-learning for robust closed-loop stimulation.
