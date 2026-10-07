---
title: "Building Rome from a Single Image"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.08790"
authors: ["Jiraphon Yenphraphai", "Fang Li", "Tianshuo Xu", "Depu Meng", "Quentin Herau", "Yihan Hu", "Raymond A. Yeh", "Wei Zhan"]
date: "2026-10-05T20:00:00.000Z"
score: 45
guid: "2610.08790"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.08790.png"
generated: "2026-10-07T19:11:01+05:30"
---

Single-image scene generation aims to produce a complete 3D scene mesh from a single image, including surfaces the camera did not observe. While pretrained 3D object generators encode a strong shape prior, they are mainly designed for isolated objects in a fixed canonical volume and focus mostly on indoor scenes, since diverse 3D data for outdoor scenes are quite limited. In this work, we present a method that redesigns such an object-centric generator, e.g., Trellis 2, to work on both indoor and outdoor scenes while retaining its prior. We accomplish this by (a) partitioning the scene into adaptive chunks that scale relative to the distance to the camera; nearby chunks have a smaller size to keep the finer detail, while distant structures, e.g., buildings, are covered by large chunks; (b) making the generator capture explicit 2D-3D correspondence by lifting image features and making the model aware of the free space, observed surface, and unobserved region; (c) synthesizing around 4,000 outdoor scenes to broaden the training data, as existing scene datasets are largely indoor. Experiments on Tanks and Temples, ScanNet++, and in-the-wild images show that our method outperforms all baselines in geometric accuracy and perceptual quality across both indoor and outdoor scenes.
