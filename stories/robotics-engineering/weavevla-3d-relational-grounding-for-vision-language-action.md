---
title: "WeaveVLA: 3D Relational Grounding for Vision-Language-Action Models"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.31126"
authors: ["Zien Wang", "Yuhao Pan", "Yunfeng Fan", "Nan Cheng", "Xin Xia", "Wenchao Xu"]
date: "2026-11-22T19:00:00.000Z"
score: 40
guid: "2611.31126"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.31126.png"
generated: "2026-11-24T19:04:06+05:30"
---

Vision-language-action (VLA) models leverage pretrained vision-language representations for instruction-conditioned robot control, yet their understanding of task-relevant 3D relations and how these relations evolve during manipulation remains largely implicit. To address this challenge, we introduce WeaveVLA, a framework that enhances VLA action generation by explicitly modeling task-relevant relative 3D relations and maintaining relational context across observations. WeaveVLA employs a task-conditioned sparse graph neural network to encode relative 3D relations among objects, the gripper, and nearby references. Pair-specific recurrent edge states integrate geometric evidence across observations to maintain evolving spatial context. A learned-query readout summarizes the updated graph representations into compact relational tokens, which condition the action expert alongside the original vision-language context. An auxiliary geometry reconstruction objective further encourages spatial structure preservation. We instantiate WeaveVLA on StarVLA-GR00T and π_{0.5}, achieving over 98\% average success on LIBERO with both backbones. On LIBERO-Plus, WeaveVLA improves success from 74.9\% to 82.0\% and from 85.7\% to 87.8\%, respectively, with additional improvements on CALVIN DrightarrowD. On three real-world tasks, the StarVLA-GR00T-based variant improves average success from 55.6\% to 70.0\% under standard conditions and from 33.3\% to 53.3\% under OOD perturbations, surpassing the π_{0.5} baseline in both settings.
