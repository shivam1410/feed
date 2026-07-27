---
title: "Closing the Loop: Training-Free Revisit Consistency for Autoregressive Generative Rendering"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21848"
authors: ["Wenchao Ma", "Changran Liu", "Sharon X. Huang", "Haomiao Jiang"]
date: "2026-07-22T20:00:00.000Z"
score: 76
guid: "2607.21848"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21848.png"
generated: "2026-07-27T19:07:27+05:30"
---

Researchers solve a critical problem in auto-regressive video generation: inconsistency when cameras revisit locations after context is evicted. They use 3D engine correspondences—temporal correspondence retrieves pose-matched latent chunks into KV cache as loop-closure memory, while spatial correspondence from depth reprojection biases attention toward matching regions. Tested on complex TartanAir and TartanGround trajectories, the training-free method maintains appearance consistency without degrading overall video quality. This matters because long-horizon video generation requires coherent persistent worlds.
