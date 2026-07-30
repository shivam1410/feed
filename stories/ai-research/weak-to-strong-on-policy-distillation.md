---
title: "Weak-to-Strong On-Policy Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26246"
authors: ["Fangxu Yu, Zinan Lin, Xiaodong Liu, Weijia Xu, Michael Xu, Tianyi Zhou, Jianfeng Gao"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2607.26246v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26246v1 Announce Type: new Abstract: On-policy distillation (OPD), which aligns a student with the teacher's token-level distribution on the student's own rollouts, is an effective paradigm for transferring capabilities across LLMs. Prevailing approaches assume a teacher at least as capable as the student: they either distill a larger model into a smaller one, which fails at the frontier where no larger teacher exists, or consolidate multiple domain experts trained from a shared base, which requires costly training at the student's scale. We introduce Weak-to-Strong On-Policy Distillation (W2S-OPD), a simple yet effective OPD framework that improves the strong student by distilling from multiple weak models. W2S-OPD constructs a proxy teacher in logit space from a contrast pair of a positive and a negative model, both smaller than the student and cheap to obtain. Their logit difference isolates the capability direction, which is added to the student's own base model, yielding a proxy teacher that couples this direction while staying distributionally adjacent to the student. The student then distills it by minimizing the per-token reverse KL on its own rollouts. We instantiate the contrast pair as i) a post-RL expert against its pre-RL initialization, isolating the skill RL instills, ii) a larger against a smaller base model, isolating the capability from scale, and iii) a small base model with correct versus wrong hints, isolating the instance-level direction toward the solution. Across four math and three code benchmarks, W2S-OPD outperforms OPD, enables the student to surpass the domain teacher, and keeps improving the student even when every supervision source is weaker. Analysis shows different contrasts yield distinct signals: the post-RL and hint contrasts emphasize reasoning frameworks, while the scale contrast emphasizes the solving procedure. Our code will be available at https://github.com/Yu-Fangxu/W2S-OPD.
