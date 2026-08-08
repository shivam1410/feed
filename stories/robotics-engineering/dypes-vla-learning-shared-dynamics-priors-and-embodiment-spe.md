---
title: "DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.06374"
authors: ["Junfeng Li", "Junjie He", "Zhide Zhong", "Yangyang Zheng", "Pingyue Sheng", "Jiayu Dong", "Ruixin Li", "Haodong Yan", "Jiaguan Zhu", "Tianran Zhang", "Runze Yu", "Wen Chen", "Liuqing Yang", "Yuxiang Gao", "Haoang Li"]
date: "2026-08-05T20:00:00.000Z"
score: 70
guid: "2608.06374"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.06374.png"
generated: "2026-08-08T19:05:03+05:30"
---

DyPES-VLA addresses the challenge of training a single robot policy that works across different robot embodiments. The approach learns shared dynamics priors using a vision-language model trained on future-frame prediction across diverse robots and interaction data. An embodiment-specific Mixture-of-Experts action head translates learned dynamics representations into control commands native to each robot's action space, avoiding manual action alignment. Testing across simulation and real robots achieves 98% success, demonstrating that robots can learn generalizable dynamics understanding while maintaining embodiment-specific control, advancing cross-embodiment robot learning.
