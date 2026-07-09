---
title: "Geometric Self-Distillation for Reasoning Generalization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06855"
authors: ["Josip Juki\\'c, Ivan Titov"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.06855v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06855v1 Announce Type: new Abstract: On-policy distillation is a practical post-training recipe for large language models, supplying dense teacher supervision on the student's own trajectories. In privileged-context self-distillation, teacher and student are the same model conditioned on the same prefix, but the teacher also sees a hint or the full solution trace. This makes supervision abundant but harder to trust: the teacher can be confident about continuations its privileged view makes obvious but the student cannot yet justify. The distillation pull is strongest where teacher and student disagree most, and over many updates it accumulates into drift that degrades out-of-distribution (OOD) reasoning. We introduce GeoSD, a geometric self-distillation objective that treats this drift as movement in the student's predictive behavior and counters it in two complementary ways. A Hellinger loss scales each teacher preference by the overlap the student already shares with it, attenuating the pull on tokens the student cannot yet support. Since these pulls still compound over training, a proximal term penalizes how far the student's predictions drift from a recent checkpoint, measured as a Fisher-Rao distance. Both are distances in the same geometry of next-token distributions, and a natural-gradient update takes its steps in that geometry rather than in parameter space. Across mathematical reasoning benchmarks and three model families, GeoSD preserves the in-distribution gains of self-distillation while improving average OOD accuracy by 5.7-8.6 points over the base model, with gains holding across model scales from 1.7B to 32B. Analyzing why standard matching fails out of distribution, we find it wins agreement with the teacher by draining mass from alternatives at high-entropy states, resulting in confident agreement on wrong answers, whereas GeoSD keeps those alternatives in reach.
