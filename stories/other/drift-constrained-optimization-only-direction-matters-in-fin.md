---
title: "Drift-Constrained Optimization: Only Direction Matters in Fine-Tuning Instruct Models"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.13680"
authors: ["Fei Yuan", "Changjiang Gao", "Yilei Tu", "Yifeng Liu", "Shujian Huang", "Yu Qiao"]
date: "2026-09-11T20:00:00.000Z"
score: ""
guid: "2609.13680"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.13680.png"
generated: "2026-09-16T19:00:23+05:30"
---

Fine-tuning instruct models often improves target performance while inducing behavioral drift from the reference model, which can degrade existing capabilities. Rather than treating this drift as an uncontrolled consequence of optimization, we specify a behavioral drift budget before optimization and ask how to boost the target-task performance within it. Locally, behavioral drift induces a shared geometry anchored at the reference model, with the drift budget defining a boundary within this space. In this space, drift determines distance from the reference, leaving update direction as the remaining degree of freedom. Fine-tuning updates can therefore be compared through their directional efficiency, naturally reformulating fine-tuning as a direction-selection problem. This reformulation makes a concrete prediction: changing the accessible directions can qualitatively alter the outcome of fine-tuning. We test this prediction in a stringent QA-only setting, where strong instruct models are fine-tuned only on final answers but must still generate multi-step reasoning at inference. Despite this mismatch, a coarse layer-selective probe reverses the failure of QA-only fine-tuning and reveals the existence of effective directions, with multiple neighboring configurations improving target performance while preserving reasoning and general capabilities. Across Qwen3-8B and Qwen3-14B, these directions substantially improve scientific reasoning and multilingual translation. Over more than 100 languages, the resulting models match or outperform dedicated translation systems and provide a stronger initialization for subsequent reinforcement learning. Our results suggest that fine-tuning is not just about how much a model changes, but how that change is spent. https://github.com/CONE-MT/DCO and https://huggingface.co/collections/LLaMAX/dco
