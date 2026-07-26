---
title: "ReferTrack: Referring Then Tracking for Embodied Visual Tracking"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20061"
authors: ["Hanjing Ye", "Tianle Zeng", "Jiazhao Zhang", "Shaoan Wang", "Zibo Zhang", "Weisi Situ", "Yuchen Zhou", "Yonggen Ling", "Hong Zhang"]
date: "2026-07-21T20:00:00.000Z"
score: 78
guid: "2607.20061"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20061.png"
generated: "2026-07-26T22:35:53+05:30"
---

ReferTrack introduces a referring-then-tracking paradigm for embodied visual tracking using a single forward-facing camera. The model first selects targets from indexed bounding boxes, then decodes tracking waypoints conditioned on image-grounded decisions. Temporal-viewpoint-bbox tokens inject geometric features from sliding-window bbox queues into visual history. Co-training on Refer-QA enhances identification. On EVT-Bench: 89.4% success on single-target, 73.3% on distracted, 74.1% on ambiguity splits—matching or exceeding multi-camera baselines. Deployment on legged and humanoid robots demonstrates robust sim-to-real transfer.
