---
title: "MOON-RL: Multi-Objective Optimization via Objective Space Navigation with Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15227"
authors: ["Andrii Artomov, Soheyl Massoudi, J\\\"urg Schiffmann"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15227v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Many engineering design problems involve multiple conflicting objectives and strict feasibility constraints. They are typically solved with population-based optimizers that require many evaluations and offer limited online control over where the search is focused. We present MOON-RL, a reinforcement-learning-based optimization framework that formulates constrained multi-objective search as preference-directed navigation in the objective space. In MOON-RL, a lightweight PPO policy receives objective-space and constraint-related observations and acts as an instance-specific adaptive search process. It learns how to update the design so that the current solution advances along a user-specified trade-off direction, while a simple meta-algorithm periodically resets the policy, resamples starting designs from a continuously updated archive of non-dominated solutions, and adjusts step-size and penalty schedules. We evaluate MOON-RL on real-world actuator-design problems and additional convergence-hard constrained benchmarks, comparing against established evolutionary algorithms under matched evaluation budgets. In focused search scenarios, MOON-RL achieves competitive performance in the region of interest, and ablation studies show that both the RL-driven adaptive sampling process and the meta-algorithm contribute to this behaviour, suggesting that repurposing RL training as objective-space navigation is a viable building block for interactive, preference-guided design tools. Additional experiments show that the framework also accommodates adaptive non-RL samplers, while PPO remains a strong choice for fixed-target, preference-directed objective-space navigation.
