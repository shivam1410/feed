---
title: "Minimal Witness Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07226"
authors: ["T. Y. Tsui, Zihao Ye, Pengxiang Cai, Yanchao Li, Yuqiang Li, Zhehong Ai"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2610.07226v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

``What are the irreducible conditions that are sufficient to produce an outcome?'' is one of the most common questions that recur across computation and science. Its answers, the minimal sufficient witnesses, are what we mean by explanations, mechanisms and reasons. These problems usually ask for multiple minimal witnesses, yet standard RL methods may reveal only one solution or redundant ones. We formalize this problem as minimal-witness identification and introduce Minimal-Witness Reinforcement Learning (MWRL). MWRL takes the union of the sets certified by successful proposals sampled from the policy and credits each proposal for the coverage the group union would lose without that proposal. This credit assignment, derived directly from the problem definition, unifies the demands for minimality and recovery of alternatives from a single black-box verifier bit. Under this principle, we derive a value iteration planner that recovers the entire family of witnesses and a policy gradient method that can scale to large language models. Across different experimental settings, MWRL recovers most minimal witnesses, while other methods return redundant supersets or a single witness. By making witness families learnable from verifier feedback, MWRL expands the scope of reinforcement learning beyond single-solution optimization. Our code is available at https://github.com/TSUITUENYUE/MWRL.
