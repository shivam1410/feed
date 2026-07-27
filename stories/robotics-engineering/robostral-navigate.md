---
title: "Robostral Navigate"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20785"
authors: ["Arjun Majumdar", "Avinash Sooriyarachchi", "Benjamin Tibi", "Chris Bamford", "Elliot Chane-Sane", "Guillaume Lample", "Khyathi Raghavi Chandu", "Ludovic Ho Fuh", "Mathieu Poiree", "Olivier Duchenne", "Rosalie Millner", "Srijan Mishra", "Theo Cachet", "Thomas Chabal"]
date: "2026-07-21T20:00:00.000Z"
score: 75
guid: "2607.20785"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20785.png"
generated: "2026-07-27T19:07:27+05:30"
---

Robostral Navigate is an 8B vision-language model enabling robot navigation using only monocular RGB images, the most common sensor across platforms. The policy predicts waypoints by pointing in the current view, operating in image space so it generalizes to wheeled, legged, and aerial robots without recalibration. Trained on 2.4 million synthetic trajectories across 350k scenes, it uses prefix-caching to reduce training tokens 22x and compress training from months to days. This matters because minimal sensor requirements enable practical deployment at scale.
