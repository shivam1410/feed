---
title: "Combating Catastrophic Forgetting in Continual Domain Adaptation via Knowledge Recasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28892"
authors: ["Zijie Liu, Zhen Tan, Charles Fleming, Tianlong Chen"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.28892v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Adapting language models to new domains during post-training risks degrading previously acquired capabilities, a phenomenon commonly known as catastrophic forgetting. Existing mitigation methods largely treat forgetting as a consequence of excessive model drift. They therefore constrain updates by preserving old outputs, replaying old data, or regularizing changes to parameters and representations so that the updated model remains close to its previous state. We take a different view: Rather than pulling the updated model back toward its old state, we translate the new domain into the model's pre-existing knowledge space, making unfamiliar knowledge learnable through familiar procedures. Therefore, we propose Skill Schema Transport (SST), a post-training framework that transports new knowledge into the model's existing skill space. SST abstracts each example type into a skill schema, preserving its essential operations, dependencies, and verification steps while removing domain-specific surface forms. By recasting new examples as instances of reusable procedures, SST turns knowledge update from trajectory memorization into procedural reuse. In continual domain adaptation settings, SST consistently reduces forgetting while improving generalization to related tasks. Across two 3B instruction-tuned backbones, SST improves average final performance on streamed domains by 2.53 to 5.75 points over sequential post-training. It also lowers max-drop forgetting in all evaluated settings, with the largest reduction from 42.41 to 7.10 points on the Qwen-3B MATH stream, while substantially recovering the OOD degradation induced by sequential updates.
