---
title: "DreamTraj: Generating 6-DoF Object Trajectories by Reading Unrendered Video Diffusion Latents"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.00486"
authors: ["Tongsheng Ding", "Zhen Luo", "Yixuan Yang", "Boyu Wang", "Luyang Xie", "Jinyu Yang", "Feng Zheng"]
date: "2026-07-31T20:00:00.000Z"
score: 72
guid: "2608.00486"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.00486.png"
generated: "2026-08-05T20:00:21+05:30"
---

DreamTraj predicts 6-DoF object trajectories from a single RGB image using frozen video diffusion model internals rather than generated pixels. The approach introduces MOVE dataset with 5,038 fine-grained language-annotated trajectories. Uses flow-matching Reader to decode motion from attention tracks and hidden states. Achieves state-of-the-art on translation and rotation prediction while running 4.6x faster than pipelines that generate videos then extract motion. Eliminates need for video, depth, or CAD model inputs at inference time, closing the supervision gap in trajectory prediction for robotic manipulation.
