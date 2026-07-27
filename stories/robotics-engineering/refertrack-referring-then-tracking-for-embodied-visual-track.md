---
title: "ReferTrack: Referring Then Tracking for Embodied Visual Tracking"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20061"
authors: ["Hanjing Ye", "Tianle Zeng", "Jiazhao Zhang", "Shaoan Wang", "Zibo Zhang", "Weisi Situ", "Yuchen Zhou", "Yonggen Ling", "Hong Zhang"]
date: "2026-07-21T20:00:00.000Z"
score: 74
guid: "2607.20061"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20061.png"
generated: "2026-07-27T19:07:27+05:30"
---

ReferTrack grounds embodied visual tracking using a referring-then-tracking paradigm with natural language guidance. The model selects the target from indexed bounding boxes, then decodes waypoints conditioned on the image-grounded decision. A sliding-window queue maintains motion cues via temporal-viewpoint-bbox indicator tokens, and co-training on custom Refer-QA data enhances identification. On EVT-Bench, ReferTrack achieves 89.4% success on single-target tracking and validates sim-to-real transfer on legged and humanoid robots. This matters because natural language control enables intuitive embodied tracking with real-world viability.
