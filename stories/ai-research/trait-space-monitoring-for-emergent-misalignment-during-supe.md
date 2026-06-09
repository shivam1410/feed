---
title: "Trait-space Monitoring for Emergent Misalignment During Supervised Finetuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07631"
authors: ["Huy Nghiem, Sy-Tuyen Ho, Sarah Wiegreffe, Hal Daum\\'e III"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.07631v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07631v1 Announce Type: new Abstract: Emergent misalignment (EM) occurs when narrow finetuning causes a model to behave dangerously outside the finetuning task. Standard training signals can miss this shift, making reliable detection costly if it depends on repeated behavioral evaluation. We ask whether emergent misalignment can instead be detected from internal representations during finetuning. Using seven alignment-relevant traits encoded as linear directions in activation space, we track representational drift across training checkpoints in four open-source 7-9B LLMs. EM-relevant drift concentrates on a low-dimensional axis that explains 65.5% of the variance, revealing a geometric signature in the studied regime. A low-overhead monitor built on this drift profile detects dangerous checkpoints with 2.2% false negative rate, 2.9% false positive rate, and 0.990 AUROC on held-out perturbation types, outperforming unsupervised PCA and SAE baselines. Stress tests on two 14B models, longer finetuning runs, and misaligned starting points identify key deployment boundaries. These results position trait-space monitoring as a practical complement to behavioral evaluation for EM detection during LoRA-based finetuning, while showing that deployment across substantially different regimes may require recalibration.
