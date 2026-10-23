---
title: "Edit, Don't Imitate: Minimal-Edit On-Policy Distillation for Multimodal Reasoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30231"
authors: ["Wen Ye, Ailin Deng, Zirui Wang, Shixing Yu, Han Zhang, Tian Yun, Nikhil Mehta, Tarun Kalluri, Xuefei Cao, Xuezhe Ma, Hengduo Li"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.30231v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Visual mathematical reasoning can fail before reasoning begins: when a vision-language model (VLM) misreads a diagram, subsequent reasoning proceeds from false premises. This perceptual bottleneck is especially pronounced in smaller models, while accurate textual descriptions can substantially narrow the gap to larger models. Because obtaining such descriptions at inference requires additional annotation or model calls, we propose minimal-edit corrective on-policy distillation. Using reference figure descriptions and verified reference solutions as training-only information, a teacher scores incorrect student rollouts under a minimal-edit objective, and only teacher-disfavored tokens contribute to the corrective loss. Correct rollouts receive task-reward reinforcement learning. This preserves on-policy supervision while avoiding full-response imitation. Across model scales, the method requires no descriptions at test time and meets or exceeds the corresponding base model supplied with a reference figure description at inference. It also improves perception-oriented performance, particularly low-level geometric perception, and transfers to external mathematics and perception benchmarks. Because the minimal-edit teacher evaluates corrections rather than generating its own solution, the method remains effective with a frozen same-size teacher, although its gains are smaller than with a larger teacher on most metrics.
