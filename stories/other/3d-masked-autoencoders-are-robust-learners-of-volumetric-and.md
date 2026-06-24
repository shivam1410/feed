---
title: "3D Masked Autoencoders are Robust Learners of Volumetric and Multimodal Cellular Representations for Microscopy"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23964"
authors: ["Amirhossein Kardoost, Lion Gleiter, Tingying Peng, Carsten Marr"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23964v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23964v1 Announce Type: new Abstract: Self-supervised learning in fluorescence microscopy often relies on 2D projections, despite the inherently three-dimensional nature of cells. We present a systematic comparison of 2D and 3D masked autoencoders (MAE-2D vs. MAE-3D) on volumetric microscopy data. Under matched architectures and training protocols, MAE-3D consistently outperforms 2D max-projection and slice-based variants on downstream single-cell tasks. We further align visual representations with a pretrained protein language model (ESM2) and show that cross-modal supervision yields larger gains for volumetric models. Channel cross-attention and frequency-domain regularization are critical for leveraging 3D spatial context. On a protein--protein interaction task, MAE-3D achieves a ROC--AUC of 0.865, outperforming prior methods by up to +0.025. For protein localization, our best 3D model attains state-of-the-art AUC$_{\text{micro}}$ (0.952) and F1$_{\text{micro}}$ (0.742), improving over previous approaches by +0.003 and +0.010 absolute, respectively. Overall, these results demonstrate the advantages of native 3D modeling and multimodal alignment for representation learning in single-cell microscopy.
