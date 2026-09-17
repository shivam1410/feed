---
title: "Decoy Direction Optimization: A Post-Hoc Defense Against LLM Abliteration"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.16204"
authors: ["Aashiq Muhamed", "Mona T. Diab", "Virginia Smith"]
date: "2026-09-13T20:00:00.000Z"
score: ""
guid: "2609.16204"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.16204.png"
generated: "2026-09-17T19:00:24+05:30"
---

Safety guardrails in open-weight language models can be readily bypassed using Refusal Feature Ablation (RFA), a technique that identifies and projects out a linear refusal direction from the residual stream, often achieving a high attack success rate (ASR) while preserving model capability. Defending against these attacks typically requires computationally expensive safety finetuning for every new checkpoint. We introduce Decoy Direction Optimization (DDO), a fast, post-hoc weight-editing defense that requires no base-model finetuning. Our approach is based on a simple mechanistic insight: ablation attacks rely on contrastive estimators to find the refusal direction. Rather than trying to hide the true refusal circuitry, DDO actively injects a high-magnitude, nonlinear decoy signal into the network's MLP neurons. When an attacker attempts to locate the refusal direction, the decoy corrupts their estimator, tricking them into ablating a harmless orthogonal feature while the actual safety mechanism remains intact. We prove a spectral bound formalizing this effect and evaluate DDO across six model families, achieving <10% ASR under standard RFA. On Llama-3-8B-Instruct, DDO remains comparable to trained defenses under adaptive multi-phase attacks (65% vs. 58% worst-case ASR) and reduces Heretic weight-level attack ASR from 88.7% to 18%, all at 30 to 450 times lower optimization cost per configuration than the trained baselines.
