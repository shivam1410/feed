---
title: "Sampling via Decision-Flow: Training-Free Extraction of Improved Latent Reasoning Paths in Large Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12317"
authors: ["Zhendong Mi, Shaoyi Huang"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12317v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12317v1 Announce Type: new Abstract: A central question in LLM reasoning is whether reinforcement learning (RL) instills genuinely new capabilities or merely reshapes how existing knowledge is expressed during inference. Building on the distribution-sharpening hypothesis, which holds that RL reallocates probability mass toward high-reward trajectories already latent in base models, we ask: can we unlock those latent paths without costly RL fine-tuning? We present Decision-Flow Sampling (DF-Sample), a training-free, data-free inference-time framework that constructs a hierarchical reasoning tree, scores terminal nodes for quality, and back-propagates utilities to inform each intermediate branching decision. Unlike conventional sampling strategies that make purely local step-wise choices, DF-Sample performs explicit global trajectory evaluation before committing to a path, recovering high-quality but low-probability reasoning chains that standard decoding overlooks. On GPQA, DF-Sample achieves 45.6% accuracy, surpassing power sampling (38.9%) and GRPO (39.9%), showing that a training-free method can outperform a trained one. Across three models and four benchmarks, DF-Sample consistently outperforms baselines, indicating substantial latent reasoning potential in pretrained base models.
