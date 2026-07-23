---
title: "Preference-Conditioned Multi-Objective Reinforcement Learning for Runtime-Tunable Transit Signal Priority"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18286"
authors: ["Philip-Roman Adam, Stefanie Schmidtner"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18286v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18286v1 Announce Type: new Abstract: Transit signal priority (TSP) requires balancing competing objectives: reducing bus delay while limiting adverse impacts on non-bus traffic and avoiding extreme waits for a subset of vehicles. Existing reinforcement-learning (RL) approaches to TSP typically encode transit-aware features (e.g., occupancy and schedule deviation) but optimize a fixed reward or fixed scalarization, which limits operational flexibility when agency priorities change across time-of-day or disruption conditions. We present a preference-conditioned TSP controller, $\pi(a \mid s,w)$, that selects the next signal phase under minimum/maximum green and transition-feasibility constraints and can be tuned at runtime via a preference parameter $w$ to trade off bus-priority emphasis against overall traffic delay without retraining. We implement this on top of IntersectionZoo by introducing a constrained signal-control/TSP wrapper, and we extend scenario generation with bus-prevalence augmentation and timetable-based bus insertion to address sparse transit-priority events during training. Experiments against fixed-time control, a rule-based TSP overlay, and fixed-weight PPO specialists show that a single learned conditioned policy spans a smooth empirical trade-off frontier across runtime preferences, outperforms fixed-time and rule-based baselines, and maintains constraint feasibility, while tail-delay diagnostics reveal that non-bus externalities remain limited for moderate preference settings but can increase substantially under high bus-priority weights. The source code of this work is available at https://github.com/urbanAIthi/morl-tsp.
