---
title: "Differentiable Logic Gate Networks for Low-Latency EEG Classification on Edge Devices"
category: "Neuroscience & Mind"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18149"
authors: ["Shyamal Y. Dharia", "Stephen D. Smith", "Camilo E. Valderrama"]
date: "2026-07-19T20:00:00.000Z"
score: 75
guid: "2607.18149"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18149.png"
generated: "2026-07-26T22:35:53+05:30"
---

Differentiable Logic Gate Networks compile models into pure Boolean circuits executable via CPU bitwise operations, eliminating floating-point bottlenecks for edge EEG classification. On dementia detection, Diff-Logic achieved 80.2% Macro F1, outperforming MLP baselines by 6.8%. On emotion recognition, MLPs retained advantages but incurred 2.3× higher latency and 14× larger models on power-constrained Nvidia Jetson devices. Critically, Diff-Logic inference time remained nearly constant across 10× model-scale increases, achieving 2.9× peak speedup over MLPs. Logic-based architectures deliver competitive or superior performance while natively satisfying latency and memory constraints of portable brain-computer interfaces.
