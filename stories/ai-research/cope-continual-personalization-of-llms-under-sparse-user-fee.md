---
title: "COPE: Continual Personalization of LLMs under Sparse User Feedback via User Embeddings and Self-Evaluation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.26853"
authors: ["Ruike Cao, Fugen Yao, Liang Dong, Jian Xu, Guanjun Jiang, Li Xiao"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.26853v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.26853v1 Announce Type: new Abstract: While Large Language Models (LLMs) have achieved remarkable results across various benchmarks, their alignment with normative values often results in homogenized responses that fail to address diverse user preferences. Existing training-free methods often occupy valuable context windows through prompt engineering, while training-based methods typically remain static post-training, failing to support the continual optimization required in real-world settings. To address these challenges, we propose COPE (Continual Optimization with Personalized embedding and self-Evaluation), a novel optimization framework tailored for real-world-motivated interaction settings with sparse user feedback. Our framework assigns learnable personalized embeddings to each user and synergistically integrates preference capture, self-evaluation calibration, and personalized response optimization within a single update step. A key innovation of our method is the use of self-evaluation to generate proxy rewards, enabling continuous model updates even when explicit user feedback is unavailable. Experiments show that COPE consistently outperforms strong training-free and training-based baselines under sparse feedback, and remains complementary to Retrieval-Augmented Prompting (RAP). Further analyses confirm COPE's reliable self-evaluation, meaningful preference patterns, stable general capabilities, and robustness under shifting preferences and alternative evaluators.
