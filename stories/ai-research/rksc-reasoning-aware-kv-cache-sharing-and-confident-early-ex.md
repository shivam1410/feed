---
title: "RKSC: Reasoning-Aware KV Cache Sharing and Confident Early Exit for Multi-Step LLM Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09937"
authors: ["Anirudh Sekar"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.09937v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09937v1 Announce Type: new Abstract: We introduce RKSC (Reasoning-Aware KV Cache Sharing), a training-free inference framework that eliminates two structural redundancies in multi-branch LLM reasoning pipelines. ASKS (Attention-Similarity KV Sharing) computes the prefix KV cache once and broadcasts it to all semantically similar branches via hidden-state cosine similarity, strictly generalising the token-exact prefix caching used by vLLM and SGLang. CGEE (Confidence-Gated Early Exit) applies two complementary exit mechanisms: (1) it skips the verification forward pass entirely when generation confidence is decisive across branches, and (2) it terminates the verification pass at an intermediate layer when per-layer entropy stabilises, using lightweight hooks on the transformer backbone. RSBCM (Reasoning-Selective Block Cache Manager) prevents unbounded cache growth via attention-weighted depth-priority eviction. Across five model families (7B-10B), four benchmarks, and 1,000 evaluated problems, RKSC achieves a mean speedup of 3.008x over the No-KV baseline (peak 3.990x), a 1.66x mean improvement over vLLM-equivalent prefix caching, with a CGEE-induced error rate of only 0.37% (6 errors out of 1,616 verify calls). No fine-tuning or architecture changes are required. Code is available at https://github.com/AnirudhSekar/RKSC.
