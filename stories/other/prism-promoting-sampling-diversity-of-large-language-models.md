---
title: "PRISM: Promoting Sampling Diversity of Large Language Models with Implicit Stochastic Modulation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.32101"
authors: ["Qixin Xu, Zihan Zhu, Xiaojiang Liu, Bohan Lyu"]
date: "Mon, 26 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.32101v1"
image: ""
generated: "2026-10-26T19:00:28+05:30"
---

Large language models (LLMs) exhibit mode collapse, where their output distribution concentrates on familiar semantic modes. When diversity disappears, repeated sampling becomes semantic repetition rather than discovery, making rare but stronger solutions unlikely to surface and leaving self-evolution and continual learning difficult to sustain. Most remedies intervene only at inference time, shaping sam- ples without making diversity a model capability. We propose PRISM, a training-time framework that internalizes diversity within the model. PRISM combines (i) submodular curation that pairs each prompt with diverse-yet-correct multi-teacher solutions, and (ii) stochastic embedding modulation, which turns special-token perturbations into implicit signals for sampling distinct outputs. A theoretical analysis establishes the stability of this mechanism. On WritingPrompts and BookMIA, PRISM moves the quality-diversity frontier outward, achieving the best generation quality in all model-benchmark settings while maintaining the strongest or near-strongest semantic diversity across two open-weight model families. It also improves sampling efficiency on math and code benchmarks. Beyond inference, PRISM yields a stronger foundation for reinforcement learning, sustaining diverse rollouts and mitigating the diversity collapse commonly observed during RL training.
