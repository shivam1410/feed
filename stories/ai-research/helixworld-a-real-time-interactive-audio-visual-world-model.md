---
title: "HelixWorld: A Real-time Interactive Audio-Visual World Model"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.38123"
authors: ["Lei Ke", "Jiahao Pan", "Zeyue Tian", "Jiaming Wang", "Haoyuan Huang", "Kam Man Wu", "Pengjun Fang", "Hongyu Liu", "Chenyang Qi", "Lin Wang", "Ruibin Yuan", "Weijia Chen", "Fangneng Zhan", "Qifeng Chen", "Wei Xue", "Yike Guo"]
date: "2026-09-28T20:00:00.000Z"
score: 64
guid: "2609.38123"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.38123.png"
generated: "2026-10-05T19:10:08+05:30"
---

World simulation is inherently multisensory, demanding synchronized visual and acoustic dynamics in real time. Yet prevailing interactive world models remain strictly silent, focusing exclusively on visual rendering and control while overlooking the acoustic dimension. We present HelixWorld, a real-time interactive audio-visual world model where visual scenes and camera-grounded spatial stereo sound co-evolve natively under user interaction. We curate a high-fidelity spatial audio-visual dataset with true stereo acoustics and metric camera poses, upon which we pre-train a bidirectional teacher conditioned on 6-DoF camera trajectories and user actions. To enable low-latency causal interaction, we distill the teacher into a few-step streaming student via an online trajectory distillation loss, sustaining drift-free joint audio-visual rollouts at 24 FPS on a single GPU. Furthermore, we formalize spatial-acoustic consistency and introduce HelixBench to evaluate whether synthesized sound fields faithfully track dynamic viewpoint motion. Extensive experiments demonstrate that HelixWorld matches state-of-the-art silent world models in visual fidelity and responsiveness, while significantly surpassing existing baselines in camera-aligned spatial-acoustic immersion.
