---
title: "Spatial-Interactor: Learning Spatial Reasoning through Interaction with the Observable Physical World"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.23038"
authors: ["Kaixiang Yao", "Xu Wang", "Miao Pan", "Hu Xiyue", "Weishi Wang", "Daniel Dahlmeier", "Jintao Chen", "Yongliang Shen", "Xuhong Zhang", "Wenqi Zhang"]
date: "2026-09-18T20:00:00.000Z"
score: 73
guid: "2609.23038"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.23038.png"
generated: "2026-09-25T19:08:22+05:30"
---

Spatial reasoning is essential for vision-language models (VLMs) to understand and act in the physical world. Reasoning in dynamic environments requires VLMs to perceive local state transitions caused by object motion and viewpoint changes and integrate them over long trajectories to maintain an updated spatial state, yet existing VLMs remain limited in both capabilities. Current spatial training primarily focuses on static questions about object attributes and spatial relations, providing limited direct supervision for state transitions; in contrast, interaction trajectories naturally connect a preceding observation, an action, and a subsequent observation, offering direct supervision for local state transitions, while complete trajectories reveal dependencies among consecutive transitions. We therefore introduce Spatial-Interactor, a framework that trains VLMs to model physical-world state transitions through interaction, organizing this learning process into a three-level curriculum covering L1 passive world-state transitions, L2 active self-state transitions, and L3 long-horizon interaction trajectories. Accordingly, we construct the Learning from Spatial Interaction dataset (LSI-108K) from simulated and real interaction trajectories, with tasks aligned with the objective of each level. Our two-stage training strategy applies Supervised Fine-Tuning (SFT) to L1 and L2 for local transition modeling, and On-Policy Distillation (OPD) then uses privileged self-distillation: a teacher branch given segment-level transition descriptions supervises the student's on-policy CoT, helping the student learn to integrate consecutive transitions over L3 long trajectories. Experiments across multiple VLMs and spatial benchmarks show consistent gains in local transition modeling and long-horizon integration.
