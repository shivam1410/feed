---
title: "Trait Hitchhiking in LLM Post-Training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14683"
authors: ["Adil Soubki, Elizabeth S. Z. Tan, Miles Cranmer"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14683v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Reinforcement learning (RL) is now a standard stage of language model post-training, and the compute devoted to it is growing rapidly. While it has been shown to improve capabilities, particularly for tasks with verifiable rewards, it can also change behaviours and internal properties that the reward does not explicitly target. We present a formalism to describe the evolution of "traits" during RL post-training and, in doing so, recover the Price equation from evolutionary biology. We use this to develop a mathematical model for what we call "trait hitchhiking": the amplification or suppression of non-targeted traits as training redistributes probability across completions. We evaluate this Price update expression on language models trained with GRPO and show that the Price estimates closely track the sampled trait dynamics. These results identify trait hitchhiking as a mechanism by which RL post-training can silently amplify undesirable traits.
