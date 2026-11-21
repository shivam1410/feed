---
title: "Training Vision Models for LLM-Driven Weight-Space Programming"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.26408"
authors: ["Timo Ropinski", "Sebastian Kranz"]
date: "2026-11-18T19:00:00.000Z"
score: 40
guid: "2611.26408"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.26408.png"
generated: "2026-11-21T19:04:16+05:30"
---

It has been demonstrated that, in certain settings, large language models can perform weight-space programming to directly modify the weights of neural networks. However, it is unknown how dedicated training of these networks can contribute to the successes of weight-space programming. We present a benchmark of LLM-driven weight-space programming on vision models, in which five LLMs edit convolutional networks and vision transformers on relabeling and error-correction tasks on Waterbirds, CIFAR-100, PACS and Entity-30. We report more than 2,600 such edit processes, whereby each edit is scored on held-out images for success, side effects and accuracy loss. We compare standard training with label smoothing, gradient-based editable training, and our Edit-Ready Training (ERT), a novel method that rehearses the direct, closed-form weight edits LLMs perform. We show that preparing networks for editing raises the success of LLM edits substantially where standard networks are hard to edit. ERT further achieves the highest mean score for GPT-6 Astra and Claude Opus 5.5 across all evaluated baselines. We will release our LLM testing framework alongside all tasks, editing trajectories and scores. Project page: https://viscom.uni-ulm.de/wsp
