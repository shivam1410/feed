---
title: "Local Evidence and Geometric Readout Repair in Trained GNNs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27092"
authors: ["Nadi Tomeh, Hugo Attali"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2609.27092v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27092v1 Announce Type: new Abstract: Many node-classification GNNs apply a linear classifier to a nonnegative mixture of local messages. An error can reflect either poor mixture weights or a reachable logit set poorly positioned for the classifier. We separate these causes with an exact-mass linear program and two learned post-hoc repairs. Every reweighted prediction has an equivalent centered logit translation, but only translations in a message-induced displacement set are realizable by reweighting. Across eight datasets, eight GNN backbones, and ten splits, mean accuracy rises from 62.6% for the frozen models to 63.8% with reweighting and 65.3% with set-conditioned translation. A parameter-matched node-only translator reaches 64.6%, showing that translation explains most of the gain while the message set supplies a smaller additional benefit. Although oracle reweighting can correct many errors, label-free reweighting captures little of this potential: local evidence is often present but hard to select, and relaxing the evidence constraint is more effective than learning within it.
