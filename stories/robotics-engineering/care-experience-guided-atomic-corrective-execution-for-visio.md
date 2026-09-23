---
title: "CARE: Experience-Guided Atomic Corrective Execution for Vision-Language-Action Policies"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.24118"
authors: ["Junlan Xiao", "Junwei Jiang", "Zaibin Zhang", "Yifan Wang", "Zhongbo Zhang", "Huchuan Lu", "Lijun Wang"]
date: "2026-09-20T20:00:00.000Z"
score: 60
guid: "2609.24118"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.24118.png"
generated: "2026-09-23T19:07:00+05:30"
---

Vision-Language-Action (VLA) policies achieve strong performance in robotic manipulation but remain brittle once execution deviates from nominal trajectories. We propose CARE (Corrective Atomic Robotic Execution), a framework that improves recovery by learning from failures encountered during execution. Instead of generating corrective data from manually designed or random perturbations, CARE collects failed rollouts, models stage-conditioned post-failure deviations, and uses the resulting empirical distributions to synthesize representative failure states and corrective demonstrations. At inference time, CARE combines stage-wise planning with physically grounded 3D monitoring to trigger atomic adjustments or re-operations while preserving task progress. We further introduce the Failure State Recovery Benchmark (FSR-Bench), which evaluates recovery from intermediate failure states under local deviations and structural anomalies. Experiments across multiple VLA backbones, simulation benchmarks, and real-world dual-arm tasks show consistent improvements, with average task-success gains of 14.5 points in simulation and 15.9 points in the real world. Code, models, and data are available at https://github.com/xiaojunlan/care
