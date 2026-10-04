---
title: "Prefill-Free Cross-Family KV Cache Transfer for Heterogeneous Multi-Agent LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32259"
authors: ["Vincent-Daniel Yun", "Woosang Lim", "Haneul Yoo", "Sungjoo Yoo", "Murali Annavaram", "Sai Praneeth Karimireddy"]
date: "2026-09-28T20:00:00.000Z"
score: 80
guid: "2609.32259"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32259.png"
generated: "2026-10-04T19:07:43+05:30"
---

HeteroFold transfers processed context between different LLM families without both models reprocessing shared text. Llama-3.1-8B to Mistral-3-14B at 32K context runs 10.7 times faster than native prefill and 1.2 to 1.5 times faster than prior methods. Multi-agent systems with heterogeneous models can now share processed context efficiently, avoiding redundant computation when different models receive the same information.
