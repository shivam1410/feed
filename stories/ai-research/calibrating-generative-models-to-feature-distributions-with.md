---
title: "Calibrating Generative Models to Feature Distributions with MMD Finetuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19496"
authors: ["Nathaniel L. Diamant, Brian L. Trippe"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19496v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19496v1 Announce Type: new Abstract: Generative models can produce individually plausible samples while deviating substantially from a target set in the distribution of key features. For example, a model pretrained on broad drug-like chemical space may generate molecules whose molecular features differ from those of a therapeutic class of interest, such as known antibiotics. Correcting such distributional miscalibration is challenging: direct finetuning on the target set can overfit and does not control which features are matched. To fill this gap, we introduce kernel Calibrating Generative Models (kCGM). kCGM minimizes a maximum mean discrepancy (MMD) between generated and target feature distributions using an unbiased score-function estimator, with KL regularization to remain close to the pretrained model. On a target set of 174 antibiotics, direct finetuning sacrifices chemical validity for feature-distribution matching, whereas kCGM improves target feature matching while increasing validity. We further demonstrate kCGM in protein and DNA generation tasks, showing it can adapt autoregressive, continuous-space diffusion, and discrete diffusion models using only feature-level supervision. Code is available at https://github.com/smithhenryd/cgm.
