---
title: "PPT-Eval: A Benchmark for Computer-Use Agents on PowerPoint Tasks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31154"
authors: ["Apurva Gandhi, Vishwas Suryanarayanan, Raja Hasnain Anwar, Firoz Shaik, Shubhang Desai, Thong Q. Nguyen, Muhammad Taqi Raza, Vishal Chowdhary, Graham Neubig"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.31154v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31154v1 Announce Type: new Abstract: Creating and editing slides is a rich, multimodal activity that is ubiquitous in professional and educational settings, making it an ideal testbed for real-world computer-use agents. Microsoft PowerPoint is among the most widely adopted and feature-rich environments for presentation creation. We introduce PPT-Eval, a benchmark of 120 PowerPoint tasks across 12 files that cover both content creation and presentation editing scenarios, organized by difficulty. A central challenge in this domain is evaluation: tasks are complex, multimodal, and often admit many valid solutions. Moreover, today's agents frequently make only partial progress, which binary success metrics fail to capture. To address this, we design a robust evaluation framework to help create task-specific rubrics for PowerPoint tasks, taking inspiration from and building on past works for rubric-based evaluation. These rubrics award partial credit for intermediate steps, penalize unnecessary changes and poor aesthetics, and provide natural language feedback. This nuanced approach proves highly effective, achieving a Kendall's {\tau}-b correlation of 0.77 with human judgments. We find that existing frontier agents still struggle with solving PowerPoint tasks, with strong models like Claude-4.5-Opus achieving only a 45% success rate and an average partial score of 57%. The benchmark is located at: https://microsoft.github.io/ppteval.
