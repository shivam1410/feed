---
title: "Diversity-Driven Offline Multi-Objective Optimization via Nested Pareto Set Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15115"
authors: ["Yiyi Zhu, Yaolin Wen, Xiang Xia, Xin An, Hanyi Si, Xiang Shu, Yangde Fu, Liang Dou, Hong Qian"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.15115v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15115v1 Announce Type: new Abstract: Multi-objective optimization (MOO) has emerged as a powerful approach to solving complex optimization problems involving multiple objectives. In many practical scenarios, function evaluations are unavailable or prohibitively expensive, necessitating optimization solely based on a fixed offline dataset. In this setting, known as offline MOO, the goal is to find out the Pareto set without access to the true objective functions. This setting suffers from the out-of-distribution (OOD) issue, where the surrogate model is not accurate for unseen designs. Due to the OOD issue, surrogate errors may cause the optimizer to select solutions that do not lie on the true Pareto front and are biased toward its extremes. To address this, this paper proposes Diversity-driven Offline Multi-Objective Optimization (DOMOO), which aims to find out a diverse and high-quality set of solutions. First, DOMOO incorporates an accumulative risk control module that estimates the potential risk of candidate solutions and alleviates the OOD issue between the training data and the generated solutions. In addition, a nested Pareto set learning (PSL) strategy is proposed to jointly learn preference and PSL parameters, then optimize them, enabling adaptation to diverse Pareto front geometries. To further enhance solution quality, we design a diversity-driven selection strategy that extracts a representative and well-distributed set of final solutions. To achieve this diversity-driven selection strategy, we propose $\text{IGD}_\text{offline}$, a tailored indicator for the offline setting that considers both diversity and convergence, and avoids the bias of hypervolume indicator. Extensive experiments on synthetic and real-world benchmarks show that DOMOO achieves the best average rank across tasks in both convergence and diversity among the compared methods.
