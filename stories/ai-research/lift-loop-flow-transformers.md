---
title: "LiFT: Loop Flow Transformers"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.05538"
authors: ["Mohammad Mahdi Derakhshani", "Pedro M. P. Curvo", "Gertjan J. Burghouts", "Jan-Willem van de Meent", "Cees G. M. Snoek"]
date: "2026-10-03T20:00:00.000Z"
score: 55
guid: "2610.05538"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.05538.png"
generated: "2026-10-06T22:55:59+05:30"
---

We introduce Loop Flow Transformers (LiFT), a family of looped generative models that scales computation by repeatedly applying a shared Diffusion Transformer (DiT) core, with only light changes to the standard architecture. Rather than asking every recurrent step for the final prediction, LiFT trains each step with a single regression target: a point on a straight path from the model's initial estimate to the flow-matching target. Because we index these targets by a continuous depth coordinate, a trained model can loop far beyond its training depth with no retraining, early exits, or other modifications. In our experiments, these longer rollouts improve generation, so inference computation can grow without adding parameters. On ImageNet at 256x256, LiFT-L/2 achieves an FID 3.34 points lower than our dense DiT-XL/2 baseline while using approximately 60% fewer parameters, 32% fewer training FLOPs, and 52% fewer inference FLOPs.
