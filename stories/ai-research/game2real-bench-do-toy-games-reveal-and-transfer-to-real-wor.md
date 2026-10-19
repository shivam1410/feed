---
title: "Game2Real-Bench: Do Toy Games Reveal and Transfer to Real-World Visual Reasoning?"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.18834"
authors: ["Qingan Liu", "Juntong Feng", "Yue Zhu", "Yujie Cheng", "Xinzhe Han", "Shuai Hao", "Yunzhi Zhuge", "Haiwen Diao", "Huchuan Lu"]
date: "2026-10-12T20:00:00.000Z"
score: 25
guid: "2610.18834"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.18834.png"
generated: "2026-10-19T19:03:54+05:30"
---

Visual reasoning is an important capability for vision-language models (VLMs) to understand visual evidence, spatial structure, constraints, and state changes. Existing evaluations mainly rely on real-world data or procedurally generated tasks. Real-world data preserve natural complexity, while procedural games provide controllable generation and verifiable solutions. However, it remains unclear whether abilities measured in toy games correspond to real-world visual reasoning and whether game examples can support transfer. We introduce Game2Real-Bench, a benchmark that studies these connections across four capability groups, including fine-grained perception, spatial reasoning, constraint reasoning, and sequential planning. We construct 1,000 procedurally generated game samples with executable verification and curate 400 real-world samples aligned by shared reasoning requirements rather than visual similarity. We evaluate 25 representative VLMs and observe strong game-to-real consistency, with Pearson and Spearman correlations of 0.935. We further study one-shot game-to-real transfer on four models. Constraint reasoning improves for several models, while fine-grained perception declines with game demonstrations. We also construct Game2Real-Dataset with nearly 24K verified game samples across 18 tasks and 65 QA families. Our benchmark, dataset, and code are available at https://github.com/QingAnLiu/Game2Real-Bench.
