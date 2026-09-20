---
title: "ScienceIDE: Turning World's Scientific Codebase into Agent Learnable Environments"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.19134"
authors: ["Hejia Geng", "Zesen Huang", "Haoyang Li", "Wenbin Li", "Koutian Wu", "Zihan Zhou", "Yuanbo Pang", "Weihao Liu", "Zigong Xu", "Zhiping Li", "Zongzheng Zhang", "Chuanfei Dong", "Jiankai Sun", "Tianzhe Zheng", "Fengyu Xie", "Yue Ma", "Yueheng Shi", "Tong Xie", "Zonglin Di", "Xianrong Liu", "Qucheng Gao", "Yimin Liu", "Jiaming Pan", "Sheng Huang", "Xiao-Han Ma", "Lanqing Yuan", "Zhenlin Zhu", "Ziang Liu", "Ziyang Xu", "Junkai Wang", "Kangkai Liang", "Jiayi Xian", "Zehong Zhao", "Liuwei Xu", "Jingxu Xie", "Peijin Zhang", "Qiang Gao", "Chengyi Xing", "Zhe Zhao", "Xi Wang", "Yaopeng Xing", "Xing Meng", "Zhenfei Yin", "Yingcheng Wu", "Ling Yang"]
date: "2026-09-15T20:00:00.000Z"
score: 71
guid: "2609.19134"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.19134.png"
generated: "2026-09-20T21:43:11+05:30"
---

Scientific code repositories encode decades of human knowledge in executable models, methods, and tools. Yet fragmented toolchains, implicit domain conventions, and specialized correctness criteria make this knowledge difficult to convert into reliable learning experience-a challenge we call the scientific experience bottleneck. We introduce ScienceIDE, infrastructure for turning the world's scientific code into programmable environments for scientific agents. Guided by expert-defined scientific cases and acceptance criteria, agents transform repositories into executable environments that support task generation, execution, and scientific verification. These environments provide a shared foundation for supervised fine-tuning, reinforcement learning, and evaluation. Using verified interaction trajectories, we train PhAI-IDE-72B, PhAI-IDE-9B, and PhAI-IDE-4B. The model family shows gains in held-out scientific-code repair and across selected general-purpose benchmarks in code, reasoning, and knowledge, providing evidence of positive transfer from scientific experience to broader capabilities. ScienceIDE lays the foundation for an integrated workspace for agent learning and scientific practice, making humanity's scientific software a shared substrate for developing scientific intelligence. Code: https://github.com/aitofound/ScienceIDE
