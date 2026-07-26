---
title: "Self-Supervised Learning of Structured Dynamics from Videos"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21576"
authors: ["Lukas Knobel", "Andrew Zisserman", "Yuki M. Asano"]
date: "2026-07-22T20:00:00.000Z"
score: 78
guid: "2607.21576"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21576.png"
generated: "2026-07-26T22:35:53+05:30"
---

The Structured Dynamics Model (SDM) decomposes video motion into camera motion and object motion using frozen pretrained vision transformer features. Rather than entangling both in a single latent, SDM explicitly separates dominant temporal change from residual dynamics through future-feature prediction. Training combines self-supervised learning on real video with weak supervision on synthetic Kubric data. On ProbeMotion (synthetic and real videos), SDM outperforms baselines using global or pooled features and compares favorably to strongly supervised representations despite substantially weaker supervision.
