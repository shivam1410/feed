---
title: "A Multi-Branch Feature Fusion Approach for Health Misinformation Detection and Propagation"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00403"
authors: ["Mkululi Sikosana, Sean Maudsley-Barton, Oluwaseun Ajao"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.00403v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00403v1 Announce Type: new Abstract: This paper presents a multi-branch fusion framework for detecting and characterising the propagation of health misinformation in online social networks (OSNs). Grounded in the Elaboration Likelihood Model (ELM) and the Theory of Planned Behaviour (TPB), the model fuses transformer-based semantics with rhetorical cues, stance representations, and psychologically motivated proxies in a unified multi-task architecture. In addition to binary classification, we introduce the Cognitive Propagation Score (CPS), an interpretable post-hoc auxiliary score computed from psychologically motivated, text-derived cues capturing argument complexity, emotional intensity, and content-derived virality potential, to support diffusion-risk reasoning when engagement ground truth is incomplete or unavailable. Experiments on three benchmark datasets, Constraint, COVID--19\_FNIR, and Monkeypox, show strong classification performance, achieving ROC--AUC up to 0.9999 on COVID--19\_FNIR, while propagation-oriented ranking achieves near-perfect agreement when engagement-derived supervision is available (Monkeypox, Spearman's $\rho = 0.9952$) and similarly high ranking alignment under proxy-based supervision on COVID--19\_FNIR ($\rho = 0.9954$). Compared with representative literature baselines, the fusion model improves detection on Constraint and COVID--19\_FNIR, while Monkeypox remains more challenging, reflecting domain- and signal-specific differences. Ablation analysis further indicates that psychological and rhetorical branches provide complementary gains beyond semantic embeddings. Overall, the framework bridges cognitive theory and neural modelling to improve transparency and to support scalable misinformation monitoring, with future work required to validate CPS against human-centred diffusion judgements.
