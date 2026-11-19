---
title: "ALIVE: Making Streaming Video Models Interactive"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.21366"
authors: ["Jinzhao Li", "Yuan Xu", "Jinxuan Wu", "Yukun Wang", "Yijia Lei", "Hanyu Ji", "Yinuo Chen", "Zining Huang", "Chi Zhang", "Hang Ye", "Yiwu Zhong", "Honglei Yan", "Panwang Pan", "Yizhou Wang", "Yin Li", "Miao Liu"]
date: "2026-11-15T19:00:00.000Z"
score: ""
guid: "2611.21366"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.21366.png"
generated: "2026-11-19T19:00:31+05:30"
---

Streaming video LLMs can continuously observe the world, yet often handle user requests in isolation. We introduce ALIVE, an interactive streaming video model supporting proactive monitoring, streaming task coordination, and feedback-seeking interaction. We construct ALIVE-SFT-288K and ALIVE-RL-3K for two-stage training. Contrastive supervised fine-tuning teaches when and how to respond, while reinforcement learning with Behavior-Aligned Credit Assignment (BACA) combines trajectory-level and local advantages to refine decisions, responses, and silence across multi-turn interactions. We also introduce FSI-Bench to evaluate feedback seeking and subsequent task completion. ALIVE achieves the highest overall scores among the compared models on four public benchmarks and FSI-Bench, demonstrating strong streaming understanding and interactive capabilities.
