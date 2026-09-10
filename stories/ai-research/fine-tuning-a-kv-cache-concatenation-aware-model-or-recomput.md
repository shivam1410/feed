---
title: "Fine-Tuning a KV Cache Concatenation-Aware Model or Recomputing KV Caches? Why Not Both?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09768"
authors: ["Fumihiko Tachibana, Daisuke Miyashita, Jun Deguchi"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.09768v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09768v1 Announce Type: new Abstract: In Retrieval-Augmented Generation (RAG) systems, a large number of retrieved chunks are concatenated to form the input context so that users can receive high-quality responses based on external knowledge. As a result, the input context length increases substantially, leading to a larger prefill workload and, in turn, a longer time to first token (TTFT). While previous works that reuse precomputed key-value (KV) caches effectively reduce TTFT for long-context inputs, it remains unclear whether response quality is preserved when the input context becomes very long. In this paper, we propose a combined approach that (i) fine-tunes the model while taking KV cache concatenation into account and (ii) selectively recomputes a subset of the KV caches. By applying both techniques, we demonstrate improved accuracy for long-context inputs. Experiments on the RULER benchmark show that, for a 124k-token input, our method improves the RULER score by 9.7 point over the baseline that recomputes KV caches only. Moreover, TTFT is reduced by 80% compared with full attention.
