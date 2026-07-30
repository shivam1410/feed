---
title: "MetaKoopman: Bayesian Meta-Learning of Koopman Operators for Modeling Structured Dynamics under Distribution Shifts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26345"
authors: ["Mahmoud Selim, Sriharsha Bhat, Karl H. Johansson"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2607.26345v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26345v1 Announce Type: new Abstract: Modeling and forecasting nonlinear dynamics under distribution shifts is essential for robust decision-making in real-world systems. In this work, we propose MetaKoopman, a Bayesian meta-learning framework for modeling nonlinear dynamics through linear latent representations. MetaKoopman learns a Matrix Normal-Inverse Wishart (MNIW) prior over the Koopman operator, enabling closed-form Bayesian updates conditioned on recent trajectory segments. Moreover, it provides a closed-form posterior predictive distribution over future state trajectories, capturing both epistemic and aleatoric uncertainty in the learned dynamics. We evaluate MetaKoopman on a full-scale autonomous truck and trailer system across a wide range of adverse winter scenarios, including snow, ice, and mixed-friction conditions, as well as in simulated control tasks with diverse distribution shifts. MetaKoopman consistently outperforms prior approaches in multi-step prediction accuracy, uncertainty calibration, and robustness to distributional shifts. Field experiments further demonstrate its effectiveness in dynamically feasible motion planning, particularly during evasive maneuvers and operation at the limits of traction. Project website: https://mahmoud-selim.github.io/MetaKoopman/
