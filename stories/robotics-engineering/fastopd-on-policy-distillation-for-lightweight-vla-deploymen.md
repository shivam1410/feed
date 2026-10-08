---
title: "FastOPD: On-Policy Distillation for Lightweight VLA Deployment"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02832"
authors: ["Yoojin Oh", "Jeongsol Kim", "Yeonwoo Seo", "Jangho Park", "Seonghyun Jin", "Sunwoo Park", "Youngmin Kim", "Youngjun Jun", "Kyumin Choi", "Jong Chul Ye"]
date: "2026-10-01T20:00:00.000Z"
score: 79
guid: "2610.02832"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02832.png"
generated: "2026-10-08T19:08:02+05:30"
---

Vision-Language-Action (VLA) foundation models have scaled rapidly to enhance manipulation performance and generalizability, but this scaling incurs high computational costs that render real-world deployment increasingly challenging. Existing approaches typically mitigate this issue by designing smaller architectures or reducing the iterative denoising steps in flow-based policies. In this work, we propose FastOPD, a foundation-to-lightweight VLA framework that enables the practical deployment of large-scale VLAs through efficient on-policy distillation. Specifically, FastOPD adapts a flow map for single-state teacher supervision and combines it with a self-consistency objective to construct a compact student that learns the teacher dynamics. Furthermore, we theoretically demonstrate that minimizing this objective allows the distilled student to recover a distribution on par with that induced by an ideal few-step teacher model. We evaluate FastOPD across diverse foundation policies in simulation and real-world experiments. On LIBERO, FastOPD retains 84% of the performance of π_{0.5} with only two inference steps, reducing inference latency by 78.1% while outperforming existing few-step distillation baselines in average success rate. With LingBot-VLA as the teacher, FastOPD improves the single-step success rate over the base student by 15.9 percentage points on RoboTwin 2.0. We further demonstrate its applicability to a World Action Model (WAM) and deploy a compact student distilled from MolmoAct2 on a real robot.
