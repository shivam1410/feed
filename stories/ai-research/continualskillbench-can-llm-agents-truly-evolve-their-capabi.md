---
title: "ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.03874"
authors: ["Tianyi Guan", "Yiding Wang", "Haotong Yang", "Siyuan Cao", "Shirui Liu", "Yi Hu", "Jiaqi Li", "Muhan Zhang"]
date: "2026-08-03T20:00:00.000Z"
score: 70
guid: "2608.03874"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.03874.png"
generated: "2026-08-05T20:00:21+05:30"
---

Modern agent frameworks equip large language models with external skill libraries to solve complex tasks. However, it remains unclear whether these systems can effectively evolve their skills and whether the resulting skills improve task-solving capabilities. To bridge this gap, we introduce ContinualSkillBench, a dynamic evaluation framework for in-context continual skill learning. It covers five representative domains, each containing 100 interconnected subtasks ordered by increasing difficulty and opportunities for cross-task skill reuse. Our experiments show that sequential execution generally improves performance, but the gains vary substantially across models and domains. Moreover, in-context learning performs comparably to explicit skill maintenance on average, suggesting that much of the improvement arises from adaptation to prior context and feedback rather than reusable skill abstraction alone. Explicit skills nevertheless provide selective benefits for tasks requiring reusable procedures or precise outputs. We further find that less capable models tend to accumulate larger, more fragmented collections of task-specific skills. These findings show that current in-context skill evolution mechanisms can support continual adaptation, but still struggle to consistently consolidate experience into robust and transferable skills.
