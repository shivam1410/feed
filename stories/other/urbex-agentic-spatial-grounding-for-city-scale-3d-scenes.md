---
title: "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.18356"
authors: ["Yu Wang", "Rui Dai", "Wei Chen", "Yi Wang", "Bo Dang", "Kaikui Liu", "Xiangxiang Chu", "Yansheng Li"]
date: "2026-10-12T20:00:00.000Z"
score: ""
guid: "2610.18356"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.18356.png"
generated: "2026-10-14T19:00:21+05:30"
---

City-scale 3D grounding is commonly formulated as candidate ranking, which requires precomputed instance proposals and becomes inefficient in large outdoor scenes. We propose Urbex, an agentic vision-language framework that instead casts grounding as active spatial search. Urbex represents a city-scale 3D scene as an interactive multi-view environment, allowing a VLM agent to query landmarks, zoom into local regions, render oblique views, and commit a grounded bounding box. We optimize this tool-use policy with reinforcement learning on CityRefer, using smooth localization rewards and lightweight shaping rewards for efficient exploration. Experiments show that Urbex achieves the best Hit@1 and IoU on CityRefer, supports candidate-free grounding without ground-truth boxes, and is substantially faster than the strongest city-scale ranking baseline. Zero-shot results on STPLS3D-Refer further indicate improved cross-scene robustness.
