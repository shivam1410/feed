---
title: "VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.08449"
authors: ["Yu-Cheng Chou", "Shihao Wang", "Jin Huang", "Chi-Pin Huang", "Chiao-An Yang", "Xianzhe Fan", "Jing Wang", "Zhiqi Li", "Yuanguo Kuang", "Ruijie Zheng", "Johan Bjorck", "Sifei Liu", "Hang Su", "Abhishek Badki", "Lei Zhang", "Alan Yuille", "Linxi &#34;Jim&#39;&#39; Fan", "Jan Kautz", "Zhiding Yu"]
date: "2026-11-04T19:00:00.000Z"
score: ""
guid: "2611.08449"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.08449.png"
generated: "2026-11-07T20:33:06+05:30"
---

Models for physical AI tasks, such as robotics and autonomous driving, need not reason solely in language. They can use visual plans--points, bounding boxes, and trajectories--to represent spatial goals and anticipate motion. However, autoregressive vision-language models generate these plans one coordinate token at a time, making richer predictions increasingly costly. We introduce VFlash, a method for fast, accurate visual planning through Flash Primitive Decoding. VFlash exploits the known structure of visual primitives to predict their coordinates jointly, using a lightweight drafter that generates an entire primitive in one forward pass. The layout adapts to the primitive's type, dimensionality, and length, supporting compact boxes and long, variable-length trajectories. Crucially, spatial accuracy need not require reproducing an autoregressive model's exact token sequence. VFlash therefore trains on annotated primitives and directly accepts structurally valid predictions without target-token agreement. Across the evaluated 2D and 3D robot trajectory tasks, VFlash consistently reduces prediction errors relative to autoregressive decoding. Preliminary single-rollout measurements indicate approximately 25x faster generation for 3D point motion forecasting. A world action model conditioned on VFlash plans achieves 70.2% average success across four MolmoSpaces task suites, compared with 62.6% for the baseline.
