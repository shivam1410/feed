---
title: "Time Series as Language: A Universal Tokenizer for General-Purpose Time Series Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09861"
authors: ["Yunhao Zhang, Ruiying Qi, Jiale Zheng, Jianfeng Zhang, Lujia Pan, Junchi Yan"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 73
guid: "oai:arXiv.org:2606.09861v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09861v1 Announce Type: new Abstract: While Next-Token Prediction (NTP) has unified LLM pretraining, its adaptation to unbounded, continuous time series (TS) remains open. To bridge the gap, we introduce UniTok, a universal tokenizer that transforms TS into discrete tokens, and UniTok-FM, a foundation model pretrained via NTP on these tokens. UniTok-FM is a general-purpose foundation model that supports zero-shot and prompt-boosted forecasting, as well as few-shot generation and classification via training-free in-context inference--a capability not achieved by prior works. Technically, UniTok is a vector-quantized autoencoder incorporating prefix normalization for scale stabilization, a progressive-resolution causal architecture for encoding and decoding, and a structure-preserving reconstruction loss for training. UniTok-FM adopts an off-the-shelf LLM architecture without TS-specific modifications. Instead of pretraining on isolated TS, it performs NTP on context windows formed by multiple series with similar patterns, aiming to capture their shared dynamics. Experiments on forecasting, generation, and classification show that a single unified UniTok-FM consistently outperforms statistical and supervised baselines, achieves competitive performance with task-specific foundation models, and uniquely enables training-free in-context inference across tasks.
