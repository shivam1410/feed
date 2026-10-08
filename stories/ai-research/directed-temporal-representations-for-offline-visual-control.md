---
title: "Directed Temporal Representations for Offline Visual Control"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08960"
authors: ["Chenyang Yuan, Haoyu Wang, Zhuo Sun, Xiaoyuan Cheng"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.08960v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Predictive world models provide compact visual representations for control. Control requires a latent geometry aligned with temporal reachability rather than predictive similarity alone. We introduce Directed Temporal Representations for Control (DTRC), which learns such a geometry from offline visual trajectories on top of frozen LeWorldModel (LeWM) features. DTRC constructs a directed temporal quasimetric over the learned control representation. Short-range temporal offsets calibrate the distance scale. Bootstrapped targets extend temporal reachability across longer horizons. Action-conditioned consistency aligns the representation with local transition dynamics. The resulting distance estimates temporal reaching cost, and its change across a transition defines goal-relative temporal progress. We use this progress signal as a temporal critic for direct goal-conditioned policy learning. Model-assisted targets provide an additional training-time refinement under behavior-support and dynamics-agreement constraints. Across ten visual control tasks, DTRC achieves strong goal-conditioned control performance relative to planning and direct-policy baselines. Held-out diagnostics on the four LeWM tasks show consistent short-range temporal calibration, task-dependent long-range and directional structure, and positive transition-level progress. Temporal supervision improves the same flow-policy parameterization across all four LeWM tasks, while the resulting policy acts directly without iterative trajectory search at test time.
