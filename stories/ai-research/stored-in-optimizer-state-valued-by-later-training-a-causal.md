---
title: "Stored in Optimizer State, Valued by Later Training: A Causal Account of Subliminal Trait Transfer"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20442"
authors: ["Qinyang Xu"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2608.20442v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20442v1 Announce Type: new Abstract: Subliminal trait transfer allows a student model to acquire behavioral dispositions from teacher-generated data in which the trait is not semantically expressed. Recent work explains how such signals enter gradients, but not how they survive source removal or acquire different signs under later training. We treat parameters and optimizer moments as a single trainer state and derive an exact transport-valuation identity separating observer-independent propagation of the source perturbation from the value assigned by a future continuation and behavioral readout. State surgery identifies the first moment as a causal carrier. Transplanting it alone leaves parameters, hidden states, and outputs unchanged at the cut, yet source-free updates generate growing parameter and hidden-state differences; transplanting parameters with the first moment recovers the terminal behavioral response. Sending the same source-induced difference through matched futures produces negative, near-zero, and positive Qwen effects (-0.658, +0.008, and +0.658 seed means). This ordering recurs in all 12 Llama-3.2-1B seeds after eight updates, while state-difference norms remain nearly equal across routes. Both contrasts grow in every paired seed when the continuation extends to sixteen updates. A full-horizon costate predicts all 42 Qwen route-mean signs and all 21 resolved Llama ordinary-route signs. Observer-independent transport also replicates across Qwen, SmolLM2, and Llama, while the complete-state recurrence predicts physical, hidden, and fixed-head responses in non-LoRA MNIST systems, including CNNs trained with AdamW and momentum SGD. Together, these results identify a two-stage mechanism for subliminal trait transfer: optimizer state transports the source perturbation, and later training determines its behavioral value.
