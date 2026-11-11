---
title: "DexForesight: Grounding Dexterous Policies with Implicit Spatial Foresight"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.11166"
authors: ["Zhongxi Chen", "Yi Yang", "Xinyi Chen", "Mingzhe Ye", "Yaping Li", "Zhihong Liu", "Congsheng Xu", "Haonan Wang", "Zhijie Deng"]
date: "2026-11-09T19:00:00.000Z"
score: ""
guid: "2611.11166"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.11166.png"
generated: "2026-11-11T19:00:38+05:30"
---

Dexterous manipulation requires rich spatial foresight over both the surrounding scene and the robot hand. Existing world-action models often acquire such predictive knowledge through explicit future prediction. We introduce DexForesight, a framework that learns spatial foresight implicitly by injecting dynamics-aware world representations into the latent space of a dexterous policy. During training, DexForesight learns an action-conditioned spatial world model from offline scene depth, kinematic hand geometry, and demonstration trajectories. The world model predicts 3D hand-point motion and visual feature changes, capturing both articulated hand dynamics and scene changes under demonstrated actions, including the motion of fingers occluded from the cameras. We then freeze the world model and align policy queries with its predictive world queries, transferring the learned spatial dynamics into policy latents and using them to condition action generation. At deployment, only the policy is retained, operating on RGB observations, language, and robot state without depth input or explicit future prediction. On 11 DexJoCo simulation tasks, DexForesight improves the overall success rate of the base policy from 49.4% to 60.5%. On three real-robot dexterous manipulation tasks, DexForesight achieves 58.3% success, compared with 50.0% for the strongest baseline. Project page https://dexforesight.github.io/
