---
title: "Self-Distillation with Verbal Regularization"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.16354"
authors: ["Jiazheng Li", "Yawei Li", "Junru Lu", "Zhenyi Shen", "Di Yin", "Lin Gui", "Xing Sun", "David Rügamer", "Xinpeng Wang", "Yulan He"]
date: "2026-10-11T20:00:00.000Z"
score: ""
guid: "2610.16354"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.16354.png"
generated: "2026-10-14T19:00:21+05:30"
---

On-policy self-distillation (OPSD) trains a large language model using supervision from a teacher instantiated from the same model as the student. The teacher is conditioned on privileged information (PI), such as verified solutions. The student, which does not observe PI, learns from the teacher's next-token distributions along its own sampled responses. However, PI can bias supervision toward shortcut reasoning with limited verification or reconsideration, accompanied by a sharp drop in the entropy of the output distribution. To address this challenge, we introduce self-distillation with verbal regularization (VRSD), which uses system prompts to regulate how the teacher uses PI, thereby encouraging rethinking and exploration to counteract premature commitment. Theoretically, we model prompting as attenuating the influence of PI on the teacher distribution and derive conditions for entropy preservation. Across three models and four tasks, VRSD improves Pass@1 over OPSD in 11 of 12 model-task settings, by 3.9 percentage points on average, while generally maintaining higher token entropy.
