---
title: "Ego2Robot: Scalable Robot Data Synthesis from Egocentric Human Data"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.02580"
authors: ["Ye Wang", "Pei Lin", "Xiong-Hui Chen", "Haoqi Yuan", "Zhixuan Liang", "Yiyang Huang", "Anzhe Chen", "Zixing Lei", "Jie Zhang", "Tao Zhang", "Haoyang Li", "Tong Zhang", "Chenxi Xiao", "Ziyuan Jiao", "Qin Jin"]
date: "2026-08-02T20:00:00.000Z"
score: 70
guid: "2608.02580"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.02580.png"
generated: "2026-08-08T19:05:03+05:30"
---

Learning generalizable robot manipulation policies requires large-scale and diverse demonstration data. Egocentric human manipulation videos offer rich scene and task diversity, and prior work has shown that retargeting and rendering such videos into robot-format data can yield effective per-task policies at small scale. However, whether this approach can provide pretraining benefits for vision-language-action models at scale remains unexplored. We present Ego2Robot, a scalable pipeline that converts egocentric human manipulation videos into robot training data through action retargeting, robot-arm visual synthesis, and multi-level quality curation. Ego2Robot supports both curated datasets and in-the-wild videos, producing 18,561 hours of robot training data spanning 15 robot morphologies, making it the largest ego-to-robot dataset to date. To evaluate generalization, we extend RoboTwin2.0 with disentangled perturbation axes covering visual appearance, scene layout, embodiment morphology, and task semantics. Experiments show that joint pretraining on Ego2Robot-synthesized and robot data consistently improves out-of-distribution generalization across multiple perturbation types, with benefits validated on real-robot deployment. Project page: https://www-ye.github.io/ego2robot_blog/
