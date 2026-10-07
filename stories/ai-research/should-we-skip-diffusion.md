---
title: "Should We Skip Diffusion?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07002"
authors: ["Yiping Ji, James Martens, Simon Lucey"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.07002v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Diffusion models learn semantic representations while generating images. In the Decoupled Diffusion Transformer (DDT), a condition encoder provides features that guide a velocity decoder in denoising. To enable effective denoising at all noise levels, these features must capture both high-level abstract structures and low-level details. However, skip/residual connections in the encoder allow shallow features to bypass successive transformations, which may limit progressive abstraction, or at least make it difficult to disentangle different levels of abstraction. We propose DDT-RFE, which removes the residual connections around the Self-Attention and MLP operations in each encoder block while maintaining stable training. To retain the information that abstraction discards but that the decoder still needs, we fuse the input patch embedding with intermediate and final encoder features to form the encoder output. The decoder thus has access to information from multiple encoder depths, while each encoder block is able to learn more abstract representations. DDT-RFE achieves overall improvements over DDT across visual understanding tasks, including image classification, semantic segmentation, object discovery, and semantic correspondence, while using fewer encoder blocks. It also achieves a lower FID for image generation on ImageNet.
