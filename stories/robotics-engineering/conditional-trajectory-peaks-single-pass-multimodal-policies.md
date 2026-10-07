---
title: "Conditional Trajectory Peaks: Single-Pass Multimodal Policies over Action Chunks"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06104"
authors: ["Di Wu", "Rongtian Shen", "Ping Liu", "Xuhua Chen", "He Zheng", "Lingfeng Zhang", "Tao Zhang"]
date: "2026-10-04T20:00:00.000Z"
score: 50
guid: "2610.06104"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06104.png"
generated: "2026-10-07T19:11:01+05:30"
---

Multimodal imitation learning requires diverse executable futures under the same observation and consistent behavior across replanning cycles. We present Conditional Trajectory Peaks (CTP), a single-pass policy framework that jointly predicts complete action-chunk candidates, probability masses, and trajectory scales. Distribution-Aware Peak Specialization (DAPS) specializes trajectory peaks using trajectory-level posterior responsibilities and mass- and scale-modulated overlap constraints. Evidence-Gated Trajectory Belief Transport (ETBT) maintains cross-chunk consistency through geometric correspondence between exchangeable candidate sets, while allowing current policy evidence to override historical constraints. CTP achieves a coverage score of 91.40% on Push-T; success rates of 100.0%, 79.72%, and 84.44% on D3IL Avoiding, Aligning, and Sorting-2, respectively. On LIBERO, CTP achieves an average success rate of 97.25%. In real-world dual-arm experiments, CTP preserves both placement modes in a two-plate task, succeeding in all 50 trials. On bottle uprighting and pen placement into a holder, it maintains success rates comparable to π_{0.5} while reducing policy inference latency from 218.24 ms to 75.80 ms. These results demonstrate that single-pass trajectory modeling can combine multimodal behavior, closed-loop consistency, and efficient inference.
