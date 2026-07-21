---
title: "On-Policy Delta Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15161"
authors: ["Byeongho Heo", "Jaehui Hwang", "Sangdoo Yun", "Dongyoon Han"]
date: "2026-07-15T20:00:00.000Z"
score: 62
guid: "2607.15161"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15161.png"
generated: "2026-07-21T19:05:01+05:30"
---

On-policy distillation is an alternative post-training method in reinforcement learning that alleviates the constraints imposed by reward models by providing token-level supervision from a teacher model. Although on-policy distillation has been studied and applied across various settings, its fundamental design remains underexplored. In this paper, we introduce a new distillation reward, termed the delta signal, instead of directly imitating the teacher's output distribution. The delta signal is defined as the difference between the teacher model and its base model prior to instruction tuning for reasoning capability. It therefore captures the changes induced by reasoning tuning and provides a more direct signal for transferring reasoning capabilities. Using extensive empirical evidence, we show that the delta signal substantially improves on-policy distillation and refer to the new distillation method as On-Policy Delta Distillation (OPD^2). Experiments across mathematics, science, and code-reasoning benchmarks demonstrate that OPD^2 consistently outperforms conventional on-policy distillation, enabling reasoning LLMs to achieve strong performance with only a short post-training period. Code will be available at https://github.com/naver-ai/opd2
