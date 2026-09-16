---
title: "Skeletal Prototypes on Iterative Nerve Expansions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16170"
authors: ["Jordan Eckert, Henry Schenck"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16170v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16170v1 Announce Type: new Abstract: Prototype reduction replaces a training set with a smaller representation, and the established methods return a finite set of points. We propose Skeletal Prototypes on Iterative Nerve Expansions (SPINE). The model for each class is an embedded 1-complex rather than a point set. Its initial edge set is a class-conditional Mapper graph, so the data decide which localized clusters are joined. Later phases fit the vertices under a classification objective, and an observation is assigned to the class whose complex is nearest. The segments therefore enter the decision rule and not only the fitting. We evaluate SPINE on seventeen benchmark datasets under stratified 10-fold cross validation, against seven other prototype reduction methods at a matched budget. SPINE attains the highest mean accuracy and the best average rank. It is significantly better than five of the seven competitors under Wilcoxon signed-rank tests with Holm correction. A budget sweep shows that the decision rule using the entire graph segments contribute most when prototypes are scarce, while the method as a whole competes best at moderate budgets. Construction cost places SPINE with the discriminative methods, and it is faster than generalized learning vector quantization on fourteen of the seventeen datasets.
