---
title: "Mini-batch Noise Lowers Sharpness via Dominant-Subspace Fluctuations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.23012"
authors: ["Junho So, Dongwook Shin"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2607.23012v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.23012v1 Announce Type: new Abstract: During SGD training, the gradients often align strongly with the dominant subspace spanned by the top-$k$ eigenvectors of the Hessian of the loss. While this seems to naturally imply that loss reduction mainly occurs within this space, prior work has shown that updates within this dominant subspace make no meaningful progress in reducing the loss. In this work, we argue that the dominant subspace is better understood not as the main space for loss reduction, but as a key subspace for explaining the sharpness dynamics of mini-batch SGD. To explain the role of the dominant subspace in reducing top-$k$ sharpness, we show how the averaged gradient over fluctuations in the dominant directions produces a sharpness correction term, and derive a sharpness correction term induced by mini-batch noise in the dominant directions. Experimental results show that adding the derived correction term to GD brings the sharpness evolution of GD closer to that of SGD.
