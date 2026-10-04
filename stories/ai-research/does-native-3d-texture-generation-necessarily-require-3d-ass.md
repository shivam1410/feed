---
title: "Does Native 3D Texture Generation Necessarily Require 3D Assets for Training?"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.34621"
authors: ["Jiangshan Wang", "Zeqiang Lai", "Jiayi Guo", "Xin Yang", "Xin Huang", "Jiarui Chen", "Ziheng Ouyang", "Chunchao Guo", "Xiangyu Yue"]
date: "2026-09-27T20:00:00.000Z"
score: 48
guid: "2609.34621"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.34621.png"
generated: "2026-10-04T19:07:43+05:30"
---

Native 3D texture generation synthesizes colors directly in 3D space for a given geometry, conditioned on multi-view reference images. It is generally believed that training such models requires large-scale, high-quality real 3D asset data, whose acquisition remains a long-standing and challenging problem. In this work, we propose Tex-Zero, demonstrating that a high-fidelity native 3D texture generation framework can be trained without 3D assets. Our key observation is that only high-quality and fine-grained color information is essential for 3D texture training, while the required geometric information is less critical and can be manually constructed rather than obtained from real 3D assets. This finding makes it possible to transform abundant, high-quality 2D images into effective training samples for 3D texture generation. Specifically, we convert high-quality 2D images into 3D training samples by representing each image as a plane in 3D space and applying patch-wise random rotations and aggregation to construct complex geometric structures. Using these constructed image data, we train the Tex-Zero VAE, which can reconstruct real 3D assets with high quality despite never observing them during training. Building upon the Tex-Zero VAE, we train the Tex-Zero DiT also exclusively on the constructed image data, where the conditioning 2D multi-view images are transformed into planes in 3D space and also encoded by the Tex-Zero VAE, thereby reducing the representation gap and improving generation quality. Extensive experiments show that Tex-Zero generates high-fidelity 3D textures with fine-grained details solely using images as training data, offering a promising perspective on the data paradigm for scaling 3D texture generation.
