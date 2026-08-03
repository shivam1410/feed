---
title: "Explorative Modeling: Unlocking a Third Pretraining Axis and End-to-End Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27372"
authors: ["Alexi Gladstone", "Heng Ji", "Yilun Du"]
date: "2026-07-28T20:00:00.000Z"
score: 80
guid: "2607.27372"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27372.png"
generated: "2026-08-03T19:06:42+05:30"
---

Explorative Modeling introduces a training paradigm that factors the training loop rather than the generation procedure, enabling true end-to-end generative training. The method adds exploration as a third pretraining axis beyond parameters and data, showing dramatic gains: performance improves 7–36% as data scales and 13–23% as models grow, with efficiency gains (4.1× FLOP, 6.2× sample efficiency, 47% parameter efficiency) more than doubling at 3× compute. Achieves 1.43 FID on ImageNet. This paradigm shift commits predictions to modes rather than blurring them, potentially transforming how generative models train.
