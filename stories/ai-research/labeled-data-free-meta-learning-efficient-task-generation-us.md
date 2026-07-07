---
title: "Labeled-Data-Free Meta-Learning: Efficient Task Generation Using Pre-trained Models and Unlabeled Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02850"
authors: ["Lei Sun, Yusuke Tanaka, Tomoharu Iwata"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.02850v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02850v1 Announce Type: new Abstract: Meta-learning without labeled data is crucial for real-world applications, where obtaining labeled datasets can be expensive or restricted due to privacy concerns. Data-Free Meta-Learning (DFML) addresses this challenge by leveraging pre-trained models without access to training data. However, existing DFML methods rely on model inversion to generate training data, a process that is generally difficult and computationally expensive due to the need to generate high-dimensional data matching the original distribution. To address this limitation, we propose a novel meta-learning setting that avoids model inversion by jointly leveraging pre-trained models and unlabeled data. Our method generates meta-training tasks by assigning soft labels from pre-trained models to unlabeled data. Since the quality of these tasks can vary, we introduce a task-weighting mechanism based on task confidence and class distribution balance to ensure effective meta-learning. Extensive experiments demonstrate that our approach substantially reduces computational cost and improves generalization, achieving up to 104-fold speedup and 8.4 percent to 36.4 percent improvements in few-shot classification accuracy compared to state-of-the-art DFML methods.
