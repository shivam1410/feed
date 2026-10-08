---
title: "WorldSonus: Bringing Sound to Worlds"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.08760"
authors: ["Pengjun Fang", "Jingyi Fa", "Kam Man Wu", "Jiaming Wang", "Haoyuan Huang", "Yaguang Wu", "Xiangjun Huang", "Ziyang Ma", "Weijia Chen", "Hongyu Liu", "Zeyue Tian", "Qifeng Chen"]
date: "2026-10-05T20:00:00.000Z"
score: 73
guid: "2610.08760"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.08760.png"
generated: "2026-10-08T19:08:02+05:30"
---

Recent advances in world models have enabled increasingly realistic visual synthesis. However, these generated environments remain largely silent. Bringing sound to world models poses three core challenges: real-time generation to keep pace with interactive video streams, interactive control to respond to mid-stream sound instructions, and spatially aligned stereo to reflect scene geometry and camera motion. To address these demands, we introduce WorldSonus, an interactive video-to-audio framework designed for real-time spatial sound synthesis in world models. For real-time generation, WorldSonus employs a streaming causal autoregressive diffusion architecture that synthesizes audio chunks at a low real-time factor (RTF) of 0.41. For interactive control, we incorporate an audio-centric captioning pipeline with chunk-indexed prompt scheduling, enabling dynamic manipulation of sound events during generation. For spatial alignment, we leverage high-quality stereo supervision curated from diverse stereo and ambisonic data. Extensive experiments demonstrate that while tailored for world models, WorldSonus generalizes effectively to open-domain video-to-audio benchmarks, matching or outperforming state-of-the-art bidirectional models in both acoustic quality and spatial alignment. Project page: https://noizai.github.io/WorldSonus/
