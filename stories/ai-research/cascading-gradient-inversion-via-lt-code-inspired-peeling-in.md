---
title: "Cascading Gradient Inversion via LT-Code Inspired Peeling in Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09659"
authors: ["Saeed Shariati, Mohsen Alambardar Meybodi"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.09659v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09659v1 Announce Type: new Abstract: Federated learning shares model updates rather than raw data, yet these updates can be inverted to reconstruct the clients' training data. Analytic reconstruction attacks, which invert a gradient in closed form, degrade as the batch grows: prior single-round attacks recover only about half of a batch of size $100$ even when the attacker fully controls the network parameters, and known upper bounds limit what any such method can recover. We establish a connection between gradient inversion and the theory of erasure-correcting codes, and use it to construct attacks that exceed these bounds. Our attacks recover batches exactly, together with every sample's label, from a single FedSGD round, and certify each recovery without ground-truth data. On eight image and tabular benchmarks they outperform prior single-round attacks by a wide margin. Even a passive attacker who only observes an honestly trained network recovers $94$--$100\%$ of ImageNet batches at sizes up to $128$, more than prior single-round attacks achieve even with active manipulation of the model, and in the active setting more than $90\%$ is recovered at batch sizes of several hundred. These results show that the privacy leakage of federated learning has been underestimated.
