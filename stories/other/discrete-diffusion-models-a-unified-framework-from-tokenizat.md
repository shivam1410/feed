---
title: "Discrete Diffusion Models: A Unified Framework from Tokenization to Generation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13431"
authors: ["Ye Yuan", "Weien Li", "Rui Song", "Zeyu Li", "Haochen Liu", "Xiangyu Kong", "Zixuan Dong", "Linfeng Du", "Zipeng Sun", "Weixu Zhang", "Jiaxin Huang", "Changjiang Han", "Yonghan Yang", "Zichen Zhao", "Xiuyuan Hu", "Haolun Wu", "Yankai Chen", "Fengran Mo", "Jikun Kang", "Bowei He", "Philip S. Yu", "Xue Liu"]
date: "2026-07-14T20:00:00.000Z"
score: ""
guid: "2607.13431"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13431.png"
generated: "2026-07-18T21:58:10+05:30"
---

Discrete denoising diffusion models (DDMs) have recently emerged as a compelling alternative to autoregressive (AR) modeling for discrete data, offering parallel generation and iterative global refinement capabilities. Unlike continuous diffusion, where the state space is fixed, DDMs are fundamentally shaped by how the discrete state space is constructed: the tokenization scheme, the vocabulary topology, and domain-specific structural alphabets. This work introduces a unified conceptual framework that views discrete diffusion models through the construction of the underlying discrete state space. Within this framework, existing formulations, including transition-matrix, masking/absorbing-state, and score/ratio-based approaches, emerge as different instantiations of a common design space. The framework further exposes common design trade-offs across training objectives, inference algorithms, scaling behavior, systems optimization, and evaluation protocols, suggesting several promising directions for future research.
