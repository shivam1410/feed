---
title: "On the Limits of Maximal Coding Rate Reduction for Out-of-Distribution Generalisation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21001"
authors: ["Menghui Zhou, Gaoshan Bi, Vitaveska Lanfranchi, Po Yang"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.21001v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21001v1 Announce Type: new Abstract: Substantial efforts have been devoted to making deep learning objectives, representations, and architectures interpretable, with the goal of improving the safety, robustness, and generalisation of learning systems in diverse real-world applications. The recently proposed maximal coding rate reduction ($\mathrm{MCR}^{2}$) offers a promising information-theoretic framework for learning structured, discriminative representations of class-wise submanifolds and has inspired interpretable white-box architectures. However, we observe that $\mathrm{MCR}^{2}$ can completely fail under distribution shift, motivating our study of its out-of-distribution (OOD) generalisation limits. We establish two limitations of $\mathrm{MCR}^{2}$ for OOD generalisation. First, the $\mathrm{MCR}^{2}$ objective alone can admit complete prediction failure: a representation based entirely on unstable environmental features can achieve the global coding optimum yet fail completely after correlation reversal, despite an available perfectly stable feature. This exact-optimum example includes test inputs that cannot occur during training. Even when every possible test input can also occur during training, coding quality can be arbitrarily close to optimal while prediction error is arbitrarily close to 100%. Second, directly incorporating the invariance principle underlying widely successful invariant risk minimisation (IRM) and risk extrapolation (REx) does not eliminate this failure. The failing representation admits the same optimal coding operator across training environments, showing that shared coding optimality does not ensure stable prediction. Reliable OOD guarantees for $\mathrm{MCR}^{2}$ therefore require additional new assumptions or learning principles that establish stable predictive relationships across environments.
