---
title: "Self-Review Reinforcement Learning (SRRL) with Cross-Episode Memory and Policy Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05541"
authors: ["Muhammad Zain Amin, Kibele Sebnem Yildirim"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2607.05541v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05541v1 Announce Type: new Abstract: Reinforcement Learning is commonly used to train large language models using environmental feedback. In applied settings, the environment usually provides sparse or delayed feedback. This makes it difficult for the model to pinpoint which actions in its reasoning led to success or failure. So, learning effectively from these signals is hard because the model must determine how each failure should inform meaningful behavioral corrections in subsequent iterations. We introduce a training framework, Self-Review Reinforcement Learning, that embeds an explicit self-review step into each RL episode. When a first-pass response fails, the model generates a self-review to identify what went wrong, which conditions an improved second attempt. Unlike inference-time reflection approaches, such as Reflexion, the framework optimizes self-review with policy gradients and internalizes improvements into the base policy via selective distillation, ensuring they persist across future episodes. A cross-episode memory keeps successful self-reviews for reuse when encountering similar tasks in future episodes during training. We evaluate SRRL against a standard RLVR baseline using the GRPO optimizer across two language models, Qwen 3-4B and OLMo-3- 7B, on GSM8K benchmark. SRRL consistently outperforms the RLVR in final reward performance and achieves greater learning efficiency by successfully transforming feedback into behavioral improvement.
