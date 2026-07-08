---
title: "Auditing of Unlearning Algorithms"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05898"
authors: ["Sahasrajit Sarmasarkar, Anastasia Koloskova, Sanmi Koyejo"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.05898v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05898v1 Announce Type: new Abstract: Evaluating whether unlearning algorithms truly remove training data influence remains an open challenge. We propose a practical auditor that computes data-dependent lower bounds on the unlearning parameter $\varepsilon$ using membership inference attacks. Evaluating multiple unlearning algorithms, we find a sharp separation: algorithms with rigorous guarantees, such as model clipping and rewind-to-delete, achieve very small $\varepsilon$ bounds that do not falsify their unlearning guarantees, whereas empirical methods such as Hessian-based unlearning, interleaved ascent-descent, ascent on the forget set, and fine-tuning on the retain set exhibit large bounds, indicating poor unlearning. Our auditor provides a practical tool for empirically falsifying unlearning claims through a hypothesis-testing framework, and we validate it on CIFAR-100 and Shakespeare text.
