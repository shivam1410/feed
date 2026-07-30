---
title: "Projection Pursuit CPCANet for Domain Generalization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.22117"
authors: ["Yu-Hsi Chen", "Abd-Krim Seghouane"]
date: "2026-07-23T20:00:00.000Z"
score: 60
guid: "2607.22117"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.22117.png"
generated: "2026-07-30T19:07:10+05:30"
---

Domain Generalization (DG) aims to learn representations robust to distribution shifts. Recent geometric alignment methods, such as CPCANet, extract domain-invariant structures through batch-wise Common Principal Component Analysis (CPCA). However, CPCANet suffers from rank-deficient covariance estimation due to the small-sample-size issue in mini-batch training. To address this limitation, we propose Projection Pursuit CPCANet (PP-CPCANet), a covariance-free framework that learns a global orthogonal basis on the Stiefel manifold and jointly optimizes it with network parameters via the Cayley transform. We further introduce a symmetry-breaking detached-median PP dispersion objective to extract common principal components (CPCs) with dense and robust optimization signals. Experiments on four DG benchmarks show that PP-CPCANet achieves SOTA performance while maintaining stable training.
