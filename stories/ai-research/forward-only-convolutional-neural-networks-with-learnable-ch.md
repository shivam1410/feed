---
title: "Forward-Only Convolutional Neural Networks with Learnable Channel-Class Assignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09928"
authors: ["Mohammadnavid Ghader, Saeed Reza Kheradpisheh, Bahar Farahani, Mahmood Fazlali"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.09928v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09928v1 Announce Type: new Abstract: The Forward-Forward (FF) algorithm offers a biologically inspired alternative to backpropagation by replacing gradient-based credit assignment with local, forward-only objectives. While recent extensions have adapted FF to convolutional neural networks (CNNs), existing formulations rely on static channel-class partitions and struggle to perform effectively in complex tasks. In this work, we introduce a learnable channel-class assignment mechanism that enables adaptive, data-driven specialization of convolutional channels, supported by entropy and orthogonality regularization to promote learning performance. We further propose a loss-aware layer contribution strategy that adaptively weights intermediate-layer predictions based on their validation performance, enhancing the effectiveness of forward-only inference. Integrated into residual CNNs, the proposed method achieves consistently superior performance across CIFAR-10, CIFAR-100, and Tiny-ImageNet compared to existing similar forward-only methods. Notably, it establishes new state-of-the-art performance among FF-based models, substantially narrowing the gap with backpropagation. These findings demonstrate that introducing learnable channel specialization and layer contribution weighting significantly enhances the representational capacity of forward-only learning in deep CNNs.
