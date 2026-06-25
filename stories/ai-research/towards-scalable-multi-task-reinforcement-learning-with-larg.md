---
title: "Towards Scalable Multi-Task Reinforcement Learning with Large Decision Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24962"
authors: ["Thibaut Kulak"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.24962v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24962v1 Announce Type: new Abstract: Recent progress in large-scale sequence modeling has shown that a single model can learn useful representations across highly diverse data distributions. Inspired by these advances, we investigate whether a unified transformer policy can be trained across large collections of heterogeneous reinforcement learning environments. We introduce LDM-v0, a Large Decision Model trained offline on trajectories collected from thousands of environments spanning multiple domains and modalities. LDM-v0 is a multi-task, multi-modal transformer policy conditioned on histories of observations, actions, rewards, and termination signals, and trained through supervised next-action prediction over offline trajectories. We describe the environment infrastructure, automated data generation pipeline, model architecture, and training methodology used to build LDM-v0, and evaluate its performance across diverse environments. We show that a single pretrained model matches the performance of independently trained task-specific reference policies on approximately 1,000 environments including robotics, autonomous driving, inventory management, cybersecurity, trading, and video games. These results demonstrate the feasibility of large-scale offline pretraining across heterogeneous reinforcement learning environments using a single transformer policy.
