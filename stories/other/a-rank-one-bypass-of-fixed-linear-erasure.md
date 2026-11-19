---
title: "A Rank-One Bypass of Fixed Linear Erasure"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23880"
authors: ["Jai Kumar Sharma, Vanshaj Khattar"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23880v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Linear concept erasure can make a target unreadable to a specified family of linear classifiers applied to a model's current internal features. In an open-weight release, however, an attacker can modify the layers that produce those features. We study a fixed affine erasure layer whose upstream model is allowed to change. If the layer transmits even one direction visible to an allowed downstream classifier, the attacker can write a target score into that direction and carry it through the layer. We show that this condition is also necessary, and that for a nonconstant linear target score the required change is a rank-one affine update. Across six CIFAR-10 class-pair tasks, the route restores nearly all pre-erasure target performance and can leave a deployed benign linear head's scores unchanged to numerical tolerance. We then price the attack: with eight target labels and 2,000 unlabelled calibration examples, a 10% mean relative feature edit yields 79.8% test accuracy, which is 91.2% of the fitted score's gain over chance; tighter edit limits sharply reduce success. Linear guardedness therefore remains a valid guarantee about the current representation, but it is not by itself a tamper-resistance guarantee for an editable open-weight model.
