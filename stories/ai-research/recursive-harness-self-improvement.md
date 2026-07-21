---
title: "Recursive Harness Self-Improvement"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15524"
authors: ["Hyunin Lee", "Jinglue Xu", "Jeffrey Seely", "Donghyun Lee", "Matei Zaharia", "Yujin Tang"]
date: "2026-07-16T20:00:00.000Z"
score: 70
guid: "2607.15524"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15524.png"
generated: "2026-07-21T19:05:01+05:30"
---

Under model--harness co-evolution, harnesses are not merely inference-time scaffolds but data-generating components whose execution traces can shape future foundation models. This motivates harness-in-the-loop learning: optimizing harnesses for both immediate agent performance and the quality of traces used for future model training. However, continually updating provider-built scaffolds is costly and labor-intensive. We therefore investigate whether optimizing user-constructed harnesses in a task-specific manner can improve execution-trace quality while remaining computationally lightweight and requiring only a few update iterations. To this end, we introduce Recursive Harness Self-Improvement (RHI), which represents the harness as a prompt-level specification of the agent loop and iteratively refines it using pairwise feedback over its own revision history. Across 30 synthetic machine-learning research tasks spanning quantitative finance, robotics, and pharmacy, a few RHI iterations suffice to substantially raise the performance ceiling of low-reasoning-effort agents, exceeding the corresponding maximum-reasoning-effort setting while reducing inference cost by up to 60%. We show that these gains arise primarily from improved task-specific context management through more effective inter-agent information flow rather than longer reasoning traces. Finally, we formalize this behavior as an information-theoretic hypothesis for RHI's implicit optimization objective, suggesting RHI as a practical algorithm for continual learning within the paradigm of model--harness co-evolution.
