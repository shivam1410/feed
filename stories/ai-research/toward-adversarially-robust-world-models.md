---
title: "Toward Adversarially Robust World Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28345"
authors: ["Ethan Rathbun, Jonathan N\\\"other, Christopher Amato, Alina Oprea, Goran Radanovi\\'c"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.28345v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Latent dynamic world models have proven to be highly versatile tools for embodied artificial intelligence systems, enabling online action planning, safe policy evaluation, and scalable policy learning. However, this versatility makes world models a vulnerable and centralized point of failure as a compromised model can impact planning, evaluation, and training at once. Therefore it is critical that the security and robustness properties of world models are properly understood before they are universally deployed in embodied AI systems. In this work we take a unifying approach towards this understanding, developing two novel attacks against world models, named state hallucination and dynamic shift attacks, aimed directly at impacting downstream systems, and proposing a new theoretical lens through which to study the robustness of latent dynamic world models. Through our analysis we identify robust latent space encoders as the key component of robust world models. We empirically validate this finding on four separate latent dynamic world model families, studying Dino World Model, Le World Model, r2Dreamer, and Cosmos 3, demonstrating significant improvements in robustness through adversarial encoder model training.
