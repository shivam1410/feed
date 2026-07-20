---
title: "RxBrain: Embodied Cognition Foundation Model with Joint Language-Visual Reasoning and Imagination"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14187"
authors: ["Haotian Liang", "Mingkang Chen", "Yufei Huang", "Yuchun Guo", "Xiaomeng Zhu", "Xiangli Shi", "Kaixuan Wang", "Yunxuan Mao", "Weijie Zhou", "Ling Chen", "Shirong Zeng", "Yueyu Long", "Yuchen Si", "Yajuan Zhu", "Xingyu Zhou", "Minghui Wang", "Wanjia He", "Xin Yang", "Lingzhu Xiang", "Zhiqing Liu", "Bohan Ma", "Xiran Huang", "Tianshuo Yang", "Zhiheng Liu", "Xuantang Xiong", "Zisheng Lu", "Ping Luo", "Yao Mu", "Han Hu", "Zhengyou Zhang"]
date: "2026-07-14T20:00:00.000Z"
score: 80
guid: "2607.14187"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14187.png"
generated: "2026-07-20T19:05:49+05:30"
---

RxBrain combines language and visual imagination into joint embodied plans where each modality plays a complementary role. Language provides abstract task structure—decomposition, primitives, constraints, temporal order, and decision logic—while visual imagination grounds this structure through world state prediction and subgoal planning. The model uses a unified multimodal Mixture-of-Transformers architecture supporting language, image, and video understanding and generation. Training uses an automatic pipeline that converts embodied videos into joint text-visual planning supervision by decomposing videos into planning steps and aligning them with state transitions. RxBrain-Bench evaluates whether models represent embodied plans through joint textual and visual components rather than separate systems. This matters because it enables agents to connect high-level reasoning with achievable physical states.
