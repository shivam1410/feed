---
title: "Nearly Minimax-Optimal Sample Complexity of Natural Policy Gradient with a Matching Information-Theoretic Lower Bound"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28628"
authors: ["Asha Barua, Sajad Khodadadian"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28628v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

A fundamental question in reinforcement learning is how many sampled transitions are needed to learn a near-optimal policy, and whether direct policy optimization can attain this statistical limit. To answer this question, we consider natural policy gradient (NPG), a widely used policy optimization method. We study tabular finite-horizon Markov decision processes (MDPs) with known rewards and unknown horizon-dependent transition kernels, accessed through a generative model. Our sample-based NPG algorithms update the policy by backward sweeps and do not estimate transition probabilities. Under three different batch-size and step size schedules, we establish last-iterate guarantees with sample complexity $\widetilde O(SAH^4/\varepsilon^2)$, where $S$, $A$, and $H$ denote the number of states, the number of actions, and the horizon length, respectively. In this setting, horizon-dependent transition kernels contribute a factor of $H$ to our transition-query bound. Our information-theoretic lower bound of $\Omega(SAH^4/\varepsilon^2)$ shows that the resulting $H^4$ dependence is unavoidable in the worst case, even for agents that select their queries adaptively. To the best of our knowledge, these are the first last-iterate guarantees for NPG whose sample complexity matches an information-theoretic lower bound up to logarithmic factors. Consequently, our results demonstrate that direct policy-space optimization through NPG can achieve the fundamental statistical limits of reinforcement learning while guaranteeing the performance of the final policy. Furthermore, for known kernels, we prove that exact NPG with a constant step size $\eta=1/H$ requires $\Omega(H^2/\varepsilon)$ iterations in the worst case, matching the known upper bound for that step size.
