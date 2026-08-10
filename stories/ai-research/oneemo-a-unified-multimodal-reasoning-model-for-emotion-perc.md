---
title: "OneEmo: A Unified Multimodal Reasoning Model for Emotion Perception, Understanding, and Interaction"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.06013"
authors: ["Jiahao Huang", "Zheng Lian", "Jingyi Zhang", "Zhide Chen", "Xiaojiang Peng", "Shaonan Wang"]
date: "2026-08-05T20:00:00.000Z"
score: 60
guid: "2608.06013"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.06013.png"
generated: "2026-08-10T19:05:52+05:30"
---

Multimodal Large Language Models (MLLMs) have demonstrated remarkable capabilities in emotional intelligence. However, prevailing research predominantly focuses on task-specific specialization, often neglecting inter-task synergy and leaving latent reasoning potential underexplored. To bridge this gap, we introduce OneEmo, a unified affective generalist capable of mastering emotion perception, comprehension, and interaction. For this purpose, we first construct EmoWorld-130K, a comprehensive dataset that distills specialized affective knowledge into explicit reasoning trajectories via a human-in-the-loop workflow. Supervised fine-tuning on this corpus reveals significant mutual benefits derived from multi-task learning. Second, to fully unlock the latent reasoning potential, we propose Emo-Chord, a novel reinforcement learning strategy that stabilizes optimization through unified multi-task reward allocation. Extensive experiments demonstrate that OneEmo achieves state-of-the-art performance against similarly sized baselines across most benchmarks. Notably, despite having significantly fewer parameters than commercial models, OneEmo delivers highly competitive results. This paper paves the way for more reliable and interpretable affective computing. The code is available at https://github.com/waHAHJIAHAO/OneEmo.
