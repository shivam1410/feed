---
title: "Tetris3D: 3D Scene Generation With Objects That Fit Together"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.10539"
authors: ["Jaeyeong Kim", "Jinhyuk Jang", "Jongmin Lee", "Kyehong Park", "Seungryong Kim"]
date: "2026-10-06T20:00:00.000Z"
score: 65
guid: "2610.10539"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.10539.png"
generated: "2026-10-08T19:08:02+05:30"
---

We propose Tetris3D, a generative framework for single-image 3D scene reconstruction that recovers objects which are physically and geometrically coherent as a scene. Existing methods often generate objects independently or couple them implicitly, providing limited guidance for ensuring fine-grained spatial compatibility between neighboring objects that interact with one another. To address this, we explicitly condition the generation of each object on the geometry of surrounding objects and their physical relationships, guiding its shape and pose to remain geometrically and physically plausible within the scene. Moreover, we introduce ComOb, a physics simulation-based dataset of 1.2M scenes featuring physical interactions across diverse object categories, with per-object meshes and pairwise physical relation annotations. Comprehensive experiments on synthetic and realworld scenes show that Tetris3D recovers coherent object shapes and poses even when interacting regions are occluded, and achieves state-of-the-art performance in both generation quality and physical stability.
