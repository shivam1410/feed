---
title: "CellRFT: Reinforcement Fine-Tuning for Single-Cell Perturbation Modeling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19970"
authors: ["Jie Yan, Li Liu, Hanze Guo, Jiaxin Hu, Houxin He, Xiaoning Qi, Haoran Wang, Cong Li, Zhong-Yuan Zhang, Yong Wang"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19970v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19970v1 Announce Type: new Abstract: Predicting cellular responses to perturbations supports the study of gene function, disease mechanisms, and therapeutic strategies. Despite advances in single-cell perturbation modeling, existing models typically optimize surrogate losses that do not directly reflect the biological criteria used for evaluation, so better data fitting need not yield better biological predictions. To address this mismatch, we introduce \textbf{CellRFT}, a reinforcement fine-tuning framework that uses biological evaluation as direct training feedback. CellRFT uses policy-gradient optimization to learn from non-differentiable evaluations of generated cell populations and integrates multiple biological rewards through hierarchical reward aggregation. Comprehensive experiments demonstrate CellRFT's applicability across different pretrained models and effectiveness in improving perturbation prediction, reveal that optimizing one biological criterion can help or hinder others, and show that complementary rewards can improve criteria beyond those directly optimized, offering a way to probe how biological metrics shape model behavior, with the potential to inform evaluation design. Code will be made available.
