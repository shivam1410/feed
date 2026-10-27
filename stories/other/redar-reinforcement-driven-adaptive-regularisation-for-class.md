---
title: "REDAR: Reinforcement-Driven Adaptive Regularisation for Class Incremental Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31991"
authors: ["Akila Ayanthi, Darshana Priyasad, Tharindu Fernando, Sridha Sridharan, Clinton Fookes, Peyman Moghadam"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31991v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Regularisation-based class-incremental learning (CIL) methods control the stability-plasticity trade-off through fixed coefficients tuned offline, independently of the continual learning objective and blind to phase-specific variations in data volume, task difficulty, and class similarity. We argue this is a fundamental mismatch and propose REDAR: Reinforcement-Driven Adaptive Regularisation for Class Incremental Learning, which treats regularisation strength selection as a sequential decision problem. At each incremental phase, a lightweight reinforcement learning (RL) agent observes a compact state of current performance metrics and incoming data statistics, and outputs the distillation coefficients for that phase. To respect CIL's constraint on historical data access, the policy is trained entirely on pseudo-CIL tasks constructed from the initial phase, then deployed on the incremental sequence without further adaptation. Experiments on CIFAR-100 and Tiny-ImageNet demonstrate that REDAR reduces forgetting and improves forward transfer over fixed and heuristic baselines, and that policies trained on short pseudo-task horizons transfer effectively to longer incremental runs.
