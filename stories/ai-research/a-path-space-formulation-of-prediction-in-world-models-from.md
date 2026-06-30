---
title: "A Path-Space Formulation of Prediction in World Models: From a Single Action to Prediction, Planning, and Irreversibility"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28751"
authors: ["Gunn Kim"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2606.28751v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28751v1 Announce Type: new Abstract: We propose a path-space formulation of prediction in AI world models. Rather than sequences of one-step conditional distributions, we argue that a world model implicitly defines a probability measure over future trajectories. In the local regime where latent dynamics admit an effective Markovian description, this path measure takes the Onsager-Machlup form. Within this framework, prediction (most probable trajectory), planning (constrained optimization), and uncertainty (fluctuations) emerge as operations on a single action functional. We decompose the latent dynamics into reversible and irreversible components and introduce operational measures of entropy production from model rollouts. In controlled small-scale attention-based models, we find that attention asymmetry is acquired during training in proportion to the irreversibility of the data. Symmetrizing the learned attention suppresses entropy production and selectively degrades long-horizon prediction of irreversible dynamics while preserving relaxational prediction. These results suggest that irreversibility may serve as a computational resource for predictive world models. More generally, the fundamental predictive object is a distribution over future paths rather than states.
