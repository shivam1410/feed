---
title: "DE-Venus: A Data-Efficient RLVR Framework for Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03324"
authors: ["Shenzhi Yang, Guangcheng Zhu, Kai Tang, Zhengqing Zang, Xing Zheng, Haobo Wang, Yingfan Ma, Bowen Song, Bo Han, Bo An, Lei Feng, Weiqiang Wang, Junbo Zhao, Gang Chen"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.03324v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03324v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR) improves large language model reasoning, but its practical scaling is constrained by expensive on-policy rollouts and the cost of obtaining reliable targets at scale. Existing methods address sample selection, incomplete supervision, or noisy labels separately, often entangling supervision logic with distributed training and hindering controlled comparison and reuse. We present DE-Venus, a unified framework for data-efficient RLVR that treats supervision as evolving state across data preparation and policy optimization. It organizes this lifecycle into three modules: Active Data Selection allocates training and annotation budgets; Weak Supervision Construction derives learning signals from unlabeled examples; and Training-Time Supervision Refinement filters or corrects unreliable supervision. DE-Venus supports seven representative methods and a data-selection pipeline by expressing method-specific decisions as offline dataset transitions or online transformations of targets, rewards, batches, and advantages while preserving verl's distributed execution contracts. Across public benchmarks and three business scenarios, separate configurations preserve or improve model quality with only 10% of labels or as little as 13% of relevant data; selected business configurations also reduce observed convergence steps by 63%--75%. DE-Venus thus reduces annotation and training costs without sacrificing scalable RL execution.
