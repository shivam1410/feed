---
title: "Robust Peak-cost Constrained Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15457"
authors: ["Shilpa Mukhopadhyay, Sourav Ganguly, Santosh Mohan Rajkumar, Honghao Wei, Debdipta Goswami, Arnob Ghosh"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.15457v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15457v1 Announce Type: new Abstract: We study robust peak-cost constrained reinforcement learning (RP-CRL), where the objective is to maximize expected reward while controlling the maximum cost encountered along a trajectory. This setting is motivated by safety-critical applications in which a single large violation can be catastrophic and therefore cannot be adequately captured by the standard CMDP framework based on expected cumulative cost. Existing reachability-constrained RL methods adopt Lagrangian-based approaches, yet the underlying duality properties of peak-cost constrained MDPs remain unclear. We show that, unlike standard CMDPs, peak-cost constrained MDPs may not admit zero duality gap. We further consider a robust formulation to address simulator-to-real-world mismatch in the transition dynamics. To solve this problem, we develop a surrogate optimization framework and a robust value estimation method based on integral probability metrics. We prove that, with appropriate hyperparameter choices, the surrogate solution attains the same robust reward value as the original problem while violating the constraint by at most epsilon. Experiments show that the proposed method effectively enforces safety under dynamics perturbations while retaining strong reward performance.
