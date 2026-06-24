---
title: "Data Augmentation: A Fourier Analysis Perspective"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24418"
authors: ["Behrooz Tahmasebi, Melanie Weber, Stefanie Jegelka"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24418v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24418v1 Announce Type: new Abstract: Data augmentation is a simple and model-agnostic approach for exploiting known invariances in learning problems. Given a group acting on the input space, one augments the training set with transformed copies of each sample. Because it exploits symmetries without modifying the underlying learning algorithm, data augmentation can be applied broadly across learning methods. However, this universality comes at a computational cost: when the group is large, full group-sized augmentation quickly becomes computationally infeasible. This raises a fundamental question: Can partial data augmentation achieve the same statistical benefits as full augmentation in terms of generalization and sample complexity? We develop a general framework for investigating this question using Fourier analysis and the representation theory of finite groups. We show that, for a broad class of classical learning problems, partial data augmentation based on a randomly sampled subset of group elements achieves the same minimax rates as full augmentation, up to an approximation error that vanishes as the subset size increases. Our results provide a theoretical explanation for why partial augmentation can retain the statistical benefits of full augmentation despite enforcing symmetry only approximately, and shed light on a recently raised question in learning with symmetries: whether statistically optimal learning under general group invariances can be achieved using computationally scalable methods. Moreover, we prove a complementary impossibility result: enforcing exact invariance via data augmentation requires averaging over the entire group, and cannot be achieved by any strict subset when the hypothesis space is sufficiently expressive. Together, these results provide a unified perspective on full and partial data augmentation, as well as exact and approximate symmetry enforcement.
