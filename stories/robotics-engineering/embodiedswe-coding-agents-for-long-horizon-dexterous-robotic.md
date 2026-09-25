---
title: "EmbodiedSWE: Coding Agents for Long Horizon Dexterous Robotics"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.27308"
authors: ["Haoxiang You", "Zeyu Shen", "Yilang Liu", "Zhicheng Zheng", "Lihan Zha", "Kashu Yamazaki", "Mingtong Zhang", "Suning Huang", "Jiankai Sun", "Qianzhong Chen", "Lucy He", "Kaiyuan Liu", "Haoran Chang", "Katerina Fragkiadaki", "Dhruv Shah", "Mac Schwager", "Peter Henderson", "Ian Abraham", "Canwen Xu"]
date: "2026-09-22T20:00:00.000Z"
score: 72
guid: "2609.27308"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.27308.png"
generated: "2026-09-25T19:08:22+05:30"
---

We study coding agents for long-horizon, dexterous robotics and ask whether their solutions can provide scalable supervision for learning general robot policies. To test this, we develop EMBODIEDSWE-BENCH, a simulation benchmark for coding agents spanning contact-rich manipulation, deformable objects, and long-horizon tasks requiring up to half an hour of continuous interaction. We find that frontier coding agents can solve complex long-horizon tasks and transfer prior solutions across both tasks and embodiments. We also design supporting tools that help agents more effectively solve these tasks. However, the resulting solutions require substantial iterative interaction and are typically specialized to individual task instances. We therefore introduce EMBODIEDSWE-GEN, which expands a single solution from coding agent into large diverse trajectories for training a VLA. VLA performance improves with more generated demonstrations, and agent-aided diversification improves generalization to held-out task variations. We also show that a VLA finetuned solely on coding-agent-generated simulation demonstrations completes a long-horizon task on real robot. Together, our framework uses coding agents to solve complex robotics tasks and turn verified solutions into scalable supervision for robot policies.
