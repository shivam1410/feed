---
title: "CODEBLOCK: Learning to Supervise Code at the Right Granularity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18286"
authors: ["Zhijie Deng, Ling Li, Jinlong Pang, Kaiqin Hu, Qi Xuan, Zhaowei Zhu, Jiaheng Wei"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.18286v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18286v1 Announce Type: new Abstract: Supervised fine-tuning of code LLMs typically applies uniform cross-entropy loss to all response tokens, implicitly assuming that every token provides equally useful learning signal. Recent token-level selection methods challenge this assumption in natural-language SFT by supervising only high-value tokens. However, directly transferring token-level masking to code can break syntactically and semantically coherent program units, because code depends on structural completeness and definition-use relations. We therefore propose CodeBlock, a structure-aware sparse supervision framework that selects structure-complete code evidence rather than isolated tokens. CodeBlock first selects high-quality instruction-response pairs, then partitions code responses into syntactically coherent coding items, estimates their utility by aggregating generalized cross-entropy over core logic tokens, and reranks them with data-flow reach and bridge signals to prioritize blocks that propagate or connect important program dependencies. During training, the full response remains available as context, while loss is applied only to selected code items and informative natural-language tokens. Experiments on six code-generation benchmarks show that CodeBlock achieves stronger average pass@1 than full-token SFT and competitive selection baselines, while using only 1.9% of supervised response tokens.
