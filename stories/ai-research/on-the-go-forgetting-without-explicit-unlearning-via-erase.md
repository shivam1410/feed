---
title: "On-the-go Forgetting without Explicit Unlearning via ERASE"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05966"
authors: ["Kushal Chakrabarti, Mayank Baranwal"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.05966v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05966v1 Announce Type: new Abstract: Existing unlearning approaches typically rely on post hoc weight adaptation or distillation, leading to duplicated memory costs, degraded generalization, and limited scalability. In this work, we introduce ERASE, Erasure via Reconstructive Adversarial Signal Editing, a framework for on-the-go forgetting that suppresses the observable influence of private data without modifying model weights. ERASE leverages structured, class-conditioned input perturbations to induce selective forgetting during inference, eliminating the need for retraining, fine-tuning, or model copies. We rigorously characterize sufficient conditions when ERASE provably achieves functional forgetting of designated subclasses while preserving predictions across other subclasses within the same superclass. This analysis offers a principled foundation for inference-time forgetting under mild regularity assumptions. Across diverse architectures and benchmark datasets, ERASE maintains the best observed balance between forgetting efficacy, computational efficiency, and retention fidelity over recent unlearning-based methods. By reimagining data removal as forgetting without unlearning, our work establishes a scalable, regulation-aligned pathway for continual, privacy-conscious learning.
