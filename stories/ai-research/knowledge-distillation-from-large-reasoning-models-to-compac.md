---
title: "Knowledge Distillation from Large Reasoning Models to Compact Student Models: A Case Study on the John O Bryan Mathematics Competition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31048"
authors: ["Gaurab Baral, Aaditya Khanal, Yangyang Tao, Junxiu Zhou"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2606.31048v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31048v1 Announce Type: new Abstract: This paper investigates knowledge distillation from a large reasoning model (DeepSeek-R1) to a compact student model (Qwen2.5-7B). Using historical problems from the John O'Bryan Mathematics Competition at Northern Kentucky University (2011-2025), we build a Chain-of-Thought (CoT) training corpus through a dual-agent framework. The dataset is used to fine-tune the student model with Low-Rank Adaptation (LoRA) on Apple Silicon hardware using the MLX framework. The base Qwen2.5-7B model achieves 64.67% accuracy on competition problems, while the DeepSeek-R1 teacher achieves 91.40%. An initial 1,000-iteration training run revealed severe overfitting, with validation loss reaching a minimum at iteration 200 before rising steadily. Based on this finding, we ran five independent training runs each limited to 200 iterations with varied random seeds to assess result stability. Across these five runs, the fine-tuned student model achieves a mean accuracy of 69.43% (std dev 0.17%) on the competition dataset, a 4.76 percentage-point improvement over the base model, and generalizes to 73.1% (std dev 0.18%) on the MATH-500 benchmark. We further study how response length affects answer quality across six reasoning levels (R1-R6): accuracy declines consistently from 69.43% at R1 (mean 220 words) to 41.9% at R6 (mean 31.2 words), with the two-person speed section most sensitive to token reduction. These results demonstrate that CoT distillation improves compact student models and that response length is a critical factor in mathematical reasoning quality.
