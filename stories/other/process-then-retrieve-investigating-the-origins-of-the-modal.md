---
title: "Process then Retrieve: Investigating the Origins of the Modality Gap in Vision-Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.09897"
authors: ["Arpita Shanbhag, Julia Tran, Dhruv Mandala, Ayda Sultan"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.09897v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Understanding the origins of the modality gap in vision language models remains a significant challenge. This work investigates whether differences in information density between modality specific tokens at the embedding layer contribute to this imbalance. We show that text tokens enter the model with much lower semantic density than visual tokens, driving early layers to focus on processing text representations before combining them with vision. Through mechanistic analysis, we demonstrate that replacing vision token positions with their semantically closest text token counterparts elicits increased attention to those positions in early layers. These findings provide a foundation for addressing the modality gap and provide insight to improve multimodal reasoning in VLM architectures.
