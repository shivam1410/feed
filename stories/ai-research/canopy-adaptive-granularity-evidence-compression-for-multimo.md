---
title: "CANOPY: Adaptive-Granularity Evidence Compression for Multimodal RAG"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.00923"
authors: ["Hyojeong Yun", "Jueun Kim", "Wook-Shin Han"]
date: "2026-09-30T20:00:00.000Z"
score: 65
guid: "2610.00923"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.00923.png"
generated: "2026-10-06T22:55:59+05:30"
---

Multimodal RAG retrieves text, tables, images, and videos, but choosing a retrieval granularity does not determine how much context to retain within each item. Coarse units include irrelevant content, while uniformly fine selection can remove context needed to interpret the evidence. Existing compressors address this trade-off with modality-specific mechanisms, leaving open a shared procedure for adapting the retained extent region by region across heterogeneous items. We introduce CANOPY (Canonical Projection over Hierarchy), a framework for adaptive-granularity post-retrieval evidence compression. CANOPY represents retrieved items as hierarchies and uses a node encoder fine-tuned on gold evidence to score regions against the query. Parent-relative refinement compares these scores to select multiple regions at different granularities without LLM calls for node-level pruning. Because compression cannot recover evidence that was never retrieved, a critic requests targeted follow-up retrieval when it judges the accumulated evidence insufficient; newly retrieved items are compressed before being added. Across five QA benchmarks over a 33M-item heterogeneous corpus, CANOPY achieves higher average answer accuracy than the evaluated retrieval baselines. Ablations indicate that additional retrieval drives the main accuracy gains on multi-hop QA. In the unrouted Qwen3-VL-8B-Instruct setting, compression reduces reader-input evidence tokens by 14.2-27.7% relative to the same iterative pipeline without compression, with comparable answer accuracy.
