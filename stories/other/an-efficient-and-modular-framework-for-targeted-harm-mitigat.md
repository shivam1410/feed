---
title: "An Efficient and Modular Framework for Targeted Harm Mitigation in LLMS"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13624"
authors: ["Roberto Campbell, Momin Abbass, Muneeza Azmat, Michal Ulewicz, Raya Horesh, Kristjan Greenewald, Rog\\'erio Abreu de Paula, Nathalie Baracaldo"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13624v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13624v1 Announce Type: new Abstract: Large Language Models (LLMs) are powerful zero-shot learners but remain prone to misalignment with human preferences, often producing biased, toxic, or otherwise harmful outputs. Existing alignment methods, while effective, are costly and tightly coupled to the model, limiting flexibility and scalability. We propose a modular correction framework that augments pretrained LLMs with Activated LoRA (aLoRA) adapters and a context-aware routing mechanism to eliminate harms from misaligned model responses. Our approach enables expert adapters to activate mid-sequence without invalidating the KV cache, allowing low-latency, targeted correction during generation. Each expert is trained to detect and mitigate specific harms, such as bias or toxicity. A learned router dynamically selects appropriate experts based on the models intermediate outputs. We demonstrate that our system improves alignment on standard safety benchmarks while preserving task performance, offering a lightweight and efficient path toward safer and more controllable LLM deployments.
