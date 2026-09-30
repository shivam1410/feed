---
title: "Same Probe, Different Numbers: Are Activation Probes Robust to Inference-Time Numerical Non-Determinism?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31796"
authors: ["Alizishaan Khatri"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.31796v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Activation probes are increasingly used to monitor LLMs in deployment. A probe is typically trained under one inference configuration, then used under whatever batch size and numerical precision the serving stack uses. Because common GPU kernels are not batch-invariant and floating-point formats round differently, the activations seen at deployment are not the ones the probe was trained on. We measure what that costs for Llama-3.1-8B, Qwen3-8B and Gemma-3-4B across batch sizes 4, 8 and 16 and float32, bfloat16 and float16, training 768 probes on one configuration, evaluating each on every other, and comparing verdicts example by example. Probes are stable, but aggregate accuracy is the wrong instrument for showing it: it understates how many verdicts change by a factor of two to nine. At the prompt, accuracy never moves by more than 0.47 percentage points across 1,392 transfers and only 0.076% of verdicts change; under float32 with only the batch size varied, none of 201,960 verdicts change. During decoding the flip rate rises to 2.8%, but rows whose realised tokens matched flip in only 0.12-0.15% of cases, while rows whose tokens diverged flip in 12.9%: the cause is the text, not the arithmetic. A bfloat16 batch-size change flips the first generated token for 2.1% of rows and leaves 25% on different tokens by token 20. Flips are symmetric, Cohen's kappa stays above 0.94, and AUROC moves by at most 0.05 points. Underneath, activations move about as much as the format's rounding: a bfloat16 batch-size change perturbs them by a median relative L2 of 1e-2, roughly 8x the float16 figure. Probes absorb this; the model's own next-token argmax does not. Robustness evaluations of activation monitors should report per-example agreement rather than aggregate accuracy, separate representational noise from input change, and state the serving configuration.
