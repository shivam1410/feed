---
title: "See like a Robot: Robot-Centric Pointmaps for Vision-Language-Action Models"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.11498"
authors: ["Byungkun Lee", "Dongyoon Hwang", "Dongjin Kim", "Hojoon Lee", "Minho Park", "Jaegul Choo"]
date: "2026-07-12T20:00:00.000Z"
score: 66
guid: "2607.11498"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.11498.png"
generated: "2026-07-21T19:05:01+05:30"
---

Vision-language-action (VLA) models predict robot actions from visual observations and language instructions. These actions are defined in the robot's own 3D coordinate frame, yet most VLAs observe the scene in the camera frame, creating a frame mismatch between where the scene is observed and where actions are defined. The mismatch is benign under a fixed viewpoint, where the policy can memorize a single observation-to-action mapping, but grows harder as large-scale datasets aggregate demonstrations across diverse camera setups and the policy must generalize this mapping across viewpoints. We address this mismatch with robot-centric pointmaps, images whose pixels store the 3D coordinates of scene points in the robot frame. Pointmaps provide robot-frame 3D geometry while preserving the dense H x W grid expected by pretrained 2D VLAs, so they integrate into existing VLAs with minimal architectural change. On RoboCasa, pointmaps improve both pi0.5 and SmolVLA and outperform representative camera-viewpoint and 3D-aware baselines. In real-robot experiments, their advantage over an RGB-only policy widens when the camera is moved to a placement unseen during training.
