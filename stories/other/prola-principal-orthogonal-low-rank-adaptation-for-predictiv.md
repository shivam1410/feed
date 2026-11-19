---
title: "PROLA: Principal-Orthogonal Low-rank Adaptation for Predictive Spatiotemporal Weather Downscaling"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.11318"
authors: ["Minseo Yoon", "Minseong Bae", "Sojin Lee", "Hyunwoo J. Kim"]
date: "2026-11-07T19:00:00.000Z"
score: ""
guid: "2611.11318"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.11318.png"
generated: "2026-11-19T19:00:31+05:30"
---

High-resolution weather prediction is important for resolving local atmospheric patterns missed by coarse global forecasts. Large pretrained weather backbones have improved global forecasting, but adapting them to produce future high-resolution fields from recent coarse states remains challenging and costly. We formulate this setting as Predictive Spatiotemporal Weather Downscaling (PSWD), a task that jointly refines spatial and temporal resolution while predicting future high-resolution trajectories. To this end, we propose a framework that decomposes prediction into spatial and temporal stages using a shared pretrained backbone, fixed numerical scaffolds, and lightweight residual heads. For backbone adaptation, we introduce PROLA (PRincipal-Orthogonal Low-rank Adaptation), which allocates a fixed low-rank budget between pretrained weights' principal directions and their orthogonal complement. PROLA further rescales rank-1 optimizer updates using gradient signals, improving adaptation without increasing trainable rank. Experiments in the PSWD setting show that PROLA outperforms representative low-rank adaptation baselines. Further experiments across diverse datasets and tasks support the broader applicability of PROLA, showing that its benefits extend beyond the primary weather downscaling setting.
