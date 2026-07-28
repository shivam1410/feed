---
title: "A Frozen 12B Beats Frontier Models on Verified Work: 100% Accuracy, 0 Tokens, Bit-Exact, Forever"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.23806"
authors: ["Sietse Schelpe"]
date: "2026-07-25T20:00:00.000Z"
score: 85
guid: "2607.23806"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.23806.png"
generated: "2026-07-28T19:07:22+05:30"
---

Rather than retraining models continuously, researchers demonstrate that a frozen 12-billion-parameter model achieves 100% accuracy on solved problem families via a persistent memory of verified solutions. Across 180 fresh instances spanning nine families and four model architectures, each scored 180/180 at zero generation tokens per answer, deterministic and bit-exact. Memory lookup completes in 6-23 milliseconds; the verified store handles 6-million-token windows—exceeding vLLM's 30,399-token limit and SGLang's 32,000-token truncation. Approximate similarity retrieval selects wrong items 94.3% of time, while exact addressing makes zero errors. By storing only verification-passed solutions, the approach eliminates hallucinations while dramatically reducing inference cost, decoupling capability from parameter scaling.
