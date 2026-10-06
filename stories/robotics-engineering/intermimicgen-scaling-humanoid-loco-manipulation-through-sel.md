---
title: "InterMimicGen: Scaling Humanoid Loco-Manipulation through Self-Evolving Motion Imitation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06850"
authors: ["Yucheng Zhang", "Sirui Xu", "Jinhong Li", "Liuyu Bian", "Anatulya Nandi", "Derek Zhang", "Xiangchen Liu", "Xueting Li", "Umar Iqbal", "Yu-Xiong Wang", "Liang-Yan Gui"]
date: "2026-10-04T20:00:00.000Z"
score: 65
guid: "2610.06850"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06850.png"
generated: "2026-10-06T22:55:59+05:30"
---

Captured human-object interactions provide rich supervision for humanoid loco-manipulation, but they are sparse, heterogeneous, and not directly executable by robots. We introduce InterMimicGen, a self-evolving motion-imitation framework in which robot motion data and a tracking policy improve each other. First, we consolidate motion-captured human-object interaction datasets and retarget them into humanoid robot references while preserving whole-body coordination and dexterous hand-object relationships. This produces a large and diverse humanoid robot reference collection for dexterous whole-body loco-manipulation. Second, we train a physics-based generalist tracker that executes these references in simulation on a humanoid with dexterous hands, covering a scale and diversity beyond prior humanoid tracking systems for loco-manipulation. Third, we close a data flywheel: each round makes small, task-preserving changes to where an interaction takes place and how the body performs it, fine-tunes the tracker on them, and keeps only the variants whose simulated execution completes the task, which seed the next round. With more iterations, these small edits compound into broader coverage around the sparse original demonstrations while preserving task semantics and motion quality. Experiments show contact-preserving retargeting across robot configurations, broad tracking with a single generalist policy, executable motions that keep growing over augmentation rounds, and transfer to real robots. InterMimicGen provides a unified path from heterogeneous human demonstrations to a continually expanding motion resource for humanoid robot learning.
