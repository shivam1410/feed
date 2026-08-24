---
title: "Lightweight Adaptive ReduNet via Hyperspherical Manifold Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20668"
authors: ["Zhenglin Huang, Qifa Yan, Bin Dai, Xiaohu Tang"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2608.20668v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20668v1 Announce Type: new Abstract: In recent years, a white-box neural network called ReduNet has been proposed, which employs the maximal coding rate reduction (MCR$^2$) principle to transform raw data into low-dimensional discriminative features via a forward layer-wise construction process. Unlike traditional deep networks that rely on backpropagation, ReduNet explicitly derives the parameters of each layer from the features of its preceding layer, offering a mathematically interpretable paradigm. However, this layer-wise construction often requires a large number of layers for the MCR$^2$ objective to reach a stable value, which increases the parameter storage of the unfolded module. To address this issue, we propose LA-ReduNet, a lightweight adaptive architecture that refines the layer-wise update rule and enables discriminative feature representations to be obtained with substantially fewer unfolded layers. Specifically, LA-ReduNet employs hyperspherical manifold learning and adaptive step sizes, thereby reducing by an order of magnitude the number of layers required for the MCR$^2$ objective to reach a stable value. Simulation results demonstrate that, while maintaining comparable classification accuracy, LA-ReduNet requires significantly fewer layers for the MCR$^2$ objective to reach a stable value. Remarkably, under the considered experimental settings, LA-ReduNet requires only approximately $1/29$ of the parameter storage of the unfolded ReduNet module for the MCR$^2$ objective to reach a stable value.
