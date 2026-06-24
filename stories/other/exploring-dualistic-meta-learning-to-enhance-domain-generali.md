---
title: "Exploring Dualistic Meta-Learning to Enhance Domain Generalization in Open Set Scenarios"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23758"
authors: ["Xiran Wang, Jian Zhang, Lei Qi, Yang Gao, Yinghuan Shi"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23758v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23758v1 Announce Type: new Abstract: Domain generalization learns from multiple source domains to generalize to unseen target domains. However, it often neglects the realistic case of label mismatch between source and target. Open set domain generalization is then proposed to recognize unseen classes in unseen domains. A simple approach trains one-vs-all classifiers to separate each class and detect outliers as unknown. Yet, the imbalance between few positive samples and many negative samples skews the decision boundary towards the positive ones, leading the model to over-reject out-of-distribution data, even from known classes in unseen domains. In this paper, we propose a novel meta-learning stategy called dualistic MEta-learning with joint DomaIn-Class matching (MEDIC), which considers implicit gradient matching towards inter-domain and inter-class task splits simultaneously to find optimal boundaries balanced for both domains and classes. Experimental results show that MEDIC not only outperforms prior methods in open set scenarios, but also maintains competitive close set generalization ability.
