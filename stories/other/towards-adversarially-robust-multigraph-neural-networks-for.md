---
title: "Towards Adversarially Robust Multigraph Neural Networks for Financial Crime Analysis"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31718"
authors: ["Dennis Heijmans, H. \\c{C}a\\u{g}r{\\i} Bilgi, Rui Wang, Kubilay Atasu"]
date: "Mon, 26 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31718v1"
image: ""
generated: "2026-10-26T19:00:28+05:30"
---

Financial transaction networks are naturally represented as multigraphs, where repeated transactions between the same pair of accounts are modeled as distinct edges. Recently proposed multigraph neural network architectures leverage this structure explicitly to achieve a strong performance on anti-money laundering (AML) tasks. However, their robustness to adversaries that manipulate transaction structures to evade detection remains largely unexplored. We present the first scalable framework for structural attacks and adversarial training of multigraph neural networks using node-edge incidence matrices, adapting projected gradient descent and projected randomized block coordinate descent methods to optimize structural perturbations over such matrices. We further introduce a cycle-based regularizer that penalizes changes in the global counts of directed 2- and 3-cycles, providing a structural measure of attack plausibility. Experiments on synthetic pattern-detection and realistic AML datasets show that our learned attacks substantially outperform non-learnable perturbation baselines in reducing detection performance (PR-AUC), while adversarial training consistently improves robustness against these attacks. These results demonstrate that multigraph neural networks are vulnerable to learned structural attacks and that adversarial training provides an effective defense. Our code is available at https://github.com/denheijmans/robust_multignn.
