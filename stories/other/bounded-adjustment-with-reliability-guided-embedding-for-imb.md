---
title: "Bounded Adjustment with Reliability-Guided Embedding for Imbalanced Learning with Noisy Labels"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16380"
authors: ["Mushir Akhtar, Akarsh J., M. Tanveer, Mohd. Arshad"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16380v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16380v1 Announce Type: new Abstract: Class-balanced learning and label noise create a coupled failure mode: frequency correction prevents majority classes from dominating the decision rule, but can amplify incorrectly labeled minority examples. We introduce BARGE (Bounded Adjustment with Reliability-Guided Embeddings), a single-stage objective combining a bounded, prior-adjusted density-power score with reliability-guided angular geometry. Its classification score is strictly proper in the adjusted probability space and recovers balanced Bayes ordering under clean supervision and the true class prior. Under label contamination, its finite range bounds classification-risk perturbation at a fixed predictor, while its logit gradient redescends when the model confidently contradicts the supplied label. The adjusted target probability also weights class-equal feature compactness, and a one-sided separation term discourages aligned class directions. BARGE requires neither a noise rate nor a transition matrix, uses one network, and leaves inference unchanged. We evaluate it on CIFAR-10, CIFAR-100, and Tiny ImageNet under long-tail and step imbalance, clean labels, and 20% and 40% random incorrect-label replacement. Across 12 clean settings, BARGE ranks second overall and attains the lowest error in four. Under corruption, it achieves the lowest mean balanced error in all six dataset-corruption settings, reducing the six-setting average from 72.32% for the strongest competitor to 70.00%. It also obtains the highest macro-F1 and macro-AUPRC in every corrupted-label setting. Ablations show that class-equal angular compactness improves on the bounded score alone. These results support bounded predictive influence and reliability-guided geometry as complementary mechanisms for imbalanced learning with uncertain labels.
