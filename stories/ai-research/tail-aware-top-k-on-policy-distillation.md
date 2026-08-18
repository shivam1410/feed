---
title: "Tail-Aware Top-$k$ On-Policy Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14728"
authors: ["Huipeng Huang, Hongxin Wei"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.14728v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14728v1 Announce Type: new Abstract: On-policy distillation (OPD) has emerged as an effective paradigm for transferring knowledge between language models, where a student is trained to align its next-token distribution with the teacher's along its own trajectories. To provide dense supervision at tractable cost, many works minimize the reverse Kullback-Leibler (KL) divergence between the student and teacher's normalized distributions over the teacher's top-$k$ tokens. However, this normalized objective discards the information about tail probability: the total probability outside the teacher's top-$k$ tokens. As a result, the optimization can steadily increase the student's tail probability and entropy, empirically degrading downstream accuracy. To address this issue, we propose Tail-Aware Top-$k$ OPD (\textbf{TA-OPD}), a novel distillation method that restores the missing tail probability signal. In particular, TA-OPD minimizes the reverse KL divergence over the top-$k$ tokens plus a tail token that carries the tail probability. In effect, TA-OPD better aligns the student's next-token distribution with the teacher's, preventing the increase in tail probability and entropy caused by top-$k$ normalization. Extensive experiments demonstrate the superiority of TA-OPD, improving Avg@8 by up to 8.05 points on common benchmarks. Our code is available at https://github.com/HuipengHuang/TA-OPD.
