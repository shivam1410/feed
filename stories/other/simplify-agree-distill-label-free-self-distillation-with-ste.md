---
title: "Simplify, Agree, Distill: Label-Free Self-Distillation with Stepping Stones"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18916"
authors: ["Dingyang Chen, Jinfeng Xiao, Zhenyu Zhang, William Hu, Ziyu Wang, Yang Liu, Shirley Zhang, Yuan Ling, Xinyang Shen, Qi Zhang, Peijie Qiu"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18916v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Can a language model teach itself to reason without labels? On-policy self-distillation (OPSD) uses the model as its own teacher, but strengthens that teacher with a ground-truth solution. The natural label-free substitute, voting over the model's attempts, fails precisely on hard problems: attempts disagree, and their most common answer is often wrong. We propose STONE, a label-free alternative that moves agreement to easier related problems. The model writes these stepping stones, keeps those it solves consistently, and shows the teacher their worked solutions, with final answers removed; the student sees only the original problem. No step reads a label, and inference needs no extra context or model calls. Across five math benchmarks, the proposed method achieves the highest average accuracy for Qwen3-4B and Qwen3-8B in thinking mode. Without thinking mode, it gains 13.2 and 22.7 points, 2.5 and 2.7 times the gains of OPSD with ground-truth solutions.
