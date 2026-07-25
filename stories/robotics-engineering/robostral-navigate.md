---
title: "Robostral Navigate"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20785"
authors: ["Arjun Majumdar", "Avinash Sooriyarachchi", "Benjamin Tibi", "Chris Bamford", "Elliot Chane-Sane", "Guillaume Lample", "Khyathi Raghavi Chandu", "Ludovic Ho Fuh", "Mathieu Poiree", "Olivier Duchenne", "Rosalie Millner", "Srijan Mishra", "Theo Cachet", "Thomas Chabal"]
date: "2026-07-21T20:00:00.000Z"
score: 72
guid: "2607.20785"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20785.png"
generated: "2026-07-25T21:42:33+05:30"
---

Robostral Navigate is an 8B vision-language model for robot navigation using only monocular RGB input—the most ubiquitous sensor across robotic platforms. Predicting waypoints in image space enables deployment across wheeled, legged, and aerial robots without recalibration. Training used 2.4 million trajectories across 350,000 simulated scenes to reduce real-world data dependence. Prefix-caching training reduces tokens 22-fold, cutting training time from months to days. Tree-based attention masks enforce visual grounding. Reinforcement learning improves exploration and recovery. Image-space predictions make the policy robust to camera intrinsics and scene scale variations.
