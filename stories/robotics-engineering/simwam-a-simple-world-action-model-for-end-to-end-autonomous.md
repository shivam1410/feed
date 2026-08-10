---
title: "SimWAM: A Simple World Action Model for End-to-End Autonomous Driving"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.07468"
authors: ["Zongchuang Zhao", "Xin Zhou", "Tianyang Xu", "Zhengyang Sun", "Kaixuan Zhou", "Honglin Li", "Dingkang Liang", "Xiang Bai"]
date: "2026-08-06T20:00:00.000Z"
score: 70
guid: "2608.07468"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.07468.png"
generated: "2026-08-10T19:05:52+05:30"
---

SimWAM is a simplified world-action model for autonomous driving that uses video generation as a training signal rather than inference requirement. The lightweight design co-trains a video expert and action expert via joint flow matching, then discards the video component after training, leaving a pure trajectory planner. The system achieved 91.5 PDMS on NAVSIM, surpassing existing world-action models with significantly lower latency and zero-shot transfer to nuScenes. The approach provides an efficient baseline for autonomous-driving research.
