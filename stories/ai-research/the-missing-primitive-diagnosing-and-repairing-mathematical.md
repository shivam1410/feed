---
title: "The Missing Primitive: Diagnosing and Repairing Mathematical Reasoning in Large Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02191"
authors: ["Shuo Xing", "Zilin Dai", "Chengyuan Qian", "Fangzhou Lin", "Wenjing Chen", "Ping He", "Pan Lu", "Alvaro Velasquez", "Mohit Bansal", "Zhengzhong Tu"]
date: "2026-09-30T20:00:00.000Z"
score: 60
guid: "2610.02191"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02191.png"
generated: "2026-10-06T22:55:59+05:30"
---

While Large Language Models (LLMs) have demonstrated striking capabilities on frontier mathematical problems, it remains unclear whether they possess the structural mathematical understanding underlying their solutions. In this paper, we take a first step toward systematically studying mathematical understanding in LLMs, from diagnosing its distinct capabilities to leveraging these findings to improve post-training. First, we introduce the notion of Mathematical Primitive to probe structural mathematical understanding and propose , a novel benchmark that evaluates mathematical reasoning along four distinct dimensions: Discovery, Generation, Digestion, and Execution. Second, our systematic diagnosis shows that solution accuracy masks distinct capability profiles, primitives unlock substantial latent execution capacity, and Discovery is the dominant bottleneck in mathematical reasoning. Our post-training analysis further shows that discovery-limited failures are particularly amenable to repair. Finally, building on these findings, we introduce , a primitive-privileged self-distillation framework that selectively transfers primitive-guided reasoning into the student model. Extensive experiments demonstrate that  consistently improves mathematical reasoning over baselines across model scales and challenging benchmarks.
