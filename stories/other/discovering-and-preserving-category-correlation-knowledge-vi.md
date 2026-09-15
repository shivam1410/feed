---
title: "Discovering and Preserving Category Correlation Knowledge via Adaptive Reciprocal Knowledge Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13199"
authors: ["Dawen Jiang, Zhishu Shen, Zeyu Liu, Tiehua Zhang"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13199v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13199v1 Announce Type: new Abstract: Knowledge distillation aims to improve the performance of lightweight student models by transferring knowledge from larger and more powerful teacher models. However, a substantial size gap between teacher and student models often impedes effective knowledge transfer. Most existing approaches adopt a static, one-way teacher-to-student distillation paradigm, which overlooks the dynamic nature of student learning and fails to provide targeted guidance on hard samples. In this paper, we propose adaptive reciprocal knowledge distillation (AR-KD), a novel method that improves knowledge transfer by simplifying the teacher's output distribution. Specifically, AR-KD performs reciprocal adaptation on the teacher by matching its class correlation matrix to the student's relational representation, which reshapes the teacher's prediction structure to better suit the student's capacity. This relational alignment mitigates the collapse of inter-class dark knowledge caused by overconfident teachers, enabling the student to learn from richer and more compatible supervisory signals. We evaluate AR-KD on CIFAR-100 and ImageNet-1k classification datasets, where it outperforms state-of-the-art knowledge distillation baselines. Specifically, AR-KD improves student performance across homogeneous and heterogeneous setups: up to 7.13% accuracy gain for students, 1.42% to 4.15% higher than vanilla KD on average, and further improvements when integrated with other advanced methods. Our code is available at https://anonymous.4open.science/r/ARKD/.
