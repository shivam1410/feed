---
title: "Curvature Cryptanalysis of Smooth Transformer Feed-Forward Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.28843"
authors: ["Munawar Hasan, Apostol Vassilev"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.28843v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.28843v1 Announce Type: new Abstract: We show that smooth two-layer feed-forward networks (FFNs) expose an additional structural model extraction channel under a chosen-input raw-output oracle at the FFN branch; consider transformer FFN branches with GELU or SiLU activations under chosen-input raw-output access, without access to parameters, gradients, or internal activations; exploit a second-order leakage channel in which projected input Hessians form different mixtures of the same hidden symmetric rank-one factors induced by the FFN input weights. We formalize resulting Hessian collection as a partially symmetric decomposition to establish conditions for local identifiability and stability to exploit vector-output stencil reuse to reduce the structural query cost by a factor of 16. On independently trained CIFAR-10 vision transformers, only 16 projected Hessians, corresponding to 8193 black-box queries, recover the hidden FFN directions with average absolute cosine alignment above 0.94, with 95.1 % of GELU and 91.9 % of SiLU directions exceeding 0.90 alignment. Recovery remains high across independently trained models, repeated extraction runs, and all transformer blocks. The recovered structure supports functional extraction too. Keeping the recovered directions fixed and fitting only the remaining FFN parameters yields high-fidelity substitutes with more than 93 % top-1 agreement, while test accuracy remains within 0.90% and 0.62% of the GELU and SiLU targets. Output rounding and Gaussian noise substantially reduce recovery under a fixed attack configuration, but adapting the finite-difference step restores average alignment to 0.9603 and 0.9398. This is an end-to-end path from black-box second-order observations to hidden FFN-structure recovery and functional replacement. Under the stated oracle model, smooth FFN curvature exposes internal parameter geometry that behavioral fidelity alone cannot reveal.
