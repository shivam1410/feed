---
title: "On-Policy Distillation with Negative-Policy Rollouts"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.07874"
authors: ["Jaehui Hwang", "Dongyoon Han", "Sangdoo Yun", "Byeongho Heo"]
date: "2026-10-05T20:00:00.000Z"
score: 75
guid: "2610.07874"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.07874.png"
generated: "2026-10-08T19:08:02+05:30"
---

On-policy distillation (OPD) has been widely studied as a post-training method in which a student model obtains token-level supervision from a stronger teacher on its own rollouts. Recent studies have improved OPD through alternative distillation reward formulations and teacher configurations, while the objective of distillation remains centered on mimicking the teacher. However, when a stronger teacher has limited distributional overlap with the student, such positive guidance can provide insufficient learning signals. In this work, we introduce Negative-Policy OPD (NP-OPD), which complements teacher supervision with rollouts from a lower-performing, lower-capability negative policy that serves as a negative reference for the student. Rather than modifying the distillation reward formulation, NP-OPD introduces the negative policy at the rollout stage, continuously supplying tokens preferred by the negative policy over the teacher so that they remain exposed to teacher supervision throughout training. This provides an explicit negative signal through negative-policy rollouts while preserving the positive teacher supervision used in OPD. Through extensive experiments, we show that NP-OPD improves OPD across model scales, generation modes, reasoning domains, and different OPD variants. Furthermore, our analyses show that NP-OPD effectively suppresses tokens preferred by the negative policy over the teacher and moves the student away from the negative policy. These results support our design of introducing negative signals through negative-policy rollouts and provide new insight into the role of the rollout policy in OPD. Code will be available at https://github.com/naver-ai/np-opd.
