---
title: "Do as the Romans Do: Learning Universal Behaviors from Heterogeneous Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18537"
authors: ["Caleb Chang, Davin Win Kyi, Natasha Jaques, Karen Leung"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.18537v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18537v1 Announce Type: new Abstract: Humans often acquire new skills by observing others, since observed behaviors implicitly reveal how to act in an environment. However, observations drawn from a heterogeneous population introduce conflicting behavioral signals, making it difficult to determine which behaviors are worth imitating. We address this challenge with General Reward Inference and Disentanglement (GRID), a social learning method that extracts universally useful behaviors from a heterogeneous population of demonstrators pursuing different goals. GRID decomposes per-agent reward functions into a general reward, capturing behaviors shared across all agents, and specific rewards, capturing individual preferences and objectives. Training exclusively on the general reward provides a new paradigm of generalist pretraining. It yields a generalist agent that internalizes universal environmental competencies, such as safety and basic task proficiency, without the mode-averaging bias that afflicts standard learning from demonstration techniques. This generalist serves as a superior prior for fine-tuning to downstream tasks, including preferences unseen during training. Experiments across a synthetic basis function decomposition, multi-agent Craftax, and a continuous autonomous driving simulator (Highway-Env) confirm that GRID successfully disentangles reward structure in a semantically meaningful way, outperforms standard learning from demonstration baselines, and enables more efficient and stable specialization.
