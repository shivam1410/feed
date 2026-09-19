---
title: "A Zeroth-Order Paradigm for LLM Preference Alignment"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.19144"
authors: ["Peter Chen", "Xi Chen", "Wotao Yin", "Tianyi Lin"]
date: "2026-09-15T20:00:00.000Z"
score: 55
guid: "2609.19144"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.19144.png"
generated: "2026-09-19T19:06:02+05:30"
---

Direct preference alignment methods are widely used to align large language models (LLMs) with human preferences because of their computational and memory efficiency. However, likelihood displacement motivates alternative ways to extract information from preference pairs with small likelihood margins. In this paper, we propose and analyze Comparison-based Preference Optimization (ComPO), a zeroth-order alignment method based on comparison oracles. ComPO extracts directional information from these pairs without directly optimizing a differentiable preference loss on them. We establish a convergence guarantee for its basic offline scheme under smoothness, gradient sparsity, and compatibility between the oracle and a latent objective. We further introduce online ComPO, which retains the offline comparison mechanism and uses unlabeled policy generations for reverse-KL control relative to a reference policy. Following the coverage perspective of preference fine-tuning, we establish a performance guarantee for a basic constrained scheme under local coverage and in-distribution pairwise reward accuracy. Experiments on Mistral, Llama, Gemma-2, Qwen3, and Gemma-3 models demonstrate improvements over existing direct alignment methods, including length-controlled win rates, with pair-level diagnostics providing evidence consistent with mitigating likelihood displacement.
