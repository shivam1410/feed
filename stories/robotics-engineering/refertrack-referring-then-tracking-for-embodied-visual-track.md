---
title: "ReferTrack: Referring Then Tracking for Embodied Visual Tracking"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20061"
authors: ["Hanjing Ye", "Tianle Zeng", "Jiazhao Zhang", "Shaoan Wang", "Zibo Zhang", "Weisi Situ", "Yuchen Zhou", "Yonggen Ling", "Hong Zhang"]
date: "2026-07-21T20:00:00.000Z"
score: 71
guid: "2607.20061"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20061.png"
generated: "2026-07-25T21:42:33+05:30"
---

Embodied visual tracking (EVT) requires a mobile agent to continuously follow a specific target described in natural language using only onboard vision. While recent vision-language-action (VLA) policies unify target identification and trajectory planning, their chain-of-thought (CoT) reasoning often operates in abstract spatial latents that are difficult to supervise and weakly aligned with explicit image-space detections. To address this, we introduce ReferTrack, a referring-then-tracking paradigm that grounds EVT using a single forward-facing camera. Our model first selects the target from an indexed set of bounding boxes, then decodes tracking waypoints conditioned on this image-grounded decision. To preserve target motion cues over time, ReferTrack maintains a sliding-window queue of previously selected bounding boxes, injecting their geometric features into the visual history via temporal-viewpoint-bbox indicator (TVBI) tokens. We further enhance target identification by co-training on a custom Refer-QA dataset. On EVT-Bench, ReferTrack achieves state-of-the-art single-view performance with success rates of 89.4%, 73.3%, and 74.1% on the single-target, distracted, and ambiguity tracking splits, respectively -- matching or even surpassing several multi-camera baselines on identification-heavy tasks. Finally, real-world deployments on legged and humanoid robots validate its robust sim-to-real transfer capabilities. Code is available at https://github.com/MedlarTea/referTrack.
