---
title: "TempTPI: Informer-Based trajectory prediction for maritime vessels"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09840"
authors: ["Kevin Ferneding, Veronika Lietavcova, Aleksandra M. Blachowiak, Peder Heiselberg"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.09840v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09840v1 Announce Type: new Abstract: Accurate long-term trajectory prediction for maritime vessels is essential for safety and logistical efficiency. While deep learning models, particularly Transformers, have shown promise in processing Automatic Identification System (AIS) data, they often struggle with the quadratic computational complexity of self-attention and the loss of accuracy over extended forecasting horizons. This study proposes TempTPI, a novel prediction framework that integrates an Informer-based encoder with a multi-channel temporal encoding mechanism. The Informer architecture leverages a ProbSparse self-attention mechanism to reduce computational overhead and focus on the most significant dependencies, while the temporal encoder utilizes Fourier-like frequency expansions to capture cyclic patterns (hourly, daily, and seasonal) in vessel behavior. We evaluate our model against the state-of-the-art TPTrans architecture using AIS data from Danish waters. Experimental results demonstrate that TempTPI consistently outperforms existing methods across prediction windows of 1 to 5 hours. Notably, at a 5-hour horizon, the proposed model achieves a 55% improvement in Mean Squared Error (MSE), offering a robust solution for long-range maritime situational awareness.
