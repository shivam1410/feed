---
title: "Enhancing deep learning models for time series classification via knowledge distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06796"
authors: ["Javidan Abdullayev, Maxime Devanne, Jonathan Weber, Germain Forestier"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.06796v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06796v1 Announce Type: new Abstract: Deep learning has achieved remarkable success in various domains including time series analysis, computer vision and natural language processing. However, high computational and memory demands of state-of-the-art architectures pose challenges for deployment in resource-limited environments. Knowledge Distillation (KD) addresses this by transferring knowledge from a large teacher model to a smaller, more efficient student model while maintaining competitive performance. In this work, we investigate the effectiveness of KD for Time Series Classification (TSC) across three architectures: the classical Fully Convolutional Network (FCN), the convolutional Inception model and the transformer-based ConvTran model. We evaluate our approach on UCR Archive, the largest benchmark repository of time series datasets, by modifying architectural components such as convolutional filters, Inception modules and attention heads across the three architectures. Our results consistently show that KD most effectively benefits student models of intermediate complexity across all three architectures, with the distilled FCN student reducing parameters by a factor of 38, the distilled Inception student achieving nearly the same performance as the teacher with 42% fewer parameters and the distilled ConvTran student with 2 attention heads showing the most significant improvement through distillation. To encourage further research and reproducibility, we provide our implementation at https://github.com/MSD-IRIMAS/KD-4-TSC.
