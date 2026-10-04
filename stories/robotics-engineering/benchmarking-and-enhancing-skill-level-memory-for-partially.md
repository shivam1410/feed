---
title: "Benchmarking and Enhancing Skill-Level Memory for Partially Observable Robotic Manipulation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.38886"
authors: ["Yansong Shi", "Jiange Yang", "Xijie Yang", "Shaowei Zhang", "Yuhan Zhu", "Tao Lu", "Limin Wang"]
date: "2026-09-29T20:00:00.000Z"
score: 68
guid: "2609.38886"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.38886.png"
generated: "2026-10-04T19:07:43+05:30"
---

Recent advances in robot learning have enabled manipulation policies to perform increasingly diverse tasks and generalize across environments. However, reliable execution often depends on hidden task states that cannot be determined from current observations alone, making interaction history essential. We introduce HIDE, a benchmark for evaluating manipulation memory under partial observability. HIDE comprises 15 tasks covering repetition counting, historical-state recall, and execution-progress tracking, with randomized initial configurations and decision points where similar observations require different actions depending on prior events. We further propose SEEK, a framework combining three complementary memory mechanisms to retain historical evidence and track execution state. Evaluations reveal substantial limitations in existing policies on HIDE, while memory augmentation improves task success in both simulation and real-world experiments. Individual mechanisms benefit some tasks but can degrade others; their combination achieves the highest average success rate on HIDE among the evaluated configurations. These findings highlight the importance of maintaining internal representations of hidden task states and matching memory design to task-specific information requirements.
