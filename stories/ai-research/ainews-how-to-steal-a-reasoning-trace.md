---
title: "[AINews] How to steal a Reasoning Trace"
category: "AI Research"
source: "Latent Space"
url: "https://www.latent.space/p/ainews-how-to-steal-a-reasoning-trace"
authors: []
date: "Wed, 12 Aug 2026 07:11:08 GMT"
score: 72
guid: "https://www.latent.space/p/ainews-how-to-steal-a-reasoning-trace"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

Researchers demonstrated that cryptographically-signed reasoning traces from frontier AI models can be decoded and transferred across models and sessions. Since o1's launch, major labs encrypted reasoning traces to prevent distillation. Analysis of approximately 7,000 publicly shared Claude Code sessions exposed significant data leakage: 62 unique API keys, 33 email addresses, 33 passwords, and other sensitive information recovered. Critically, 64 instances appeared exclusively inside encrypted reasoning blocks—invisible to users reviewing sessions. This demonstrates encryption's vulnerability and highlights unintended exposure risks, particularly for users sharing sessions online. The findings raise fundamental questions about whether reasoning trace encryption provides meaningful security for proprietary model internals or user data.
