---
title: "CRAD: Class-wise Reliability-Aware Distillation for Decentralized Heterogeneous Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00446"
authors: ["Baraa Bilbeisi, Mengchen Fan, Baocheng Geng, Qing Tian"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.00446v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00446v1 Announce Type: new Abstract: Conventional federated learning (FL) relies on parameter averaging, which forces clients to be doubly homogeneous: it demands an identical architecture and degrades under non-IID data. Real-world deployments usually break both assumptions. We sidestep both by building a decentralized knowledge distillation framework in which each client evaluates its peers' model snapshots on its own local data and distills from the resulting soft predictions. Because knowledge is transferred through the shared class posterior, clients are free to run different architectures; and because every teacher is evaluated on the student's own device, raw data never leaves the client, with no central server or public dataset required. Within this setting, we identify and address an under-examined problem: how to combine the peer teacher predictions. Existing methods, like uniform averaging, ignore how knowledge reliability varies across teachers and classes. We propose Class-wise Reliability-Aware Distillation (CRAD), which, per class, first discards teachers that disagree with the peer consensus and then takes a weighted average of the rest, weighting each teacher by its per-class reliability (precision, or inverse variance). Since the variance of an accuracy from $n$ samples scales as $1/n$, support enters automatically: among the teachers that survive filtering, a teacher is trusted for a class to the degree that it is both accurate and well-evidenced for it. On three image-classification benchmarks (CIFAR-10, CIFAR-100, and PathMNIST colon pathology), across heterogeneous architectures under severe non-IID skew, CRAD consistently outperforms competing methods in global accuracy.
