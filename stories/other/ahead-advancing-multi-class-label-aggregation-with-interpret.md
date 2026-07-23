---
title: "AHEAD: Advancing Multi-Class Label Aggregation with Interpretable Cross-Annotator Modeling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18465"
authors: ["Ju Chen, Sijia Xu, Jun Feng, Zhiqiang Gao, Zhengyi Yang"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18465v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18465v1 Announce Type: new Abstract: Crowdsourced labeling provides valuable labeled data for domains across natural language processing, computer vision, and video. Label aggregation aims to infer latent true labels from noisy and biased annotations, with the key lying in annotator reliability estimation. Despite promising progress, existing approaches struggle with one real-world bottleneck: most individual annotators label only a small subset of tasks, making accurate annotator estimation highly intractable. In this paper, we focus on the considerably more challenging multi-class label aggregation and propose AHEAD (cross-Annotator learning and High-confidEnce Annotator-guideD label aggregation), a cross-annotator learning framework that advances annotator reliability estimation by leveraging the population-level data. Specifically, AHEAD first learns high-dimensional cross-annotator contexts via a graph neural network, deriving multi-view, complementary annotator embeddings by aggregating individual-level annotator features with contextual information. These embeddings are then decoded into interpretable annotator-specific confusion matrices to fit the observed labels. We formulate a composite objective incorporating high-confidence annotators to alleviate the unsupervised training issues faced by prior models. Experiments on 10 real-world datasets spanning NLP, CV, Video, and Audio show that AHEAD substantially improves label accuracy, increasing average accuracy from 68.75% to 73.23%, with gains of up to 14.9% in the best case. Meanwhile, scalability experiments on the largest dataset further demonstrate the overall superiority of our method.
