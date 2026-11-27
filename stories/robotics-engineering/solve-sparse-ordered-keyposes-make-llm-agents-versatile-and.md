---
title: "SOLVE: Sparse, Ordered Keyposes Make LLM Agents Versatile and Efficient Robot Manipulator"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.34750"
authors: ["Xiang Li", "Hongyu Zhou", "Ya-Li Li", "Tao Li", "Rui Zhang", "Junjie Lai", "Weihua Zhang", "Shengjin Wang"]
date: "2026-11-24T19:00:00.000Z"
score: 55
guid: "2611.34750"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.34750.png"
generated: "2026-11-27T19:03:37+05:30"
---

SOLVE is a robot agent that needs no extra training. A multimodal LLM writes a short ordered list of gripper poses per call. A motion planner fills in the movement between them, and the agent watches the result and writes the next step. It scores 74.5% on RoboDojo and 84.5% on RoboLab, at about $1.7 per episode. The authors say that is 12x less than earlier dense-control agents. On a real robot it succeeded in 75 of 85 episodes, 88%, across 16 zero-shot tasks. It matters because fewer, smarter steps make LLM-controlled robots cheaper to run.
