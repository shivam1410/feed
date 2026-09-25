---
title: "Uranus: Building the Next-Generation Simulation Infrastructure for Embodied AI"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.24815"
authors: ["Wenkang Qin", "Yukun Zhou", "Noah Shen", "Jisong Cai", "Dongxiao Mao", "Baicheng Li", "Yue Zhang", "Wei Sui"]
date: "2026-09-22T20:00:00.000Z"
score: 60
guid: "2609.24815"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.24815.png"
generated: "2026-09-25T23:24:50+05:30"
---

Scalable simulation is essential for robot data generation, policy training, evaluation, and safe iteration, yet real-world interaction is costly and conventional simulators require labor-intensive construction. We present Uranus, a data-driven robot simulator built around a joint-trajectory-conditioned autoregressive diffusion model. Uranus offers three key capabilities: (1) streaming, open-ended rollout, which receives future joint-position trajectories online and autoregressively generates one latent frame per step, corresponding to four RGB frames, without a fixed horizon; (2) low-latency generation, achieving 24 FPS after inference optimization; and (3) scalable, extensible robot control, providing a unified interface for synchronized multi-view generation across diverse robot embodiments and camera configurations. We conduct comprehensive quantitative and qualitative evaluations on both in-distribution and out-of-distribution data, providing an objective assessment of Uranus and clearly identifying its current limitations. We release the code and model weights to empower the community with practical tools and insights.
