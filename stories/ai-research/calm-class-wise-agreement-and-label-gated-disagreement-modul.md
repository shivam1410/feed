---
title: "CALM: Class-wise Agreement and Label-gated Disagreement Modulation for Decentralized Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05884"
authors: ["Yifan Ying, Qing Tian"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.05884v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05884v1 Announce Type: new Abstract: Conventional federated learning relies on parameter averaging, which forces clients to be doubly homogeneous: all must run an identical architecture, and accuracy degrades when local data are non-IID. Decentralized federated distillation sidesteps both: each client runs its peers' model snapshots as teachers on its own local data and distills from their soft predictions, with no server, no public data, and no shared architecture. Under severe non-IID skew, however, the trustworthiness of the aggregated teacher target is a matter of degree, yet existing pipelines make hard, all-or-nothing decisions: outlier teachers are discarded by threshold, and whatever target survives is trusted in full. We propose CALM, which replaces every hard decision with a smooth trust gate at three levels: per class, teachers are weighted by agreement with the peer consensus; per sample, distillation is scaled by the teachers' divergence from that target; and a label gate scales it by how strongly the target supports the sample's true label. None of this adds communication or auxiliary data. On CIFAR-10, SVHN, OrganAMNIST, and Google Speech Commands with heterogeneous client architectures under Dirichlet label skew, CALM consistently outperforms uniform and hard-filtered distillation and matches or exceeds competing heterogeneous-FL methods.
