---
title: "Closed-Loop Graph Algorithm Execution with Small Language Models: Step Accuracy and Rollout Reliability"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24980"
authors: ["Michal Podstawski"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.24980v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24980v1 Announce Type: new Abstract: Small language models offer an efficient alternative to large-scale systems, but their ability to execute structured algorithms over multiple dependent decisions remains poorly understood. We study graph algorithm execution as a closed-loop prediction problem in which a model repeatedly selects the next action from the current graph and algorithmic state. Our evaluation framework covers several classical graph procedures, multiple synthetic graph families, and disjoint training, validation, and test partitions. It assesses both local decision quality and global execution behaviour using step accuracy, exact rollout accuracy, constraint validity, partial solution quality, prefix survival, and intervention-based diagnostics. The results show that adaptation can produce reliable policies for structural procedures such as traversal and coloring, while weighted algorithms remain substantially more sensitive to error accumulation. More broadly, the findings demonstrate that strong next-step prediction does not necessarily translate into reliable autonomous execution and motivate evaluating algorithmic language models through complete closed-loop rollouts rather than isolated decisions.
