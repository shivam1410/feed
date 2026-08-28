---
title: "Adversarial Training Without Input Gradients via Low-Rank Householder Expansions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26963"
authors: ["Tiana C. Johnson, Donsub Rim"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2608.26963v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26963v1 Announce Type: new Abstract: This work concerns adversarial training against the small-norm adversarial examples that arise from the inherent input instability of a trained deep neural network. Examples in this class are small as measured in the relative $\ell^2$-norm, and therefore lie in the neighborhood of the input on which the model acts approximately linearly, the regime in which the perturbation remains imperceptible. We first show that such examples can be computed directly from the trained network parameters, without input gradient iterations, by means of a linearization called the low-rank Householder expansion (LRHE). The expansion describes the composed affine map rather than any individual layer, and the directions it identifies are read from the activation pattern already available in the forward pass. We then propose a simple adversarial training scheme built on this construction. No differentiation with respect to the input is performed at any point: training requires only additional forward evaluations, with weight parameters updated by the standard backward pass, and the inner maximization of the usual min-max formulation is eliminated entirely. That such a regularizer exists is our main finding: the methods that dispense with the inner search all obtain their local geometry by differentiating with respect to the input, and we show this is not necessary. The regularizer costs the equivalent of $2.8$ PGD steps per epoch, an $8.7\times$ reduction relative to 40-step adversarial training on MNIST and below the cost of 3-step training. The resulting models match three-step PGD adversarial training for relative $\ell^2$ budgets $\varepsilon \le 0.02$ and 40-step training for $\varepsilon \le 0.012$, falling away beyond, consistent with the locality of the expansion.
