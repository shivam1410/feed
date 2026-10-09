---
title: "SparseEngine: Sparse-First Inference Engine"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.39068"
authors: ["Jitai Hao", "Quansheng Gu", "Qiang Huang", "Jun Yu"]
date: "2026-09-29T20:00:00.000Z"
score: 72
guid: "2609.39068"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.39068.png"
generated: "2026-10-10T00:52:03+05:30"
---

Long-context LLM agents accumulate interaction histories that strain KV-cache memory and attention computation. Although sparse attention reduces these costs, heterogeneous cache representations and workflows hinder integration with existing inference engines, while prior sparse-serving abstractions support only specific layouts or workflows. We present SparseEngine, a ground-up, sparse-first inference engine whose shared lifecycle contract lets each method control its KV representation and computation while coordinating state transitions with common serving infrastructure. SparseEngine supports 15 methods across four categories and enables cross-request state management through Chain Cache, which resumes KV-eviction methods from retained history, and controllable Prefix-Cache Pruning, which removes KV from selected history regions while preserving logical-prefix matching. While maintaining method quality, SparseEngine delivers over 10x higher throughput with KV eviction, over 2.5x faster decoding at matched concurrency than vLLM, and over 2x end-to-end speedup on agent benchmarks. The code is available at https://github.com/CURRENTF/SparseEngine.
