---
title: "Policy Gradient Steering: Interventions from Behavioral Objectives"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27574"
authors: ["Yoann Poupart, Aur\\'elie Beynier, Nicolas Maudet"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.27574v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27574v1 Announce Type: new Abstract: Activation steering has emerged in large language models as a lightweight alternative for dynamically changing a model's behavior at inference time. However, we show that existing steering methods fail to steer even a simple policy in a two-route gridworld environment. To address this limitation, we propose Policy Gradient Steering (PGS), which formulates steering as a reinforcement learning problem. PGS accumulates gradients of a temporary behavioral objective over a small set of rollouts or demonstrations to construct a removable task vector. We first demonstrate the calibration and reversibility of PGS in a two-route gridworld environment. Using chess puzzles, we then evaluate independently fitted PGS vectors both in isolation and in combination, finding that compatible tactical objectives accumulate constructively. Finally, in competitive football, we show that PGS can alter specific team behaviors and that its effects transfer across opponents. Together, these results show that policy gradients provide a natural interface for constructing temporary and composable behavioral adaptations across diverse decision-making domains.
