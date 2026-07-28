---
title: "O-VAD: Industrial Video Anomaly Detection through Object-Centric Tracking and Reasoning"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18142"
authors: ["Mei Yuan", "Qi Long", "Qifeng Wu", "Zhenyang Li", "Yizhou Zhao", "Lei Wang", "Yang Liu", "Min Xu"]
date: "2026-07-19T20:00:00.000Z"
score: 70
guid: "2607.18142"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18142.png"
generated: "2026-07-28T19:07:22+05:30"
---

Industrial Video Anomaly Detection (IVAD) aims to identify anomalous objects and events in an industrial process, which is crucial for modern manufacturing and quality control systems. Existing VLM-based anomaly reasoning methods are capable of detecting open-ended anomalies in general domains. However, their performance declines in industrial settings characterized by intricate object transformations, strict physics, and procedural constraints. To tackle the complexity of such interaction-intensive detection, we introduce a training-free agentic framework for anomaly detection free of domain-specific knowledge, emphasizing object state evolution like humans inspectors. It is designed to track spatial-temporal dynamics and underlying transformations of detected objects over time, and then reason over the object-wise temporal state trajectories to identify abnormal objects in grounded frames. Our method overcomes limitations of prior approaches that rely on retraining on normal clips or injecting domain knowledge as context for test-time inference. Extensive experiments on three IVAD datasets demonstrate that our method outperforms frontier VLMs, agentic frameworks, and traditional VAD methods fine-tuned on the respective datasets, while providing interpretable reports over anomaly processes and types.
