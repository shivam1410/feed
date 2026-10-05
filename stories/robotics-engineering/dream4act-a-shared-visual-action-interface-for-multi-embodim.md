---
title: "Dream4ACT: A Shared Visual Action Interface for Multi-Embodiment Video-Action Modeling"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.40153"
authors: ["Xiangyu Zhu", "Jin Xu", "Yue Guo", "Xin Wu", "Yifan Sun", "Xiancong Ren", "Jianxin Sun", "Yong Dai", "Xiaozhu Ju"]
date: "2026-09-29T20:00:00.000Z"
score: 68
guid: "2609.40153"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.40153.png"
generated: "2026-10-05T19:10:08+05:30"
---

Video generation models (VGMs) offer strong spatiotemporal priors for embodied observation--action modeling. However, joint-space action vectors lack explicit image-space structure and vary in dimensionality and semantics across embodiments, making it challenging to directly leverage the rich spatiotemporal priors of VGMs. End-effector visualizations provide an alternative but do not specify the full articulated configuration needed for robot execution. We present Dream4ACT, a world model built for joint video-action modeling across embodiments. To unify action representations across embodiments, we introduce a shared visual action interface, called action views, which render target joint configurations from four prescribed virtual cameras using URDF-based forward kinematics. This shared visual representation preserves embodiment-specific articulated geometry while allowing observation and action sequences to share a video autoencoder and diffusion transformer. Through masked flow-matching, our model supports forward dynamics, inverse dynamics, and joint observation--action generation within a single jointly trained model by varying which future sequences are corrupted. To recover executable action sequences from predicted action views, we propose a training-free, URDF-constrained multiview recovery mechanism, without a learned embodiment-specific decoder. Dream4ACT achieves an average success rate of 88.98\% on RoboTwin~2.0 and an overall score of 65.66 on TriWorldBench, supporting effective closed-loop manipulation and competitive action-conditioned multiview prediction through the visual action interface.
