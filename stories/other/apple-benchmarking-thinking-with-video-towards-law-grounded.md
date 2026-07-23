---
title: "Apple-π: Benchmarking Thinking with Video Towards Law-Grounded Physical Intelligence"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16401"
authors: ["Runmao Yao", "Kairui Hu", "Yukang Cao", "Ruisi Wang", "Shulin Tian", "Ziang Cao", "Weichen Fan", "Ziqi Huang", "Yuhao Dong", "Hao Li", "Zhaoxi Chen", "Zhongang Cai", "Lei Yang", "Ziwei Liu"]
date: "2026-07-16T20:00:00.000Z"
score: ""
guid: "2607.16401"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16401.png"
generated: "2026-07-23T04:03:36+05:30"
---

Modern video generation models are increasingly hailed as emerging world models with an internalized grasp of physical law. Yet existing benchmarks largely evaluate physical plausibility only at the output level, without verifying whether the model arrives there through a faithful, law-grounded reasoning process. We introduce Apple-PI, the first benchmark that anchors video-model evaluation explicitly in physical laws. Apple-PI comprises three components. 1) Orchard: a dataset of 400 videos covering ten canonical tasks in classical mechanics. It separates single-law tasks for confounder-free diagnosis from multi-law tasks for probing generalization. 2) Benchmark Protocol: a three-stage protocol based on scientific reasoning, including Perception, Formulation, and Deduction. It uses chain-of-frames prompting on infographic-annotated first frames, treating the generated video as the model's visible reasoning trace. 3) Evaluation Suite: a hybrid evaluation suite that combines MLLM-based subjective scoring with physics-law-grounded objective measures. This enables stage-resolved diagnosis of not only whether a model fails, but where it fails. Benchmarking 11 models shows that current video models remain far from reliable law-grounded world simulators, with the best video model scoring only 0.473. Our stage-, pillar-, and source-resolved analyses further expose a Perception-to-Formulation-to-Deduction bottleneck, weak multi-law state transfer, and a persistent Sim-to-Real gap. These findings position Apple-PI as a diagnostic foundation for guiding future video models toward world models with law-grounded physical intelligence.
