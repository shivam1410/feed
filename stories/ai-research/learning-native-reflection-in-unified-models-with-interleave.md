---
title: "Learning Native Reflection in Unified Models with Interleaved Reinforcement Learning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35767"
authors: ["Yijia Fan", "Ziqi Huang", "Zhongang Cai", "Yan Li", "Zimo Wen", "Wanqi Yin", "Haiwen Diao", "Ziwei Liu"]
date: "2026-09-27T20:00:00.000Z"
score: 70
guid: "2609.35767"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35767.png"
generated: "2026-09-29T19:09:35+05:30"
---

Unified multimodal models can both look at and render images, so in principle they can repair their own generations: diagnose what an image gets wrong, revise it, observe the result, and diagnose again. Whether a revision helps is known only after it is rendered, so the reflection text and the image generation must be learned jointly, over the whole loop. Supervised fine-tuning (SFT) on reflection trajectories gives a cold start but does not find the high-success repair paths, and naive RL that optimizes only the renderer or only one head leaves most of the gain untapped. We introduce UMM-Reflection, which applies reinforcement learning (RL) to complete reflection trajectories inside one unified model: sibling trajectories share one initial image, so the group-relative advantage compares reflection strategies, and one trajectory-level advantage updates both the reflection tokens and the flow-based revisions, avoiding the combinatorial blow-up of per-round credit assignment. Unlike single-round editing or pipelines with an external critic, credit flows across rounds and to both roles of the same model, and no verifier is needed at inference. On BAGEL, UMM-Reflection improves GenEval by 12.05 points over SFT, and the gains transfer to WISE (+10.97), OneIG-Bench (+3.48), and T2I-CompBench++ (+4.63), none of which is used in training.
