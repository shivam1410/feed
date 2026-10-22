---
title: "LEAN: Loss-Engineered Modulation of the Model Weight-Sensitivity Distribution for Efficient, Error-Tolerant Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28872"
authors: ["Habibur Rahaman, Swarup Bhunia"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 22
guid: "oai:arXiv.org:2610.28872v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

The weights of a trained network do not have uniform sensitivity to model accuracy: the 1% most sensitive weights carry about a fifth of the damage a bit flip can do. This distribution decides the bit-flip tolerance of a model, the fraction of weights a code must cover and the bits each weight needs; existing schemes work with the distribution training leaves. We show that we can systematically modulate or alter the weight sensitivity distribution of a trained model, thereby shifting weights from one sensitivity bin to another. The sensitivity of a stored weight is the product of its gradient and the step a flip takes in the storage format, and LEAN adds a composite regularizer on both factors, a range term that bounds the flip step and a tail term that lowers the gradient of the most sensitive weights, with one coefficient {\lambda} setting how far the distribution moves. Ten epochs with the term, as a fine-tune or as the last epochs of training, shrink the sensitive tail 5 to 13 times on nine vision models (ResNet-18, ResNet-50, VGG-16 on CIFAR-10, CIFAR-100, ImageNet) within 0.5 points of accuracy; real flips confirm that the reshaped weights do less damage, a plain gradient-norm penalty does not reproduce the effect, and a preliminary extension to three small language models shows the same tail shaping. With a BCH code over 1% of the weights the model then survives 300 progressive bit-search flips in every training seed and 500 in two of three, where three of four published defenses with the same code fail by 300 and WCAT falls to 75% at 500. The reshaped distribution also cuts the parity for a fixed guarantee 3.7 times and makes a sensitivity-ordered 8/6/4/3-bit format affordable, which stores ImageNet ResNet-50 at a 3.29-bit weight payload, 2.4 times smaller than INT8, above the accuracy of LSQ at 3 bits.
