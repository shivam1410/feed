---
title: "What Must Replay Preserve? Separating Correctable Bias from Class Correspondence"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07077"
authors: ["BoRen Deng, Xiangyue Ma, Chenglong Li, Xiaoting Du"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.07077v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Class-incremental learning must recognize all classes seen so far without task labels. Logit replay methods such as DER and DER++ mitigate forgetting by matching the model's past predictions on stored examples. Deleting this matching reveals its benefit, but the resulting accuracy cost cannot show whether the stored scores themselves are needed, or whether the cost survives correction of the classifier's bias toward recent classes. We propose a diagnostic framework that treats a cached prediction as temporally heterogeneous supervision: it separates classes known when an example was stored from classes learned afterward, edits each group, and evaluates every model before and after a task-level offset that leaves within-task predictions unchanged. On CIFAR-100 with DER++, suitable fixed constants replace the unrefreshed stored scores of later-learned classes within an equivalence margin of 1 percentage point, and the offset reduces the cost of deleting their matching from 14.9 to 1.8 points. Reassigning the non-gold scores of classes known at storage, which preserves their values and each task's target probability, costs 4.3 points before and 4.0 after the offset, and a parallel cost persists in image distillation. In the tested fixed-head setting, the large cost of deleting later-class matching is thus mostly correctable by this offset, whereas the smaller cost of disrupting class correspondence persists. Code and data are available at anonymous.4open.science/r/replay-preserve-E22B.
