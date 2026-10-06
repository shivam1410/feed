---
title: "Arm-wise Compositional Generalization in Dual-Arm Vision-Language-Action Models"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06184"
authors: ["Zaibin Zhang", "Binghao Ran", "Yuhan Wu", "Zhongbo Zhang", "Yifan Wang", "Junwei Jiang", "Junlan Xiao", "Wangcheng Shi", "Li Kang", "Yiran Qin", "Zhenfei Yin", "Lijun Wang", "Huchuan Lu"]
date: "2026-10-04T20:00:00.000Z"
score: 65
guid: "2610.06184"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06184.png"
generated: "2026-10-06T22:55:59+05:30"
---

Generalization in multi-arm collaboration can be studied as composing familiar atomic skills in new ways across arms. However, existing evaluations offer limited insight into which training and architectural choices support this ability under different coordination requirements. We introduce ACG-Bench, a benchmark for Arm-wise Compositional Generalization that provides a common testbed for studying skill recomposition in dual-arm policies. It contains 23 task--condition pairs across 8 task families, with 6 in-domain conditions and 17 unseen compositions covering reordering, synchronization, their combination, and cross-task composition. All methods receive the same per-arm atomic prompts, and success requires achieving the task goal while satisfying physical milestones and specified order or timing constraints. Using π_{0.5} as a common vision-language-action backbone, we compare representative data-augmentation and architectural strategies with shared source data and a common evaluation protocol. Our architectural study examines arm-token grouping, skill-specific LoRA adapters (SkillLoRA), and arm-wise attention (AWA), highlighting the complementarity of skill-conditioned parameters and attention structure. Combining these choices yields AE-VLA, which achieves 21.53\% generalization success in simulation, compared with 2.94\% for Single π_{0.5}, 3.06\% for MA-VLA, and 5.53\% for two independently controlled π_{0.5} policies. On physical SO101 robots, AE-VLA reaches 39.00\% mean success across five unseen conditions, compared with 10.00\% for the strongest baseline. These findings provide empirical guidance for designing dual-arm policies that generalize beyond fixed training routines.
