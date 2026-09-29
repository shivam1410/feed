---
title: "InfiniHand: Streaming World-Space Hand Motion Estimation from Egocentric Video"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35743"
authors: ["Kerui Ren", "Kaiwen Song", "Weiguang Zhao", "Yuxi Wang", "Yufei Liu", "Bo Dai", "Haoyu Guo", "Chunhua Shen", "Mulin Yu", "Tao Lu", "Junting Dong"]
date: "2026-09-27T20:00:00.000Z"
score: 65
guid: "2609.35743"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35743.png"
generated: "2026-09-29T19:09:35+05:30"
---

World-space hand motion estimation from egocentric video requires recovering 3D articulated hand geometry while tracking camera egomotion. Existing approaches heavily rely on cascading independent hand pose estimators and SLAM systems, resulting in error accumulation, complex pipelines, and severe computational overhead. To address these limitations, we present InfiniHand, an end-to-end streaming feed-forward framework that jointly estimates MANO parameters, camera trajectories, and hand locations directly from uncalibrated egocentric video. InfiniHand integrates persistent spatiotemporal memory with hand-centered visual features, explicitly coupling camera motion with local hand geometry within a unified architecture. We train InfiniHand in two progressive stages by first learning robust camera-space hand priors and then extending to streaming world-space reconstruction. To support this process, we aggregate a pretraining corpus of approximately 5,000 hours of egocentric data across multiple public datasets. Extensive evaluations demonstrate that InfiniHand outperforms state-of-the-art baselines on in-domain benchmarks, achieving a 21.4% reduction in ARCTIC PA-p compared to ViDiHand while substantially mitigating world-space drift. Furthermore, InfiniHand generalizes robustly to in-the-wild videos and operates at 11.19 FPS, delivering more than twice the throughput of HaWoR.
