---
title: "Latent-Foresight: End-to-End Learning Predictable Representations for Latent World Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.01942"
authors: ["Efstathios Karypidis", "Spyros Gidaris", "Nikos Komodakis"]
date: "2026-09-30T20:00:00.000Z"
score: 68
guid: "2610.01942"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.01942.png"
generated: "2026-10-04T19:07:43+05:30"
---

Predicting the future evolution of a scene is a fundamental capability for world modeling. Recent work has shown that operating in the feature space of Vision Foundation Models (VFMs) yields semantically rich representations that support diverse future scene understanding tasks. However, existing approaches rely on two-stage pipelines, where VFM features are first compressed using fixed dimensionality reduction (e.g., PCA) or independently trained autoencoders, and a separate predictor is trained on top of the resulting frozen latent space. This decoupling between representation learning and temporal prediction, as well as approaches that apply predictors directly on raw VFM features, provides no guarantee that the latent space is structured for predictable dynamics. In this work, we propose Latent-Foresight, an end-to-end framework that jointly learns a latent tokenizer and a flow-based generative dynamics model, explicitly shaping the representation to support temporal predictability. To enable stable joint optimization, we introduce several key design choices that prevent latent collapse and align reconstruction with generative objectives. Extensive experiments show that our approach learns more temporally coherent latent representations and consistently outperforms two-stage baselines across multiple future scene understanding tasks and prediction horizons, while eliminating separate training stages, including during high-resolution adaptation. We provide the implementation code and model weights at https://github.com/Sta8is/Latent-Foresight
