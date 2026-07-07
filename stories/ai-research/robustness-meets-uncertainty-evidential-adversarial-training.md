---
title: "Robustness Meets Uncertainty: Evidential Adversarial Training for Robust Selective Classification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03075"
authors: ["Nicolas Sournac, Ahmed Baha Ben Jmaa, Bertrand Braeckeveldt"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.03075v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03075v1 Announce Type: new Abstract: Safety-critical applications require classifiers that are both robust and reliable. Adversarial training is a widely adopted defense for improving robustness in deep neural networks; however, its effect on the reliability of predictive uncertainty remains underexplored. We investigate this gap through the lens of selective classification, which has rarely been systematically analyzed alongside adversarial robustness. We introduce a unified benchmark for the robustness-uncertainty trade-off. It standardizes architectures, augmentations, threat models, and evaluation metrics across clean, adversarial, and common-corruption settings. Across a wide range of state-of-the-art adversarial training methods, we uncover a recurring failure mode: several approaches improve robust accuracy while degrading uncertainty ranking, leading to poorer selective behavior. To address this, we propose Evidential Adversarial Training (EV-AT), which models uncertainty through a Dirichlet distribution and combines (i) an evidence-based loss promoting clean accuracy and reliable uncertainty with (ii) a robust evidence-alignment loss matching clean and adversarial predictions in log Dirichlet-parameter space. Extensive experiments show that EV-AT shifts the Pareto frontier of robustness-uncertainty trade-offs beyond prior state-of-the-art adversarial training methods. Our source code is publicly available at https://github.com/NicolasSournac/Robustness_Meets_Uncertainty.EV-AT.
