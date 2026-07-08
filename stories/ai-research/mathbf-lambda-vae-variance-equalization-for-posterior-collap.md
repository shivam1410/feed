---
title: "$\\mathbf{\\lambda}$-VAE: Variance Equalization for Posterior Collapse"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05531"
authors: ["Girum Demisse"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.05531v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05531v1 Announce Type: new Abstract: Variational Autoencoders (VAEs) frequently suffer from posterior collapse, a failure mode in which the approximate posterior converges to the prior, rendering the latent code uninformative. Despite extensive research, a unified account of why collapse occurs has remained an open question. We identify and formalize two logically independent but coupled causes. \emph{Gradient imbalance} occurs when the decoder's reconstruction signal vanishes faster than the $\mathbb{KL}$ regularization pressure as the posterior widens. \emph{Information gap} occurs when the stochastic sampling step discards a substantial fraction of the encoder's computed representation, attenuating decoder sensitivity and making collapse inexpensive. Both causes share the same collapse trajectory, and we show that the information gap is algebraically equivalent to mismatch between the aggregate posterior and the prior, unifying two pathologies. Subsequently, we introduce $\lambda$-VAE, which resolves both causes through a single modification to the reparameterization step: the sampling noise is scaled by per-dimension exponent, while the $\mathbb{KL}$ penalty retains the original posterior variance. This asymmetry shifts the stable training attractor away from the degenerate collapsed state, driving all latent dimensions toward the same equilibrium -- a mechanism we term \emph{variance equalization}. A closed-form optimal exponent per dimension follows from a net information gain objective, with a single hyperparameter controlling the reconstruction-generation tradeoff. We validate on standard benchmarks (Binary MNIST, Binary Omniglot, CIFAR-10, CelebA-64), showing consistent reductions in collapsed dimensions, information capacity gains of up to $2.8\times$ nats, and reconstruction quality improvements of up to $+0.33$ BPD.
