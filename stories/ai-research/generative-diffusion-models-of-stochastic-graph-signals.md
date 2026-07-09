---
title: "Generative Diffusion Models of Stochastic Graph Signals"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06833"
authors: ["Yi\\u{g}it Berkay Uslu, Samar Hadou, Sergio Rozada, Shirin Saeedi Bidokhti, Alejandro Ribeiro"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06833v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06833v1 Announce Type: new Abstract: Sampling stochastic signals supported on a graph underlies many graph machine learning tasks, including recommender systems, forecasting in financial markets, and wireless network optimization. In these settings, the target signals are realizations of unknown conditional distributions. However, prevailing approaches rely mostly on intricate, application-tailored designs that often regress to a conditional mean instead of sampling from the conditional law. This paper unifies such problems as conditional graph signal generative modeling and tackles them with a single denoising diffusion framework. We learn a reverse diffusion process, parametrized by graph neural networks (GNNs), that draws graph signals conditioned directly on the graph topology and on node-feature side information. The reverse process is realized by a novel architecture, the U-Graph Neural Network (U-GNN), which generalizes the image-convolutional U-Net to graph-structured signals. The U-GNN performs multi-resolution encoder--decoder processing in which pooling and unpooling reduce to a learned node selection, expressed by nested selection matrices, and a zero-padded lifting of coarse signals back to the full node set. The graph convolutions are carried out on the original graph, with a stride that sets their hop reach, so the U-GNN bypasses explicit graph coarsening at every resolution. We demonstrate our method on two generative tasks: stock price forecasting and optimal wireless resource allocation, with extensive numerical results in both domains.
