---
title: "Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.17060"
authors: ["Hao Li", "Fangzhou Hong", "Zhaoxi Chen", "Hui En Pang", "Kairui Hu", "Mingze Sun", "Runmao Yao", "Xinhao Ji", "Xiyuan Zheng", "Xuanli Chen", "Yalun Dai", "Yap Kim Hui", "Dingwen Zhang", "Yuanyuan Gao", "Ziang Cao", "Cheng Huang Yean", "Jackson Peng", "Rui Duan", "Yaobo Liu", "Zetong Wang", "Ziwei Liu"]
date: "2026-11-11T19:00:00.000Z"
score: ""
guid: "2611.17060"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.17060.png"
generated: "2026-11-14T19:35:57+05:30"
---

Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop. Language models have advanced along well-characterized scaling laws; the corresponding question for physical AI is how capability scales with environments and behaviors, which first requires identifying which data to scale and how to produce and reuse such data continuously. To address this question, we introduce Ropedia Xperience 2, comprising 1,589 released metric-scale 3D scans and a collection of 4,230 egocentric recordings of 74 tasks (131 hours). We further show that each capture can be repurposed for robot learning: scenes are converted into physically interactive simulation environments, human motion is retargeted to whole-body robot trajectories, and additional robot behaviors are obtained through virtual teleoperation and automated long-horizon trajectory generation. We propose this joint capture of environments and behaviors as a gold standard for physical AI data collection, laying a data foundation for establishing scaling laws over environments and behaviors.
