---
title: "Stein Kernelized Molecular Dynamics for Active Learning of Interatomic Potentials"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04100"
authors: ["Joanna Zou, Fraser Birks, Dallas Foster, Youssef Marzouk"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.04100v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04100v1 Announce Type: new Abstract: Machine learning interatomic potentials (MLIPs) enable efficient and accurate atomistic simulations but depend critically on the quality and diversity of the training data. We introduce Stein kernelized molecular dynamics (SKMD), an enhanced sampling method that uses interacting particle dynamics to acquire informative training configurations for the active learning and fine-tuning of MLIPs. SKMD corresponds to a stochastic variant of Stein variational gradient descent that is adapted for molecular dynamics by incorporating asynchronous particle updates and a kernel of global atomic descriptors, which provides a symmetry-aware measure of configurational similarity. Unlike other enhanced samplers used in molecular dynamics, SKMD preserves the Boltzmann distribution as the asymptotic distribution of the dynamics. This property enforces a balance between the exploration of diverse configurations and attraction toward high-probability regions of the energy landscape. We further propose an approach to efficient online data acquisition using an adaptive stopping criterion that selects non-redundant training data over the course of simulation. We demonstrate SKMD for the active learning of a neural network model of the M\"uller-Brown potential and the fine-tuning of a MACE interatomic potential for alanine dipeptide. Compared to active learning baselines, our method achieves higher model accuracy in fewer training iterations with the same number of acquired training samples.
