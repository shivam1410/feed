---
title: "FAME-QP: A GPU-Accelerated Quadratic-Programming Solver for Real-Time Model Predictive Control"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.13766"
authors: ["Santosh Mohan Rajkumar", "Debdipta Goswami", "Stephanie Stockar"]
date: "2026-11-09T19:00:00.000Z"
score: ""
guid: "2611.13766"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.13766.png"
generated: "2026-11-13T19:01:04+05:30"
---

We present FAME-QP, a GPU-accelerated solver for dense quadratic programs arising in linear model predictive control. FAME-QP combines constraint-dependent operator representations with fused single- and two-kernel iterations replayed through CUDA graphs, automatically selecting the execution configuration through device calibration and problem-specific timing. It probes a cached operator bank to select the initial penalty and updates operators lazily when problem matrices change. Numerical benchmarks and simulated humanoid and quadrotor control experiments demonstrate reduced latency relative to competing GPU solvers while maintaining solution accuracy and control performance.
