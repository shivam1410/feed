---
title: "Embodied First Exam"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.12177"
authors: ["Kangrui Wang", "Qineng Wang", "Changhe Chen", "Pingyue Zhang", "Chi Gui", "Feishi Wang", "Canyu Chen", "Wenli Xiao", "Xiaoyu Huang", "Tonghe Zhang", "Linjie Li", "Zihan Wang", "Minyeong Kim", "Yiyou Sun", "Mingkai Deng", "Jinyu Hou", "Qi Zhu", "Han Liu", "Eric P. Xing", "Huaxiu Yao", "Zhiwen Fan", "Yuejiang Liu", "Dawn Song", "Pieter Abbeel", "Li Fei-Fei", "Jiajun Wu", "Yuke Zhu", "Guanya Shi", "Ruohan Zhang", "Manling Li"]
date: "2026-11-08T19:00:00.000Z"
score: ""
guid: "2611.12177"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.12177.png"
generated: "2026-11-12T19:00:28+05:30"
---

Early successes on agentic robotics point to a potential paradigm shift toward using coding agents to control robots. Existing robotics benchmarks are built around visuomotor policy learning, leaving it open whether coding agents can reliably control diverse robots under physical-world constraints. We therefore introduce the Embodied First Exam, a unified, comprehensive, and agent-native evaluation framework where coding agents can choose their own control approach: direct control, code to control, or train a policy to control. We hope it serves as a first exam for coding agents before they enter the physical world, with 1,156 tasks in 35 suites on 47 robots, including 9 new suites that go beyond pick-and-place to spatial puzzles, dexterous manipulation, multi-robot interaction, dynamic whole-body control, and sim-to-sim engineering. Each task can be run in up to three evaluation settings. The Standard Setting mimics the real world: the agent receives only sensor observations and, by default, cannot reset the environment. Its Realtime variant keeps the environment running while the agent reasons. The Privileged Setting gives the agent access to the full simulator state and unlimited resets, allowing it to search for an oracle solution for training purposes. Success rates in this setting serve as an approximate upper bound. On the 456 core tasks, the strongest of eight agents, GPT-6 Astra in Codex, achieves a success rate of 34% in the Standard Setting, leaving much room for improvement. To see where agents fail, we label the stage at which failed attempts go wrong and compare failures across agents, settings, and stage categories.
