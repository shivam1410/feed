---
title: "Meta-LinEXP3: Online-within-Online Learning for Adversarial Linear Contextual Bandits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09907"
authors: ["Hao Li, Jie Xu, Zheng Xie"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.09907v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09907v1 Announce Type: new Abstract: Meta-learning has emerged as an effective paradigm for transferring knowledge across sequential bandit tasks. While substantial progress has been made for stochastic bandits and non-contextual adversarial bandits, meta-learning for adversarial linear contextual bandits (ALCBs) with random action sets remains largely unexplored. To address this problem, we propose Meta-LinEXP3, an online-within-online algorithm that constructs a predictable task-level prior from completed tasks to guide the inner LinEXP3 learner. For known context distributions, we develop a policy-centered estimator that achieves an intrinsic-dimension $\mathcal{O}(\sqrt{n})$ per-task regret bound. For unknown distributions, we introduce a past-only regularized moment estimator with an $\mathcal{O}(n^{2/3})$ leading regret term and explicit finite-sample error. We further establish a direct connection between prior accuracy and transfer regret, showing that increasingly accurate priors yield sublinear transfer-dependent regret across tasks. Experiments demonstrate the effectiveness of Meta-LinEXP3, including its application to structured hyperspectral tensor sampling.
