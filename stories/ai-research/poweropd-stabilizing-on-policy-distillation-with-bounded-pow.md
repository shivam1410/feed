---
title: "PowerOPD: Stabilizing On-Policy Distillation with Bounded Power Transformation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17199"
authors: ["Anhao Zhao, Junlong Tong, Yingqi Fan, Ping Nie, Wenjie Li, Xiaoyu Shen"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.17199v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17199v1 Announce Type: new Abstract: Standard on-policy distillation (OPD) for large language models estimates the reverse-KL objective using student-sampled tokens, yielding an unbiased single-sample Monte Carlo estimator that avoids vocabulary-wide computation. However, we show that this estimator suffers from severe training pathologies in practice: sample inefficiency, unstable generation dynamics, and a substantial performance gap compared to exact full-vocabulary OPD. Reward-level diagnosis traces these pathologies to the log-ratio reward, which is unbounded by construction, producing extremely high-variance gradients concentrated at early positions and persisting throughout training; standard post-hoc scaling fail as they operate only after this distortion occurs. To solve this problem, we propose PowerOPD: a family of natively bounded, sign-consistent rewards from the Box-Cox power transformation, parameterized by alpha > 0, of which the log-ratio is the degenerate alpha -> 0 limit. Across six mathematical reasoning benchmarks and four Qwen3 teacher-student pairs, PowerOPD achieves benchmark-averaged Avg@8/Pass@8 gains of up to +6.37/+5.71 over vanilla OPD, +3.01/+3.54 over post-hoc stabilization, and +2.59/+8.90 over full-vocabulary OPD, while reducing wall-clock time by 59.2% and peak GPU memory by 23.1%. Larger alpha generally improves accuracy, consistently shortens responses, and keeps gradient norms more than 3,000x smaller than vanilla OPD.
