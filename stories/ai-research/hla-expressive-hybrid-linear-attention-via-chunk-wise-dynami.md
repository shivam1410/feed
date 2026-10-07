---
title: "HLA: Expressive Hybrid Linear Attention via Chunk-Wise Dynamic Mixing"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.05842"
authors: ["Zhuokun Chen", "Xi Lin", "Xiyu Wu", "Jiahao He", "Jianfei Cai", "Bohan Zhuang"]
date: "2026-10-04T20:00:00.000Z"
score: 45
guid: "2610.05842"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.05842.png"
generated: "2026-10-07T19:11:01+05:30"
---

Linear attention enables efficient long-context autoregressive decoding by compressing history into recurrent states, but this compression can make selective access to sparse and distant information difficult. Existing chunk-based extensions increase memory capacity, yet learned chunk-mixing coefficients may remain fixed with respect to input content and therefore cannot adapt historical access to each query. We introduce Hybrid Linear Attention (HLA), a query-dependent chunk-level attention mechanism for Gated DeltaNet (GDN). HLA represents each completed chunk as an exact affine state transition and computes content-dependent routing gates from compact, self-attentively pooled representatives. Each gate interpolates the corresponding historical transition with the identity map, controlling both the chunk's additive memory and its transformation of earlier states. Effective-support regularization further encourages concentrated routing for sparse inference. We evaluate HLA under both pretrained adaptation and from-scratch training. Across Qwen3.5 models from 0.8B to 9B, HLA consistently improves over native GDN and fixed chunk mixing, with gains of up to 5.57 percentage points on LongBench-V2 and 3.97 points on RULER. In a controlled from-scratch 1.3B setting trained for 100B tokens with a 4K context, HLA also improves RULER performance from 4K to 32K, with gains increasing from 0.83 points at 4K to 4.22 points at 32K. These results demonstrate that query-dependent composition of recurrent memory improves long-context modeling and remains effective beyond the training context while using compact per-chunk affine summaries. Project page: https://caesarhhh.github.io/hla/
