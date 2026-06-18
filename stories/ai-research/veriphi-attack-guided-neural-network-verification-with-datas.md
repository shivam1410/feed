---
title: "Veriphi: Attack-Guided Neural Network Verification with Dataset-Dependent Training Methods"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18454"
authors: ["Pratik Deshmukh, Kartik Arya, Vasili Savin"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.18454v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18454v1 Announce Type: new Abstract: We present Veriphi, a GPU-accelerated neural network verification system that combines fast adversarial attacks with formal bound certification using alpha,beta-CROWN methods. Through systematic experiments on MNIST and CIFAR-10 using three training methodologies (standard, adversarial, certified), we demonstrate that training method effectiveness is fundamentally dataset-dependent. Interval Bound Propagation (IBP) achieves 78% certified accuracy on simple MNIST (784 dimensions) but provides negligible certification performance on the more complex CIFAR-10 dataset, where PGD adversarial training dominates with 94% certification at small perturbations. We achieve 5x verification speedup through attack-guided falsification and scale our approach to production-size models (105.8M parameters) for real-world aerospace logistics optimization. Our results challenge the assumption that certified training universally outperforms adversarial training, showing context matters critically for verification strategy selection.
