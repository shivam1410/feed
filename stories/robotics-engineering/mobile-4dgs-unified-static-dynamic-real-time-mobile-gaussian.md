---
title: "Mobile-4DGS: Unified Static-Dynamic Real-time Mobile Gaussian Splatting"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.05289"
authors: ["Xiaobiao Du", "Beixi Hao", "Zhen Fang", "Tianqing Zhu", "Richard Hartley", "Xin Yu"]
date: "2026-10-03T20:00:00.000Z"
score: 60
guid: "2610.05289"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.05289.png"
generated: "2026-10-08T19:08:02+05:30"
---

Recent advances in 3D Gaussian Splatting (3DGS) have achieved remarkable performance in novel view synthesis, yet deploying both static and dynamic Gaussian representations on resource-constrained mobile devices remains challenging due to heavy storage, redundant primitives, and costly per-frame computation. We present Mobile-4DGS, a unified lightweight framework for high-fidelity real-time static and dynamic Gaussian rendering on mobile platforms. For compact appearance modeling, we introduce a Monte Carlo Specular Energy Aggregator that compresses high-order radiance residuals into the first-order Spherical Harmonics (SH), together with an Attribute-Conditioned SH Enhancement module whose predicted offsets are pre-baked before inference. We further propose a Multi-View Alpha-Based Densification and Pruning strategy to suppress redundant primitives while maintaining multi-view consistency. For dynamic scenes, we develop a compact explicit 4D representation by constructing second-order Gaussian motion, learnable temporal support, and a binary static-dynamic partition, enabling continuous-time modeling without runtime deformation networks. Based on this partition, a Depth-Order Certificate selectively reuses previously committed depth orders to reduce re-projection, sorting, merging, and index-buffer updates during playback. Extensive experiments on static and dynamic scenes demonstrate that Mobile-4DGS substantially reduces storage and rendering overhead while maintaining competitive visual quality, enabling real-time 3D and 4D Gaussian Splatting on mobile devices. magenta{https://xiaobiaodu.github.io/mobile-4dgs-project/{Code has been released: https://xiaobiaodu.github.io/mobile-4dgs-project/}}.
