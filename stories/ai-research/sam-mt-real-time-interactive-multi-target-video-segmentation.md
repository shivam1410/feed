---
title: "SAM-MT: Real-Time Interactive Multi-Target Video Segmentation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.08688"
authors: ["Ruiqi Shen", "Chang Liu", "Henghui Ding"]
date: "2026-07-08T20:00:00.000Z"
score: 65
guid: "2607.08688"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.08688.png"
generated: "2026-07-11T21:29:29+05:30"
---

Modern Video Object Segmentation (VOS) involves tracking and segmenting user-specified targets. While recent approaches have achieved remarkable performance in single-target scenarios, extending them to multi-target settings typically involves replicating the single-target processing for each individual object, resulting in reduced frame rates (FPS) with unbounded latency as target count increases. Built upon Segment Anything 2 (SAM2), we propose SAM-MT, which addresses this by transforming the model into an interactive framework for real-time Multi-Target video segmentation. SAM-MT uses explicit queries to represent different individual targets, in parallel with a shared representation for global context. It employs decoupled masked attention to keep individual identities distinct from cross-target interference, and sparse memory for stable temporal evolution, along with specialized strategies for occlusion handling and overlap prevention. SAM-MT successfully decouples latency from the number of targets, achieving real-time speed on par with single-target baselines (>36 FPS for 10 targets) while maintaining SAM2's robust video segmentation performance.
