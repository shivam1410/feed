---
title: "Enabling KV Caching of Shared Prefix for Diffusion Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07571"
authors: ["Younghun Go, Jaehoon Han, Changyong Shin, Chuk Yoo, Gyeongsik Yang"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2606.07571v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07571v1 Announce Type: new Abstract: Key-value (KV) caching for shared prefixes is essential for high-throughput large language model (LLM) serving, but it faces critical challenges in emerging diffusion language models (DLMs). In DLMs, bidirectional attention means that updating any token dynamically alters the entire context and its corresponding KVs. Thus, existing caching techniques developed for LLMs, which assume that KVs remain invariant once computed, corrupt the shared prefix KVs. Our experiments show that applying these techniques to DLMs causes model accuracy to collapse to near zero. To unlock high-throughput DLM serving, we propose bidirectional prefix caching, bicache, the first KV caching technique for shared prefixes in DLMs. bicache is designed based on key observations from our comprehensive analysis: shared prefix KVs remain stable and reusable in shallow layers, while the depth of shallow layers depends on the fraction of shared prefix tokens in each request. Thus, bicache dynamically identifies a safe layer depth for reusing shared prefix KVs and eliminates redundant computation. Evaluations demonstrate that bicache significantly improves serving throughput by 36.3%-98.3% compared to existing techniques without accuracy collapse (only 0-1.8% difference).
