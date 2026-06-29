---
title: "Textual Belief States for World Models: Identifiable Representation Learning Under Strict Mediation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27681"
authors: ["Xiang Gao, Kaiwen Dong, Yuguang Yao, Padmaja Jonnalagedda, Kamalika Das"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.27681v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27681v1 Announce Type: new Abstract: World models in partially observed environments rely on latent representations that summarize interaction history, but in many modern LLM-based architectures predictive performance fails to reflect representation quality due to history bypass, rendering the latent state unidentifiable. Strict latent state mediation, requiring predictions to depend only on the latent state and action, is a classical principle that resolves this, but enforcing it in text-based settings is an open challenge: textual latent states are discrete and non-differentiable, precluding variational training, and expressive LLM decoders readily ignore the bottleneck. We show how to make strict mediation work in the text domain. We formalize why it is necessary, showing that strict mediation makes representation quality empirically testable while history-leaky architectures break this connection. We then introduce textual latent states, which are discrete, interpretable, and variable-length, and factorized GRPO (fGRPO), a tree-structured reinforcement learning method that enforces strict mediation during training. Experiments on TextWorld and ScienceWorld show preserved one-step prediction accuracy alongside up to 57\% gains in representation quality and 98\% improvements in rollout performance, increasing with task complexity and horizon.
