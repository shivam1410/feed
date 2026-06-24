---
title: "Blockwise Policy-Drift Gating for On-Policy Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24084"
authors: ["Liwen Zheng, Haiyun Jiang"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24084v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24084v1 Announce Type: new Abstract: On-policy distillation (OPD) trains a student policy using teacher signals computed on trajectories sampled by the student itself. Recent work shows that sampled-token OPD can be fragile on long-horizon reasoning tasks and that local teacher-support matching is a simple and effective repair. This paper introduces blockwise policy-drift gating, a lightweight student-only old-current drift controller for OPD under rollout reuse. The method computes log-probability shifts between the behavior student and the current student on the sampled token path, aggregates these shifts over fixed blocks or spans, and uses the resulting detached, mean-normalized gates to reweight OPD position losses. It does not change teacher targets, teacher top-K supports, or the rollout policy. In a six-variant Qwen3 math reasoning benchmark with a uniform 200-step training budget for all trained variants, we use pass@8 as the primary problem-level solve-rate metric. Fixed 64-token block gating improves sampled-token OPD mean pass@8 from 0.4978 to 0.5160 across AIME24, AIME25, MATH500, and AMC23. On Teacher-TopK/LSM, Block64 gives the best four-benchmark mean pass@8 among trained students. The results identify local old-current policy drift as a practical control signal for reused OPD rollouts and motivate block-level gating as a simple default for improving solve-rate robustness.
