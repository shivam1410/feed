---
title: "Do All LLMs Know When They're Being Harmful? A Reproducibility Study of Latent-Space Safety Probes Across Model Families"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.08029"
authors: ["Alizishaan Khatri, Dun Li Chan"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.08029v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.08029v1 Announce Type: new Abstract: Khatri et al. (2026) [DOI: 10.1109/DSN-W70714.2026.00027] show that lightweight MLP probes on final-layer activations of a single 8B model (LLaMA-3.1-8B) detect harmful prompts at F1 competitive with guard models 1000x larger, using one probe per benchmark. We reproduce this pipeline end-to-end and extend it along two axes the original study leaves open. First, we test whether the result generalizes across other model architecture and scale by training identical probes on activations from models like Gemma-4-E4B, Mistral-7B-v0.3, and Qwen2-7B, using the three benchmarks (WildJailbreak, BeaverTails, AEGIS 2.0). Second, we test how much of the reported performance is affected by non-determinism during inference by repeating extraction under five random seeds and measuring the variance of F1 scores. Our results reproduce the original LLaMA model benchmarks within 0.37 percentage points of the original F1 scores (and within 0.2 points on BeaverTails). We find that the original MLP probe architecture extends to other model families with F1 scores within a point of the values reported for LLaMA-3.1-8B. Our experiments varying seed values reveal an interesting observation: final token latent vectors remained the same for all tested architectures irrespective of the seed values used.
