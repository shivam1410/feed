---
title: "P$^2$-MOPD: Accelerating Multi-Teacher On-Policy Distillation via Parameter Priors"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03953"
authors: ["Sinuo Wang, Jiacheng Lu, Zeyu Zhang, Maojia Song, Rui Sun, Beidi Luan, Yutong Xie, Jing Li, Daxin Jiang, Qi Wu, Zuo Bai"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03953v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Multi-teacher on-policy distillation consolidates expert capabilities by supervising student-generated trajectories, whereas task arithmetic offers a training-free alternative through linear parameter combinations. We view the linear combination of student and expert parameters as a single differentiable model and propose P$^2$-MOPD, which jointly optimizes the mixing coefficients and the student weights under the same on-policy distillation objective. Unlike task arithmetic, which stays within the span of the frozen student and expert parameters for any choice of merging coefficients, P$^2$-MOPD keeps the student trainable, so the experts act as parameter priors without confining it to this span. Across four domains at 1.7B and 4B scales, P$^2$-MOPD achieves faster and more balanced recovery than MOPD from the same initialization, surpassing its final average recovery in half the training steps. At the end of training, our 1.7B model reaches 94.7% average recovery, versus 80.9% for MOPD.
