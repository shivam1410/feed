---
title: "WM-Quant: Rollout-Aware Post-Training Quantization for JEPA-Style World Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21882"
authors: ["William Hammer, Andrew Heuer, Nikhil Krishna, Matthew Grenier, Ramtin Zand"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21882v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

We present WM-Quant, to our knowledge, the first post-training quantization (PTQ) framework designed specifically for JEPA-style world models. Although world models typically feature relatively few parameters, action planning algorithms often require thousands of inferences, which can quickly become computationally expensive. PTQ is a natural way to reduce this cost. However, we show that in world models using autoregressive model predictive control (MPC) rollouts, quantization error can compound with each predictor step, resulting in action rankings from the quantized model becoming near-random. WM-Quant addresses this with three components that build on existing PTQ methods: early-encoder precision, control-path preservation, and rollout-aware scaling. Early-encoder precision protects accurate latent state and goal information to mitigate long-term error propagation. Control-path preservation allows the world model predictor to distinguish between fine-grained actions, significantly improving action rankings and execution. Rollout-aware scaling jointly calibrates encoder and per-step predictor activation ranges with respect to an entire rollout rather than a single prediction, reducing the cumulative rollout error. Across multiple world models, environments, and PTQ methods, WM-Quant substantially improves planning success at low bit-widths, approaching full-precision performance at W4A4.
