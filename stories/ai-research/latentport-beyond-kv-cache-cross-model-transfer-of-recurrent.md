---
title: "LatentPort: Beyond KV Cache - Cross-Model Transfer of Recurrent Memory in Hybrid Language Models: A 4B-to-9B Hybrid-State Handoff Without Target Prefix Replay"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.25053"
authors: ["Simon P. Villani"]
date: "2026-09-06T20:00:00.000Z"
score: 60
guid: "2609.25053"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.25053.png"
generated: "2026-09-24T19:24:37+05:30"
---

Can one language model hand its live memory to another without the receiver rereading the context? We demonstrate useful persistent hybrid-state transfer across one architecture-matched Qwen3.5 4B-to-9B sibling pair. To our knowledge, this is the first demonstrated cross-model handoff of persistent recurrent inference state between differently sized hybrid language models without target prefix replay. Translated attention KV alone leaves a large gap; adding the Gated DeltaNet (GDN) persistent-state package lowers teacher-forced negative log-likelihood (NLL), the average next-token log-loss, by 0.747 nats/token (95% paired document bootstrap CI [0.6921, 0.8047]), improving all 64 PG19 documents. Direct recurrent and convolution reuse outperforms the tested learned GDN maps, consistent with partial functional compatibility of persistent-state coordinates. A fresh component factorial selects translated KV with direct recurrent and convolution state. An additional 434,176-parameter correction improves that base on 64 fresh web documents: continuation loss is 0.076 nats/token above native 9B (excess NLL), Jensen-Shannon (JS) divergence is 0.022, and native context recovery (NCR) is 0.918. Corrected 9B significantly beats continued 4B inference while processing zero historical prefix tokens. Evidence covers one direction, one geometry-matched Base-model pair, and 4K teacher-forced continuation; the near-native gate failed, the 16K branch was not run, and free-generation equivalence and a general state interface remain unproven.
