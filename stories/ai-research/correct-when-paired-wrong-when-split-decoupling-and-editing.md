---
title: "Correct When Paired, Wrong When Split: Decoupling and Editing Modality-Specific Neurons in MLLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17057"
authors: ["Tingchao Fu, Wenkai Wang, Fanxiao Li, Huadong Zhang, Jinhong Zhang, Dayang Li, Yunyun Dong, Renyang Liu, Wei Zhou"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.17057v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17057v1 Announce Type: new Abstract: Although Knowledge Editing provides an efficient mechanism for updating the knowledge of Multimodal Large Language Models (MLLMs), we find that current paradigms still suffer from an important yet remain underexplored issue : editing decoupling failure, where entity-related knowledge can be updated when the model is triggered by multimodal inputs (text--image query pairs), however, it often reverts to outdated pre-edit facts when the paired inputs are split into unimodal ones. Our in-depth empirical analysis reveals that the entity knowledge in MLLMs is not stored as a unified representation, but is instead distributed across disentangled modality-specific pathways. As a result, updates biased toward multimodal queries fail to propagate effectively to unimodal circuits. To bridge this gap, we propose DECODE, which explicitly disentangles and localizes modality-specific neuron groups for targeted knowledge. Extensive experiments demonstrate that DECODE consistently achieves effective knowledge updates under different modality triggers, thereby mitigating editing decoupling failures.
