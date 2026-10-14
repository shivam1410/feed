---
title: "Data-Centric Recursive Self-Improvement for Navigation via Policy-Synchronized Language-Action Dual Bootstrapping"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.15782"
authors: ["Songze Li", "Haoming Gu", "Ziyang Gong", "Zhitong Wang", "Gengze Zhou", "Zun Wang", "Yuhan Zhu", "Tianxiang Jiang", "Juanzi Li", "Qi Wu", "Weinan Zhang", "Yu Qiao", "Wenwei Zhang", "Yi Wang"]
date: "2026-10-10T20:00:00.000Z"
score: ""
guid: "2610.15782"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.15782.png"
generated: "2026-10-14T19:00:21+05:30"
---

Vision-language navigation requires agents to follow natural-language instructions to reach target locations, making high-quality language supervision essential. Since human annotation is costly, prior work has explored scalable data synthesis methods. However, existing methods typically either use separate models for navigation and instruction generation or couple the two tasks through task-specific components; most also annotate the full trajectory corpus with a fixed model before updating, which can cause generated supervision to lag behind the evolving policy. Therefore, we introduce RSI-Nav, a data-centric recursive self-improvement framework for navigation via policy-synchronized language-action dual bootstrapping, which unifies vision-language-to-action instruction following and vision-action-to-language instruction generation within a shared model. Specifically, after supervised fine-tuning establishes fundamental capabilities, RSI-Nav progressively processes unlabeled trajectories in small shards. The current model generates instructions for these trajectories, executes them to evaluate goal completion and path efficiency, retains qualified samples, and immediately updates itself before processing the next shard. This shard-wise update keeps newly generated supervision aligned with the evolving policy. We also incorporate spatial understanding data, since stronger spatial reasoning benefits navigation. Extensive experiments show that RSI-Nav reaches 68.6% SR on R2R-CE and 72.4% SR on RxR-CE, while providing stronger instruction-generation utility and modestly improved spatial understanding after recursive evolution.
