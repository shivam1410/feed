---
title: "InfiniSplat: Implicit Gaussian Decoding for Large-Baseline Monocular View Synthesis"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.02437"
authors: ["Jiawei Wang", "Hao Yu", "Yongzhen Hu", "Xinyi Yang", "Tao Ni", "Xin Zhan", "Junbo Chen", "Xiaowei Zhou", "Ruizhen Hu", "Sida Peng"]
date: "2026-08-02T20:00:00.000Z"
score: 75
guid: "2608.02437"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.02437.png"
generated: "2026-08-05T20:00:21+05:30"
---

Single-image feed-forward 3D Gaussian Splatting (3DGS) aims to directly generate a renderable 3D scene representation from one input image, avoiding the cost of multi-view capture and per-scene optimization. However, existing methods are often constrained by a pixel-aligned representation, where Gaussians are predicted from fixed image-grid locations. Such pixel-aligned primitives can produce promising nearby-view renderings, but they remain weakly coupled to underlying scene surfaces and struggle to preserve coherent structures under large viewpoint shifts. We present InfiniSplat, a feed-forward single-image 3DGS framework that moves from a pixel-aligned representation toward a surface-aligned representation. InfiniSplat constructs this representation by first using geometry-guided sampling to place 2D supports according to depth-induced local surface structure, and then applying a query-conditioned implicit decoder to predict Gaussian attributes from the image features queried at these supports.By grounding support locations in geometry while decoupling Gaussian prediction from fixed pixel centers, InfiniSplat produces Gaussian layouts that better follow scene surfaces and reduce scattered primitives caused by grid discretization.Across multiple cross-dataset NVS evaluations, InfiniSplat achieves state-of-the-art performance compared with single-image feed-forward baselines, and demonstrates zero-shot generalization from Hypersim indoor synthetic training to complex open-world scenes.Project page: https://zju3dv.github.io/InfiniSplat.
