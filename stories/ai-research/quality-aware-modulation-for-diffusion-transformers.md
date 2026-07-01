---
title: "Quality-Aware Modulation for Diffusion Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.30934"
authors: ["Luke Budny, Yuhong Guo, Kevin Cheung"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.30934v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.30934v1 Announce Type: new Abstract: Modern text-to-image diffusion models, such as diffusion transformers (DiT), rely on timestep or prompt embeddings to modulate the strength of the denoising process in each timestep. While this modulation communicates the current noise level, it does not provide any quality-aware information, which can lead to generated images that are unaligned, visually inconsistent, and lacking in fidelity. In this paper, we propose the Quality Representation Module (QRM), a lightweight transformer module that learns a quality-aware representation based on existing model inputs, and produces a set of vectors $M_{qrm}$. These vectors adjust the adaptive LayerNorm modulation within the DiT transformer blocks, thereby injecting a quality-sensitive signal into the denoising parameters. The QRM introduces no significant changes to the sampling schedule or diffusion backbone. Experiments include ablations on QRM training losses and architectures, as well as empirical results demonstrating consistent image quality improvements over baseline DiT-based models.
