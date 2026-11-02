---
title: "Steering Vectors as a Training Signal in LLM Post-Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40998"
authors: ["Tiejin Chen, Maunil Vyas, Huaiyuan Yao, Hua Wei"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 50
guid: "oai:arXiv.org:2610.40998v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Steering vectors (SVs) are residual-stream directions that shift the behavior of LLMs when added to hidden states at inference time. While prior work has mainly used SVs as post-hoc controls, we ask whether the same directions can also guide parameter updates during post-training. We study this question across supervised learning, including SFT and distillation, and reinforcement learning with verifiable rewards (RLVR). Our framework considers two intervention regimes: a hidden-state hook during teacher-forced supervised training, and an advantage-repair mechanism on wrong rollouts in GRPO. For each regime, we analyze three design axes, which are the steering direction, its placement, and the operation used to combine it with training. In supervised settings, SV injection improves over plain SFT and distillation, with gains scaling with the off-policy gap and reaching up to a $12\%$ improvement when distilling from thinking-mode teachers. These gains hold across three random seeds. In RL settings, applying a correctness-contrast direction as advantage repair on wrong rollouts, including otherwise zero-gradient all-wrong groups, recovers a learning signal that transfers to held-out math benchmarks and acts as a composable auxiliary signal that adds to existing zero-variance remedies such as entropy-aware advantage shaping. We further identify three failure boundaries. In detail, code generation can break the direction, cross-family layer transfer can break the placement, and inference-time application on an SV-trained checkpoint can break the intervention regime. Together, these results establish steering vectors as a conditional but effective training signal for LLM post-training. Our code is available here.
