---
title: "Catastrophic Compositional Generation: Why Vanilla Diffusion Models Fail to Extrapolate"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23920"
authors: ["Duncan Soiffer, Chandler Squires, Yuan Guan, Jason Hartford, Pradeep Ravikumar"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23920v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23920v1 Announce Type: new Abstract: The task of compositional generation involves using a conditional generative model, trained only on a subset of the possible conditions, to produce samples from compositionally-defined target distributions such as a geometric combination of the source distributions. In this work, we argue that this task is often infeasible for vanilla conditional diffusion models: we conjecture that no inference-time technique can efficiently produce samples from the target distribution in certain well-motivated settings. This idea is supported by theory-guided generalization arguments and carefully-designed experiments on both synthetic and realistic data. In particular, while recent methods such as Feynman-Kac correction reduce inference-time approximation error, our results show that score estimation error has a more catastrophic effect on performance when the target distribution is out-of-distribution with respect to the sources, highlighting the need for a different approach to this task.
