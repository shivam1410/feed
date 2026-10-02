---
title: "Prefill-Free Cross-Family KV Cache Transfer for Heterogeneous Multi-Agent LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32259"
authors: ["Vincent-Daniel Yun", "Woosang Lim", "Haneul Yoo", "Sungjoo Yoo", "Murali Annavaram", "Sai Praneeth Karimireddy"]
date: "2026-09-28T20:00:00.000Z"
score: 82
guid: "2609.32259"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32259.png"
generated: "2026-10-02T21:40:09+05:30"
---

HeteroFold lets one language model send its cached key-value tokens to a different model without the receiver having to prefill shared context already processed. It aligns model structures, maps the sender cache, and calibrates it to preserve receiver behavior under frozen parameters. Llama-to-Mistral transfer at 32K context runs 10.7x faster than standard prefill and 1.18-1.47x faster than existing prefill-free baselines.
