---
title: "World Embedding Benchmark"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.03632"
authors: ["Yiqi Liu", "Ruifeng Yuan", "Yang Wang", "Long Li", "Fengyu Cai", "Hou Pong Chan", "Jialin Yu", "Hao Zhang", "Chenghua Lin", "Chenghao Xiao"]
date: "2026-10-01T20:00:00.000Z"
score: 58
guid: "2610.03632"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.03632.png"
generated: "2026-10-05T19:10:08+05:30"
---

Physical fidelity has received increasing attention in world models and video generation, yet how video representations encode physical information remains less understood. We introduce the World Embedding Benchmark, comprising 8,000 controlled simulation cases from 80 families spanning fluid mechanics, solid mechanics, dynamics, and optics & electromagnetism. Each case pairs a rendered video with simulation-derived physical annotations, supporting three complementary tasks: text-video retrieval, physical-property regression, and multiple-choice video-description pair classification. We use these tasks to distinguish cross-modal physical alignment from the recoverability of quantitative physical information. Evaluated pre-trained omnimodal embedding models show weak retrieval and near-chance within-family pair classification, while lightweight probes recover useful physical information from frozen video embeddings. Continual contrastive training with physics-specific video-text pairs improves retrieval and pair classification but degrades physical-property regression, revealing a trade-off between alignment and quantitative information recoverability. Finally, we use the embeddings to retrieve reference videos for retrieval-augmented generation with MiniMax-H3. Retrieved references improve the physical fidelity of generated videos, with stronger retrieval models yielding larger gains in our experiments. Together, these findings highlight the need to evaluate physical alignment and property recoverability jointly, and demonstrate the utility of physical representations for improving video generation.
