---
title: "The Surprising Effectiveness of Shared Memory in Looped Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02383"
authors: ["Giovanni Monea, Keshav Ramji, Yousef El-Kurdi, Luis A. Lastras, Yoav Artzi, Nathan Godey, Ram\\'on Fernandez Astudillo"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.02383v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Looped Transformers apply the same layers several times per token, adding compute to improve quality without more parameters. Each recursion, however, writes its own key-value cache, so memory still grows with compute. Inference-time techniques can shrink this cache at a cost in quality. We pretrain looped language models to share memory: only the first recursion writes a cache, and later recursions read it while keeping a short window of their own. Surprisingly, we find that sharing memory does not cost quality and instead improves it. At 150M-1B parameters, our Looped Prediction Transformer (LPT) and its hybrid variant set a new quality-memory frontier for looped models: with five recursions, the hybrid lowers validation perplexity on FineWeb-Edu by 1.12-1.82 relative to a same-size standard Transformer while using 76-79% less context memory. Through an extensive analysis, we investigate why memory sharing helps. Shared and local memory develop different representations, and later recursions attend mostly to the shared memory, which also acts as a gradient highway to the first recursion.
