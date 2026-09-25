---
title: "Thinking Leakage: A Causal Audit of NoThink Post-Training in Hybrid Reasoning Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.28682"
authors: ["Zehao Liu, Vasant G. Honavar"]
date: "Fri, 25 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.28682v1"
image: ""
generated: "2026-09-25T23:24:50+05:30"
---

Post-training hybrid reasoning models in NoThink mode has attracted growing interest as a way to improve performance while keeping inference fast. However, these gains may draw on thinking behavior already accessible through the base model's Think mode. We formulate this thinking leakage in a causal mediation framework and audit its contribution using bidirectional interventions along a simple base-derived activation direction. Across three models and three post-training methods on competition math benchmarks, we find that leakage is real, causal, and substantial: behavioral and representational analyses reveal shifts toward Think, steering the base model along this direction reproduces most of the post-training accuracy gain, and counter-steering a checkpoint removes a substantial share of what it gains. Across nine aligned checkpoints with positive NoThink gains, the resulting leakage ratio ranges from 42% to 79%. These interventions support a substantial causal contribution of thinking leakage. Our findings show that a post-training method's apparent advantage can therefore reflect greater drift toward Think, obscuring whether it improves capability within NoThink or more effectively re-invokes existing Think behavior.
