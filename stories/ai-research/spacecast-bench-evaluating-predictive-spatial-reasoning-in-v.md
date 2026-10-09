---
title: "SpaceCast-Bench: Evaluating Predictive Spatial Reasoning in Vision-Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.12402"
authors: ["Hongxing Li", "Jinyue Su", "Dingming Li", "Wenqi Zhang", "Weiming Lu", "Jun Xiao", "Yueting Zhuang", "Yongliang Shen"]
date: "2026-10-07T20:00:00.000Z"
score: 62
guid: "2610.12402"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.12402.png"
generated: "2026-10-10T00:52:03+05:30"
---

Existing spatial reasoning benchmarks mainly test spatial perception: reading off relations already visible in the input. Yet real-world spatial intelligence demands predictive spatial reasoning: constructing a scene from observations, anticipating how an intervention changes it, and reasoning about the unseen outcome. We introduce SpaceCast-Bench, the first benchmark to directly and diagnostically evaluate this capability. Built around an observe-transform-infer framework, its 3,862 questions from 182 real-world scenes span 16 task types at three levels: static perception, local prediction, and global prediction, progressively requiring scene understanding, spatial state updating, and relational inference over unobserved outcomes. Evaluating 21 models exposes a stark gap: the strongest model reaches only 58.0% against 87.2% human performance, while spatially specialized models remain near random chance. Controlled analyses further reveal that bridge views are critical for integrating distributed observations, and that explicit 3D evidence benefits models more reliably than generated outcome images or videos. Fine-tuning on our programmatically generated data lifts Qwen3-VL-4B from 34.0% to 65.7% with macro-average gains across six out-of-domain benchmarks.
