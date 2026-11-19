---
title: "Which Tokens, in What Order, and How Fast? A Theoretical Analysis of On-Policy Distillation Objectives"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23397"
authors: ["Hubert Strauss, Liam Fowl, Noam Razin"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23397v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

On-policy distillation (OPD) trains a student language model to match a teacher model based on its own generations. When using OPD, one must choose whether to apply it at the sequence or token level and which divergence to minimize. However, despite the wide adoption of OPD in practice, the formal understanding of which OPD objective is appropriate for a given setting is limited. Toward addressing this gap, we theoretically analyze how the choice of OPD objective governs which tokens are prioritized, in what order, and how efficiently. Our analysis reveals that sequence-level OPD exhibits a future agreement bias, which myopic token-level objectives avoid. This bias induces a reverse learning order, in which sequence-level OPD first matches the teacher at later token positions, while at earlier positions it can favor tokens that are improbable under the teacher, and thus often undesirable. As for the choice of divergence, we prove that it strongly influences the amenability of OPD to gradient-based optimization. In particular, while the forward KL divergence enjoys a well-behaved objective landscape, other $f$-divergences, such as reverse KL, can suffer from vanishing gradients even when the student and teacher are far apart. Across language model post-training settings, we demonstrate the implications of these theoretical findings for which OPD objective is preferable, highlighting the importance of accounting for the interplay between the student, teacher, and task at hand.
