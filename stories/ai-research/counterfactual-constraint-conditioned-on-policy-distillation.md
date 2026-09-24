---
title: "Counterfactual Constraint-Conditioned On-Policy Distillation for Multi-Constraint Instruction Following"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27421"
authors: ["Yanzhao Zheng, Yuanqiang Yu, Tianze Xu, Chao Ma, Zhentao Zhang, Jihuai Zhu, Baohua Dong, Hangcheng Zhu, Ruohui Huang"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.27421v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27421v1 Announce Type: new Abstract: Multi-constraint instruction following requires a model to respond to a query under many simultaneously active constraints. Even strong instruction-tuned models still routinely violate some of them. Existing approaches either augment supervision with sequence- or token-level RL rewards from external verifiers or learned graders, or use on-policy distillation (OPD) against a single full-context teacher whose probability mass becomes diluted as more constraints become simultaneously active. We propose CC-OPD (Counterfactual Constraint-Conditioned On-Policy Distillation), which inverts the standard supervision-generation direction in distillation. Rather than enriching the teacher with information beyond what the student sees, CC-OPD ablates each constraint from the teacher's conditioning in turn, and constructs the per-constraint signal from the resulting per-token probability differentials. The resulting per-token leave-one-out log-likelihood shifts are summed, clipped, and added to the vanilla OPD reward as a token-level shaping term. All shaping terms are obtained from the frozen teacher, without an external verifier during distillation, and the reward equals vanilla OPD wherever the aggregate shift is zero. Across two Qwen model pairs and seven benchmarks, CC-OPD achieves the highest average among all evaluated student-training methods. A 1.5B student trained with CC-OPD surpasses its own 7B RL-trained teacher on the MulDimIF benchmark.
