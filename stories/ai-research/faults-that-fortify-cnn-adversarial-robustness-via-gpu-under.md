---
title: "Faults That Fortify: CNN Adversarial Robustness via GPU Undervolting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20572"
authors: ["Behnam Omidi, Ahmad Tahmasivand, Husam Alsyouri, Saba Al-Sayouri, Chongzhou Fang, Ihsen Alouani, Khaled N. Khasawneh"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2608.20572v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20572v1 Announce Type: new Abstract: Convolutional Neural Networks (CNNs) face a dual challenge: vulnerability to adversarial attacks and prohibitive training cost. Adversarial training is effective but expensive, a burden that grows as learning shifts to the energy-constrained edge. This paper addresses both through GPU undervolting during training. Reducing supply voltage introduces stochastic perturbations that act as implicit regularization, improving robustness while lowering power. We characterize undervolting-induced faults at the bit level, then train LeNet, VGG-6, and MobileNetV3 on MNIST and CIFAR-10 under two training regimes, standard and adversarial, each at nominal and undervolted voltage, and evaluate all models against adversarial attacks. In both regimes, the undervolted model consistently achieves higher adversarial accuracy than its nominal-voltage counterpart, showing that hardware-induced faults strengthen even adversarial training. Because dynamic power scales quadratically with supply voltage, these robustness gains arrive with substantial energy savings. GPU undervolting is therefore a readily deployable hardware-level defense requiring no algorithmic change, and opens a promising direction in which robustness and energy efficiency move together.
