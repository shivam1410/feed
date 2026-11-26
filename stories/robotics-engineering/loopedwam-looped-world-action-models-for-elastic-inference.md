---
title: "LoopedWAM: Looped World Action Models for Elastic Inference"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.25595"
authors: ["Anh Dao", "Xinxin Liu", "Hang Yu", "Jeffrey A Chan Santiago", "Yuzhang Shang"]
date: "2026-11-18T19:00:00.000Z"
score: 35
guid: "2611.25595"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.25595.png"
generated: "2026-11-26T13:13:26+05:30"
---

World action models (WAMs) couple generative video modeling with robotic action prediction but typically require large video and action transformers, limiting deployment efficiency. We present LoopedWAM, a compact WAM that recurrently applies a shared six-block core in each expert, executing 30 transformer layers while storing only 12 blocks per expert. To account for their asymmetric inference costs, the video and action experts can operate at different depths: visual features are computed once per query, whereas action computation repeats at every sampling step. We further propose elastic self-distillation, which trains a single elastic checkpoint, LoopedWAM-E, across action-depth and sampling-step budgets. With only 0.58B policy parameters and no robot pretraining, LoopedWAM achieves 96.1% success on LIBERO, 91.9% on RoboTwin 2.0, and 52.2% on RoboCasaGR1, while using 7.4times less peak GPU memory than Fast-WAM under matched inference measurements. On LIBERO, LoopedWAM-E achieves 96.0% success in 27.6 ms or 95.2% in 24.7 ms on an H100, providing multiple accuracy-latency operating points from a single checkpoint; with two sampling steps and four action loops, it stays within 0.5 points of LoopedWAM on all three benchmarks. Ablations demonstrate that weight-shared depth preserves competitive performance, while aggressive action-depth reduction requires explicit budget-aware training. On a real AgileX PiPER arm, LoopedWAM succeeds in 71.3% of 80 trials across four tasks.
