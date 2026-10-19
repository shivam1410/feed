---
title: "A Feature Selection Layer Approach for Multi-Class Classification on Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22898"
authors: ["Jo\\~ao Pedro Silveira e Silva, M\\'arcio Dorn, Bruno Iochins Grisci"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.22898v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

In the age of data-driven decision-making, deep learning models have become powerful tools for uncovering patterns and making predictions that influence many aspects of society. However, their broader adoption in scientific and business applications is often limited by a lack of interpretability. Feature weighting methods, which assess the relevance of individual features, are among the most widely studied approaches for improving interpretability. While post hoc techniques have advanced significantly, especially in modeling nuanced relationships between features and labels in multiclass problems, embedded methods typically fall short in this regard. Embedded techniques integrate feature relevance learning directly into the model training process, but they are often unable to capture label-specific relationships. To address the limitation, we propose multiple extensions to the Feature Selection Layer, an embedded feature weighting mechanism for neural networks. Through extensive experimentation, we identify the most effective extension and benchmark it against established feature weighting methods. Our results show that the proposed method matches existing techniques in identifying globally relevant features and outperforms them in capturing label-specific relevance. By leveraging the internal dynamics of the trained neural network, it reveals how individual features contribute to the prediction of specific labels, requiring no post-processing beyond the training process.
