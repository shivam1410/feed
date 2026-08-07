---
title: "DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.06374"
authors: ["Junfeng Li", "Junjie He", "Zhide Zhong", "Yangyang Zheng", "Pingyue Sheng", "Jiayu Dong", "Ruixin Li", "Haodong Yan", "Jiaguan Zhu", "Tianran Zhang", "Runze Yu", "Wen Chen", "Liuqing Yang", "Yuxiang Gao", "Haoang Li"]
date: "2026-08-05T20:00:00.000Z"
score: 65
guid: "2608.06374"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.06374.png"
generated: "2026-08-07T19:04:45+05:30"
---

Vision-Language-Action (VLA) models have become a powerful paradigm for robot manipulation, but training a single generalist policy for heterogeneous robot embodiments remains an open problem. Existing methods have two main limitations. First, they underuse dynamics priors shared across diverse visual and interaction data, limiting cross-embodiment transfer. Second, they require extensive manual preprocessing to convert embodiment-specific actions into a common format. To overcome these limitations, we propose DyPES-VLA, a cross-embodiment VLA that learns shared Dynamics Priors and Embodiment-Specific control. First, we learn shared dynamics priors by training the vision-language model (VLM) with a future-prediction objective on cross-embodiment data, driving the shared query representation to capture object motion, contact, and interaction-induced scene changes. Second, an embodiment-specific Mixture-of-Experts (MoE) action head translates these shared dynamics priors into executable controls directly in each embodiment's native action space, without manually pre-aligning heterogeneous actions into a common format. This head shares attention layers to capture common temporal action structures, while its embodiment-specific feed-forward experts resolve the unique kinematic constraints and control semantics of distinct embodiments. As a generalist policy, our \ourmethod achieves state-of-the-art performance across simulation and real-world evaluations, reaching 98.0% success on LIBERO, 59.25% on RoboCasa-GR1, and 89.02% on RoboTwin~2.0.
