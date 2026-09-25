---
title: "Training Object Permanence in World Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.28654"
authors: ["Haotian Zhang", "Fengyuan Yu", "Dezhi Luo", "Haoran Sun", "Zehong Zhao", "Qingying Gao", "Yihan Li", "Siyuan An", "Huayi Qin", "Yilan Zhang", "Zhengze Jiang", "Pinyuan Feng", "Renrui Zhang", "Ziyu Guo", "Letian Wang", "Mengyue Yang", "Kangfu Mei", "Maijunxian Wang", "Ran Ji", "Vikash Kumar", "Freda Shi", "Chandra Sripada", "Vincent C. Muller", "Philip Torr", "Alan Yuille", "Nikolaus Kriegeskorte", "Felix Juefei-Xu", "Lvmin Zhang", "Jieneng Chen", "Yilun Du", "Hokin Deng"]
date: "2026-09-22T20:00:00.000Z"
score: 72
guid: "2609.28654"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.28654.png"
generated: "2026-09-25T19:08:22+05:30"
---

Object permanence and solidity are hallmarks of human cognitive priors. Recent studies show that video generation models, a paradigmatic class of current world models, have begun to show emerged reasoning abilities, making them ideal candidates for building human-like physical intelligence. Do video models have emerged object permanence in them? If not, could we train them with a core-cognition inspired dataset? We introduce WROP (World Reasoning with Object Permanence), a data infrastructure of 150 hand-designed cognitive science inspired tasks, divided into six cognitive categories. We build Blender generators that randomize speed, lighting, camera angle, and other nuisance parameters while preserving each task's cognitive structure, yielding 10,000+ samples per task. We release a 1.5M-sample training corpus and a 300-question exam. On this exam we evaluate 14 video models: 3 reference-to-video, 7 edit, and 4 continuation, among which PWM-WROP, our 16B world model. In a blind pairwise Elo study, PWM-WROP ranks first among continuation models and third overall, behind only a statistical tie between two reference-to-video models. We release the data, exam, model answers, scores, weights, and PWM, our native-PyTorch training stack on AWS Trainium2.
