---
title: "PathBridger: Subgoal Bridges for Offline Goal-Conditioned Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29061"
authors: ["Soohyun Choi, Seonvin Cho, Songnam Hong"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.29061v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29061v1 Announce Type: new Abstract: Offline goal-conditioned reinforcement learning (GCRL) aims to learn policies for reaching diverse goals entirely from fixed trajectory data. Long-horizon offline GCRL remains challenging because sparse goal-reaching signals must be propagated over many steps, while execution errors cannot be corrected through additional environment interaction. Existing methods address these challenges by improving long-range value estimation or reducing the effective decision horizon through subgoals, options, and action chunks. In several hierarchical methods, however, a selected subgoal specifies where to go, while the intervening state-space path remains implicit in an endpoint-conditioned low-level policy. To address this interface, we propose PathBridger, a hierarchical offline GCRL method that explicitly connects subgoal selection to short-horizon execution. PathBridger constructs a state-space bridge toward the selected intermediate endpoint and decodes it into a short executable action chunk using an inverse dynamics model. Experiments across the evaluated OGBench tasks demonstrate strong aggregate performance, with particularly large gains on the multi-object Cube manipulation tasks. Code: https://github.com/SChoish/PathBridger
