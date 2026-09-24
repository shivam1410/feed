---
title: "A Scaling Study for fMRI Foundation Models"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27232"
authors: ["Wenhao Ye, Xuanye Pan, Junfeng Xia, Junxiang Zhang, Mo Wang, Quanying Liu"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.27232v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27232v1 Announce Type: new Abstract: Scaling laws have guided large-model development in computer vision and natural language processing, but the relationships among data, model size, and compute remain unclear for functional magnetic resonance imaging (fMRI) foundation models. Here, we conduct a controlled empirical study using pretraining data from more than 200 source datasets and over 10,000 GPU-hours of experiments. Holding the pretraining framework and downstream protocol fixed, we vary pretraining data size, model size, and training duration. Downstream performance generally improves with compute, yet models using similar compute can perform substantially differently. Additional pretraining data bring larger gains at larger model sizes, suggesting that data and model size should be scaled together. At matched compute, increasing pretraining data benefits more tasks than increasing model size, although the pattern varies across tasks. We then use in-distribution (ID) downstream performance to select the combination of pretraining data size, model size, and training duration at two fixed compute budgets. The resulting models are locked before out-of-distribution (OOD) evaluation. They achieve the highest average performance across the evaluated OOD tasks among the compared fMRI foundation models while using less pretraining compute. Overall, our results show that compute alone does not characterize fMRI scaling: performance depends on how pretraining data, model size, and training duration are combined.
