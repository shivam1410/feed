---
title: "On-Policy Delta Distillation for Multilingual Math Reasoning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.05802"
authors: ["Byeongho Heo", "Jaehui Hwang", "Sangdoo Yun", "Dongyoon Han"]
date: "2026-08-05T20:00:00.000Z"
score: 55
guid: "2608.05802"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.05802.png"
generated: "2026-08-08T19:05:03+05:30"
---

On-Policy Distillation (OPD) is emerging as a promising alternative to reinforcement learning for LLM post-training, yet its effectiveness in multilingual settings remains underexplored. We study OPD and its advanced variant, On-Policy Delta Distillation (OPD^2), for mathematical reasoning in English, Korean, and Japanese. OPD^2 improves OPD by using the probability gap between a post-trained teacher and its base model as the learning signal. Experiments with Qwen3 show that OPD^2 consistently outperforms the original OPD, with particularly strong improvements in Korean and Japanese, and generally narrows the English-Korean performance gap. We further find that English-only OPD can also increase performance for Korean and Japanese, but often shifts the responses toward English, highlighting the importance of multilingual data to preserving target-language responses.
