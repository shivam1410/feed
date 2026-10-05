---
title: "Trained Agentic Context Management"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02404"
authors: ["Bryce Sandlund"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 78
guid: "oai:arXiv.org:2610.02404v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

We study long context language models. Instead of training long context natively, or designing a long context harness, we train a model over the simplest possible harness: a tool to call itself with any specified prompt and a tool to read tokens in a range from the input context. We finetune Qwen3.6-35B-A3B on a diverse synthetic dataset using this harness. With only 8,000 tokens of context, our small model is as strong as GPT-5.4 with 1M tokens of context on the OOLONG-synth benchmark when document length exceeds 40K tokens.
