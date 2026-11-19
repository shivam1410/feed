---
title: "DuoCL: Dual-Path Online Continual Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23598"
authors: ["Jebacyril Arockiaraj, Dhruv Parikh, Rajgopal Kannan, Viktor Prasanna"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23598v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Online continual learning (OCL) requires learning from a data stream whose arrival rate is independent of model training speed. When training cannot keep pace, computationally expensive gradient-based methods update less frequently, limiting adaptation. Analytic methods reduce this overhead, but their frozen backbones cannot adapt representations to changing distributions. We propose DuoCL, a dual-path OCL framework whose fast analytic path accumulates feature statistics from every incoming minibatch while its slow path periodically adapts the backbone. The slow path adjusts its sample count to the available compute budget without interrupting fast-path learning. Feature alignment compensates for drift in the accumulated classifier statistics. Across four datasets and three computational budgets, DuoCL improves online accuracy by an average of 9.67 percentage points over the strongest gradient-based baseline in each setting. DuoCL consistently outperforms analytic learning under distribution shifts, with gains of up to 4.00 percentage points on CIFAR-C, and achieves higher accuracy than prior methods across disjoint class-incremental, domain-incremental, and Si-Blurry settings.
