---
title: "Mitigating Sequential Reappearance in Diffusion Data-Point Unlearning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25166"
authors: ["Donghyun Kim, Taehyuk Lee, Jinyeong Kim, Youngmin Oh, Dohyeong Kim, Jaehyuk Ryu, Sangwoo Hong"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.25166v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25166v1 Announce Type: new Abstract: Diffusion data-point unlearning is typically evaluated immediately after each deletion, even though subsequent requests may repeatedly update the same model. We identify sequential reappearance, a failure mode in which an instance that is initially judged to be forgotten later returns to the memorized regime without reuse of the deleted data or adversarial fine-tuning. To capture this behavior, we introduce a target-level evaluation protocol that tracks whether each target is forgotten immediately, remains forgotten at the end of the sequence, or reappears during subsequent deletions. We further find that targets that later reappear exhibit sharper local denoising-loss geometry after deletion than targets that remain forgotten.
