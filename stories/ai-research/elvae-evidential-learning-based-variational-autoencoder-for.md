---
title: "ELVAE: Evidential Learning-Based Variational Autoencoder for Uncertainty-Aware Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10398"
authors: ["Ge Wang"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.10398v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10398v1 Announce Type: new Abstract: Variational autoencoders generate samples from probabilistic latent representations but do not distinguish uncertainty about the latent location from variability around it. We formulate ELVAE, an evidential learning-based VAE in which each latent coordinate is governed by an input-dependent normal-inverse-gamma posterior. This hierarchy yields an explicit latent-location uncertainty that can be used during generation, not merely reported after inference: low-uncertainty anchors support more reliable synthetic samples, while high-uncertainty anchors can be deliberately exploited for stress testing. The objective is an exact evidence lower bound, and we show that direct regularization of the full hierarchy is required, since the marginalized latent law alone cannot identify the uncertainty decomposition. In an MNIST generation pilot with a frozen external classifier, this uncertainty clearly stratified the semantic reliability of generated digits. A zero-displacement control revealed that most of the effect reflects how reliably an anchor can be re-generated, while a smaller but distinct component is attributable to uncertainty-scaled perturbation itself. The effect holds only under within-class uncertainty ranking, and its magnitude varies across seeds. These findings support the learned latent-location uncertainty as a practical control variable for uncertainty-aware generation, separating anchor reliability from perturbation-induced failure.
