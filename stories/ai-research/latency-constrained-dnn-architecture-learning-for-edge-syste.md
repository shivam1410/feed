---
title: "Latency-Constrained DNN Architecture Learning for Edge Systems using Zerorized Batch Normalization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06922"
authors: ["Shuo Huai, Di Liu, Hao Kong, Weichen Liu, Ravi Subramaniam, Christian Makaya, Qian Lin"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.06922v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06922v1 Announce Type: new Abstract: Deep learning applications have been widely adopted on edge devices, to mitigate the privacy and latency issues of accessing cloud servers. Deciding the number of neurons during the design of a deep neural network to maximize performance is not intuitive. Particularly, many application scenarios are real-time and have a strict latency constraint, while conventional neural network optimization methods do not directly change the temporal cost of model inference for latency-critical edge systems. In this work, we propose a latency-oriented neural network learning method to optimize models for high accuracy while fulfilling the latency constraint. For efficiency, we also introduce a universal hardware-customized latency predictor to optimize this procedure to learn a model that satisfies the latency constraint by only a one-shot training process. The experiment results reveal that, compared to state-of-the-art methods, our approach can well-fit the 'hard' latency constraint and achieve high accuracy. Under the same training settings as the original model and satisfying a 34 ms latency constraint on the ImageNet-100 dataset, we reduce GoogLeNet's latency from 40.32 ms to 34 ms with a 0.14% accuracy reduction on the NVIDIA Jetson Nano. When coupled with quantization, our method can be further improved to only 0.04% drop for GoogLeNet. On the NVIDIA Jetson TX2, we compress VGG-19 from 119.98 ms to 34 ms and even improve its accuracy by 0.5%, and we scale GoogLeNet up from 20.27 ms to 34 ms and achieve higher accuracy by 0.78%. We also open source this framework at https://github.com/ntuliuteam/ZeroBN
