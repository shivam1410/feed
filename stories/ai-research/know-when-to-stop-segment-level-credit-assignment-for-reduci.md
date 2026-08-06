---
title: "Know When to Stop: Segment-Level Credit Assignment for Reducing Overthinking"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.00482"
authors: ["Chia-Hsuan Lee", "Sihui Dai", "Mingyang Zhou", "Isha Slavin", "Hsuan Su", "Shi-Xiong Zhang", "Sambit Sahu", "William Campbell"]
date: "2026-08-03T20:00:00.000Z"
score: 70
guid: "2607.00482"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.00482.png"
generated: "2026-08-06T19:05:18+05:30"
---

Reasoning language models frequently overthink: generating extended chains of behaviors such as hedging, approach abandonment, and self contradiction that consume tokens without improving answers. We show that these behaviors are not merely a consequence of length; even when controlling for response length, incorrect traces exhibit higher rates of unproductive self-reflection than correct ones. Addressing this requires identifying where self-reflection helps vs hurts, but obtaining these step-level annotations is costly. We observe that intermediate answer commitments within reasoning traces can provide a cheap proxy: by comparing each final answer candidate in the trace to the ground truth, we can determine whether subsequent reflection is productive without any additional supervision. Building on this insight, we propose DASH (Drift Aware advantage SHaping), which assigns segment-level credit based on whether each reasoning segment leads toward or away from correctness. On competition-level math benchmarks, DASH achieves the highest accuracy where overthinking is prevalent (Average Accuracy: 59.45% vs. 58.1% Dr.GRPO vs. 56.95% GRPO) while reducing overthinking behaviors and achieving more productive self-correction than baselines.
