---
title: "Rethinking Data Selection: The Importance of Coverage over Difficulty in LLM Fine-Tuning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07323"
authors: ["Lalchand Pandia, Kanishka Misra, Allyson Ettinger"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07323v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Selecting high-quality training data can reduce computation cost for LLM fine-tuning. Prior work on data selection developed a variety of difficulty-based scores, motivated by the intuition that harder examples are more informative. While effective for smaller classification models, we find that such methods often fail to outperform random selection for LLM fine-tuning. Our analysis reveals that random selection performs better because it is more representative of the underlying input space---i.e., has better coverage. To validate the importance of coverage, we implement a simple clustering-based selection method which selects data that is more representative of the underlying input distribution. On a set of diverse single-domain tasks, this method yields performance at or above that of random selection. On the diverse, multi-domain T\"{u}lu 3 mixture, where random sampling no longer guarantees a balanced subset, our method outperforms all methods. Overall, our results indicate that prioritizing coverage over difficulty leads to more effective data selection for LLM fine-tuning.
