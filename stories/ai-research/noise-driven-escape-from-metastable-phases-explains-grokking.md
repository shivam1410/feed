---
title: "Noise-Driven Escape from Metastable Phases explains Grokking in Deep Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17120"
authors: ["Ibrahim Talha Ersoy, Karoline Wiesner"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2606.17120v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17120v1 Announce Type: new Abstract: Deep neural networks (DNNs) exhibit first order phase transitions under variations of the L2 regularization strength, with each transition marking the onset of a new learnable feature. Below a critical regularization strength, all features are in principle learnable, but coexisting metastable states, separated by energy barriers, can trap the network and impede convergence. A strength of DNNs is their ability to generalize. But many open questions remain, among them the origin of so called grokking: the abrupt, delayed onset of generalization after prolonged apparent overfitting. We show for linear DNNs that grokking is consistent with hysteresis in first-order L2 phase transitions: using L2 regularization to engineer deliberate trapping, we demonstrate that a model in a low-accuracy metastable state escapes only when SGD noise drives it across an energy barrier, with escape times following Arrhenius scaling. We reproduce grokking-like delayed convergence across two orders of magnitude in escape time by deliberately trapping models in metastable phases. Using sparse sub-sampling we also reproduce the canonical grokking curve where test error eventually approaches the final training error. Our work suggests that the number of metastable states equals the number of learnable features -- one per singular value of the data covariance -- the potential for hysteresis grows naturally with task complexity. We provide evidence that the same mechanism likely operates in general nonlinear DNNs. Our results provide routes toward more efficient learning schemes.
