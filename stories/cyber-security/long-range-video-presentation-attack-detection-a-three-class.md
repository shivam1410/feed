---
title: "Long-Range Video Presentation Attack Detection: A Three-Class Benchmark Across 1-100 m and Two Sensor Types"
category: "Cyber Security"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25108"
authors: ["Lambert Igene, Mohammad Zahir Uddin Chowdhury, Afzal Hossain, Sandip Purnapatra, Peter Johnson, Stephanie Schuckers"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.25108v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Face presentation attack detection (PAD) systems deployed in border control and airport surveillance are constrained by a critical assumption: subjects are captured at close range, typically under one meter. No existing benchmark systematically addresses multi-distance capture, diverse environmental conditions, and concurrent spoofing and occlusion-based attacks, leaving deployed models underprepared for real-world scenarios. We introduce a video-based PAD dataset of 374,000+ frames from 261 unique identities collected across five standoff distances (1 m-100 m) under indoor and outdoor conditions using a DSLR camera (C) and a mobile sensor (M), with three-class labels: live, spoof, and props (occlusions); models are trained and evaluated on video clips rather than single frames. We fine-tune and benchmark four CNN architectures: MobileNetV3, MobileNet, EfficientNet, and ResNet-50. The higher-resolution DSLR maintains near-perfect spoof classification rate across all distances, while the lower-resolution mobile sensor degrades sharply beyond 50 m, with props classification rate dropping to 55% at 75 m for MobileNetV3. EfficientNet achieves the best overall performance (98.48% accuracy, ACER 2.01%). Generalization tests on unseen attack datasets yield 89-94% accuracy, validating cross-domain robustness. These results establish capture distance and sensor resolution as critical but underexplored axes of PAD difficulty. The dataset will be publicly released under an End-User License Agreement to support reproducible long-range PAD research.
