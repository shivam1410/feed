---
title: "Breaking Adversarial Transferability in Fine-Tuned Speech Recognition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09109"
authors: ["Mojtaba Nafez, Aref Mousavi, Mohammad Ebrahim Mahdavi, Mobina Poulaei, Kiarash Kiani Feriz, Mohammad Hossein Rohban"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2610.09109v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Many organizations fine-tune publicly available pretrained Automatic Speech Recognition (ASR) models and deploy them in black-box settings, assuming limited access provides protection. We show this assumption is fragile: adversarial perturbations crafted on the public base model transfer effectively to fine-tuned target models, severely degrading performance and posing concerns for safety-critical applications. We propose TransferBreaker, a unified fine-tuning framework that suppresses adversarial transfer by integrating Base Adversarial Fine-Tuning, which restricts adversarial training to base-effective perturbations; Latent Jacobian Regularization, which enforces latent-space invariance by suppressing adversarially sensitive directions; and HybridGrad-AFT, which improves robustness against adaptive attacks by interpolating transferable perturbations from base and target gradients. We theoretically justify all components and evaluate TransferBreaker across three languages and four large ASR models, reducing adversarial WER from 92.6 to 27.8. Our code is publicly available at https://github.com/rohban-lab/TransferBreaker.
