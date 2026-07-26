---
title: "Robostral Navigate"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20785"
authors: ["Arjun Majumdar", "Avinash Sooriyarachchi", "Benjamin Tibi", "Chris Bamford", "Elliot Chane-Sane", "Guillaume Lample", "Khyathi Raghavi Chandu", "Ludovic Ho Fuh", "Mathieu Poiree", "Olivier Duchenne", "Rosalie Millner", "Srijan Mishra", "Theo Cachet", "Thomas Chabal"]
date: "2026-07-21T20:00:00.000Z"
score: 78
guid: "2607.20785"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20785.png"
generated: "2026-07-26T22:35:53+05:30"
---

Robostral Navigate is an 8B vision-language model for robot navigation using only monocular RGB images — the most ubiquitous robot sensor. The model predicts waypoints by pointing to targets in the current camera view, operating in image space rather than robot-specific coordinates for natural robustness to camera changes and scene scale. This enables deployment across wheeled, legged, and aerial robots without recalibration. The team generated 2.4 million trajectories across 350k simulated scenes. Prefix-caching training reduced tokens by 22x and training time from months to days.
