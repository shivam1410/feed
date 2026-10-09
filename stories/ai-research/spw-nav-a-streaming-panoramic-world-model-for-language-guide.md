---
title: "SPW-Nav: A Streaming Panoramic World Model for Language-Guided Navigation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.08941"
authors: ["Yunheng Liu", "Ziqi Cai", "Siqi Yang", "Yimu Wang", "Minggui Teng", "Jiaming Tan", "Shuchen Weng", "Erwin Wu", "Kaipeng Zhang", "Boxin Shi"]
date: "2026-10-05T20:00:00.000Z"
score: 62
guid: "2610.08941"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.08941.png"
generated: "2026-10-10T00:52:03+05:30"
---

Language-guided panoramic video generation benefits various downstream applications, such as interactive 3D scene exploration, virtual reality experiences, and embodied agent training. Existing panoramic generators follow predefined trajectories, and interactive world models act through low-level actions in perspective views. We propose SPW-Nav, a streaming panoramic world model that understands movement instructions and streams one minute of 2K 360-degree video in real time from a single panorama. SPW-Nav interprets each instruction in the previously generated panorama as camera motion. Spherical rotation decoupling applies rotation exactly on the sphere, pose-aligned conditioning keeps translation inputs bounded over long streams, and a multi-term memory with a few-step generator continues the scene as instructions change. We also build SPW-NavSet, panoramic videos with camera trajectories and verified instructions. Driven by language, SPW-Nav outperforms prior panoramic generators in camera-following accuracy and video quality, and supports on-the-fly instruction switching.
