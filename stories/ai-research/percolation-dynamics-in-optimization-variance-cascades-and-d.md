---
title: "Percolation Dynamics in Optimization : Variance Cascades and Discrete Scale Invariance"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.02373"
authors: ["Sai Niranjan Ramachandran", "Suvrit Sra"]
date: "2026-09-01T20:00:00.000Z"
score: 80
guid: "2609.02373"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.02373.png"
generated: "2026-09-04T23:32:20+05:30"
---

This theoretical research models stochastic gradient descent (SGD) training dynamics as a percolation process, drawing from statistical physics. The work shows how neural network architectural symmetries cause subnetworks to progressively merge in discrete blocks during training. These discrete merging events function as phase transitions, producing observable variance spikes in training loss curves. Similar phase-transition dynamics appear in popular adaptive optimizers (Adam, AdamW) when trained on data with heavy-tailed noise distributions. Understanding optimization through this physical lens illuminates why training curves exhibit sudden jumps and plateaus, potentially enabling principled optimizer design, better hyperparameter choices, and more predictable, stable training behavior.
