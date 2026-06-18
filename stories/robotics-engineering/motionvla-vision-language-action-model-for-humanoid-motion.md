---
title: "MotionVLA: Vision-Language-Action Model for Humanoid Motion"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.15142"
authors: ["Nonghai Zhang", "Siyu Zhai", "Yanjun Li", "Zeyu Zhang", "Zhihan Yin", "Yandong Guo", "Boxin Shi", "Hao Tang"]
date: "2026-06-12T20:00:00.000Z"
score: 81
guid: "2606.15142"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.15142.png"
generated: "2026-06-18T19:07:09+05:30"
---

Generating realistic humanoid motion requires capturing both pose (skeleton positions) and dynamics (physical forces and momentum). MotionVLA uses a dual-stream frequency tokenizer that separately encodes these two aspects before feeding them into an autoregressive generation model. By splitting this information, the model generates motion with better diversity and consistency compared to approaches using a single tokenizer. The separate encoding allows the model to learn independent patterns in pose sequences and dynamic physics, reducing interference between these distinct but related aspects. This architectural insight suggests that motion generation benefits from explicitly representing multiple orthogonal dimensions of robot behavior.
