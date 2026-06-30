---
title: "Modification-Considering Value Learning for Reward Hacking Mitigation in RL"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28955"
authors: ["Evgenii Opryshko, Umangi Jain, Igor Gilitschenski"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2606.28955v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28955v1 Announce Type: new Abstract: Reinforcement learning agents can exploit misspecified reward signals to achieve high apparent returns while failing on the intended objective, a failure mode known as reward hacking. Existing practical defenses typically constrain policy updates to stay near a known safe reference, creating a tension between suppressing hacking and permitting legitimate improvement. We propose Modification-Considering Value Learning (MCVL), which operationalizes the theoretical idea of current utility optimization for standard value-based RL. MCVL wraps an off-policy learner and treats each incoming transition as a candidate modification: it forecasts two training paths, one that includes the transition and one that does not, and scores both with a frozen bootstrapped-return estimator derived from a learned reward model and value function. The transition is admitted only if inclusion does not decrease the score. We formalize conditions under which this filtering is both safe and permissive, and instantiate MCVL with DDQN and TD3. Across four safety-relevant gridworlds and three modified MuJoCo continuous-control tasks with diverse hacking mechanisms, MCVL mitigates reward hacking while continuing to improve the intended objective. Project website: ktolnos.github.io/mcvl/.
