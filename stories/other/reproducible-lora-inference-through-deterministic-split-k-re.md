---
title: "Reproducible LoRA Inference Through Deterministic Split-K Reduction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10334"
authors: ["Dhayaneshwar Balusamy, Ankur Mohan"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10334v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Reproducibility is important for LoRA-adapted language models used in repeated evaluation, auditing, and decision-making. However, Split-K kernels used to introduce parallelism in low-rank LoRA multiplications can have the unintended consequence of numerical nondeterminism when partial results are combined using floating-point atomic additions. We investigate this non-determinism in vLLM across GSM8K mathematical reasoning, MBPP code generation, and Jev-style structured toxicity decisions on Civil Comments and introduce a deterministic Triton Split-K implementation. Under identical-input replay, Atomic Split-K=8 produces different FP32 shrink outputs in 97.61% of comparisons, while our Deterministic Split-K=8 shows no observed variation. Repeated atomic inference changes generated outputs in 17.30% of GSM8K and 14.96% of MBPP comparisons, sometimes altering task correctness. Structured-decision probabilities vary in 81.47% of atomic comparisons, with decision flips. Controlled tracing demonstrates how shrink-output differences propagate into the KV cache and how accumulated cache differences can change token decisions and final answers. Our deterministic Triton Split-K=8 implementation preserves parallelism, achieving 16.8-21.1% latency-based speedup over unsplit reduction with only 1.02-2.62% additional latency relative to Atomic Split-K=8.
