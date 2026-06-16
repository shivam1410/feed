---
title: "GRAPE: Guided Parameter-Space Evolution for Compact Adversarial Robustness"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14865"
authors: ["Zhiyuan Ye (University of Science and Technology of China), Xiangyu Zhou (China Mobile), Ji Qi (China Mobile), Hao Zhang (University of Science and Technology of China), Yi Zhou (China Mobile)"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.14865v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.14865v1 Announce Type: new Abstract: Adversarial Training (AT) improves neural network robustness, but most methods train a fixed parameter space from the start. This paper asks whether the order in which parameters become optimizable can affect the final robust solution, even when the final architecture or computation budget is controlled. We propose GRAPE, Guided Parameter-Space Evolution, a training framework for compact adversarial robustness. GRAPE combines parameter-space stabilization with progressive hidden expansion: it stabilizes robust optimization in the currently exposed space, gradually releases new optimizable dimensions, and uses an adversarial spectral utilization score to guide newly released capacity toward high-pressure modules. In contrast to fixed-structure AT, GRAPE treats robust model learning as a process of progressive parameter-space exposure and evolution. Under the standard $\ell_\infty$ threat model on CIFAR-10, with fixed-structure ResNet-18 AT as a controlled reference, GRAPE improves PGD-20 robust accuracy from 51.70% to 56.94% at a nearly matched computation budget with a FLOPs ratio of 1.009x, while reducing parameter count by about 21.4%. A sequential grow variant with the same final ResNet-18 architecture reaches 56.52% PGD-20 robust accuracy, indicating that the gain is not only due to final architecture differences but also to the parameter-space exposure path. These results suggest that guided parameter-space evolution can yield compact and robust parameter configurations under matched computation.
