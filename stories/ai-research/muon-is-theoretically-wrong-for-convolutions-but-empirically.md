---
title: "Muon Is Theoretically Wrong For Convolutions, But Empirically Effective"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07103"
authors: ["Thibaut Boissin (IRIT), Thomas Massena (IRIT, DTIPG - SNCF, UT3), Mathieu Serrurier (IRIT), Franck Mamalet"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.07103v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Muon, an optimizer known for its efficiency, has a clear interpretation for matrix-valued updates, but convolutional kernels are stored as four-dimensional tensors. Standard implementations reshape these tensors into matrices, a shortcut which breaks the theoretical understanding behind Muon. To investigate this, we formalize the corresponding optimization objective directly in convolutional operator geometry and introduce Convolutional Newton-Schulz (Conv-NS), which approximates the polar factor in this geometry while preserving kernel support. When applied in fast training experiments, Conv-NS and reshape-based Muon are both computationally efficient and achieve comparable accuracy on CIFAR-10 and ImageNet classification tasks. However, as one could expect a theoretically aligned Conv-NS to outperform reshape-based Muon, we investigate this mismatch between practice and theoretical understanding, with the hypothesis that exact convolutional orthogonalization may overconstrain updates. These findings highlight Muon's strong practical performance while opening directions for its further development on convolutions. Our code is publicly available at \href{https://github.com/thib-s/muonconv-cifar10-airbench}{github conv-muon}.
