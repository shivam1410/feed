---
title: "HelloWorld: Enabling Socially Interactive Characters in Video World Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.05070"
authors: ["Liangyang Ouyang", "Ruicong Liu", "Xuangeng Chu", "Kaipeng Zhang", "Yoichi Sato"]
date: "2026-08-04T20:00:00.000Z"
score: 70
guid: "2608.05070"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.05070.png"
generated: "2026-08-06T19:05:18+05:30"
---

Despite the remarkable recent progress of video world models, social interaction between users and the characters within these worlds remains unsupported. To fill this gap, we present HelloWorld, a video world model that enables social interaction with in-world characters. With a single button press, users can prompt the on-screen character to respond toward the camera, e.g., turning to the viewer, waving, nodding, or speaking a short greeting. To make these interactions natural, we propose a self-distillation pipeline that finetunes the video generation model on data synthesized by itself. Each synthesized clip contains both social interactions and camera motion, allowing the model to learn camera-pose conditioning without degrading interaction quality. At inference, we further introduce a training-free module that determines when the interaction occurs. Upon a button press, it modulates the cross-attention masks of the DiT so that the interaction-related text prompt attends only to the frames within the press window, temporally localizing the character's response. We further build HelloWorldBench, a 400-sample benchmark with three social interaction metrics alongside three conventional metrics, for evaluation. Experiments demonstrate that HelloWorld surpasses a variety of baselines in interaction quality, while maintaining state-of-the-art picture aesthetics and camera-pose following. Project page: https://github.com/AlayaLab/HelloWorld
