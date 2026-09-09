---
title: "Privacy Failure in Split-LLM Training, The Returned Gradient Nullifies the Decoys"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.04382"
authors: ["Georgios Politis", "Evangelos Pappas"]
date: "2026-09-02T20:00:00.000Z"
score: 75
guid: "2609.04382"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.04382.png"
generated: "2026-09-09T19:07:26+05:30"
---

Split-LLM training systems passed privacy audits but leaked real data through exploitable patterns in zero-gradient regions. Attackers recovered tokens despite gradient clipping and noise injection, exposing a fundamental vulnerability in privacy-preserving distributed training. This reveals that conventional privacy protections may be ineffective against information leakage through model behavior patterns.
