---
title: "PreSO: Privileged Representation Isolation for On-Policy Self-Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14001"
authors: ["Yuhang Yang, Mingxuan Xia, Chao Ye, Shuai Zhu, Shouqing Yang, Haobo Wang, Shenzhi Yang, Zhengqing Zang, Chenglong Wang"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14001v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

On-policy self-distillation (OPSD) uses a self-teacher conditioned on privileged information to turn the sparse outcome signal of reinforcement learning with verifiable rewards (RLVR) into dense token-level supervision. Yet the teacher's advantage may depend on information unavailable to the student at inference, raising a central question: which privileged changes are worth distilling? We use cross-problem recurrence as an empirical cue for potentially reusable guidance. Comparing the representation shifts induced by full solutions and compact hints, we find that hint-induced shifts are more concentrated and directionally consistent across problems, and yield more sustained downstream gains despite revealing less information. Motivated by this association, we propose Privileged Representation Isolation for On-Policy Self-Distillation (PreSO). At the source, PreSO uses compact hints to limit the solution-specific detail entering the privileged shift. At the target, it estimates a leading low-rank subspace from shifts pooled across related problems, projects the privilege-induced correction onto this subspace, and adds it to the student's unprivileged representation to form the representation-level distillation target. The selected subspace serves as an operational proxy for recurring structure, rather than a guaranteed separation of transferable and instance-specific information. On five competition-level mathematics benchmarks, PreSO consistently outperforms strong baselines across Qwen3-1.7B, 4B, and 8B, improving average accuracy over the base model by 6.8, 9.0, and 10.0 points. Beyond peak accuracy, PreSO attains the highest final-checkpoint average at every model scale, with improvements that persist through the end of training.
