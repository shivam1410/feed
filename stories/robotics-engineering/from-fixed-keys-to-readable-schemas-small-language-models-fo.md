---
title: "From Fixed Keys to Readable Schemas: Small Language Models for Vehicle Agent Function Calls"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09476"
authors: ["Hamed Jafarzadeh Asl, Yuanhao Yu, Vahid Partovi Nia"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.09476v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09476v1 Announce Type: new Abstract: In-vehicle assistants must translate natural-language requests into accurate vehicle function calls under strict memory and latency constraints, making small language models (SLMs) attractive for on-device deployment. For such models, a key design choice is how the available function surface is presented. Two approaches are to represent each function with a dedicated Functional Token (FT) or provide function schemas directly in the prompt. FTs enable compact inference but are restricted to functions learned during training, whereas Schema-in-Prompt (SIP) can generalize to unseen functions at the cost of longer prompts and higher inference overhead. We introduce a benchmark of 9,822 single-turn examples spanning 79 vehicle functions derived from Android Automotive, including held-out functions and requests requiring refusal. We compare both approaches under matched fine-tuning across four SLMs from 270M to 1.7B parameters. On functions seen during training, scaling provides limited benefit: the 270M model can match the 1.7B model, while the strongest overall performance occurs at 0.6B. On held-out functions, FT achieves zero accuracy by construction, whereas SIP generalizes and improves substantially with scale. On out-of-scope requests, FT can invoke an unavailable function it was trained to emit, while SIP more reliably refuses based on the functions offered. This flexibility comes with higher memory use and latency. Our theoretical analysis explains how SIP enables generalization and why longer schema contexts increase inference cost. Overall, function-surface representation, rather than model scale alone, determines the capabilities and failure modes of SLM-based vehicle function calling.
