---
title: "Rethinking Reverse KL as Adaptive Entropy Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14685"
authors: ["Shizhen Li, Zhiyu Shen, Yuyin Lu, Yunhe Pang, Jielin Song, Yanghui Rao, Fu Lee Wang"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.14685v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14685v1 Announce Type: new Abstract: Knowledge distillation (KD) is widely used to transfer the capabilities of large language models (LLMs) to smaller students, but existing objectives often struggle to balance faithful imitation and robust generation. In particular, existing methods mainly combine FKL and RKL, overlooking that RKL itself provides a mechanism for adjusting the student's imitation strength. Motivated by this, we revisit on-policy Reverse Kullback-Leibler (RKL) distillation and decompose its objective into a teacher-fitting term and a student-entropy term, without introducing an explicit FKL branch. We show theoretically that the token-level optimal student distribution corresponds to a tempered variant of the teacher distribution, where the adaptive weight controls the trade-off between mode-seeking and uncertainty preservation. Guided by this insight, we propose \textbf{Adaptive Entropy Distillation (AED)}, which uses the teacher's entropy to dynamically calibrate token-level imitation strength. Experiments on instruction-following and mathematical reasoning benchmarks demonstrate that AED achieves superior overall performance and generally improves teacher--student distributional and entropy alignment.
