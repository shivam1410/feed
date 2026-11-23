---
title: "Improving the Optimisation Landscape for Particle Mixtures"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26931"
authors: ["Yan Lin, David T. Frazier, Paula Cordero Encinar, Chris J. Oates"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.26931v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Several methods in statistics and machine learning represent a predictive distribution as an equally weighted mixture of models, or particles, trained via the mixture predictive likelihood. However, we prove that the mixture predictive likelihood is poorly suited to gradient-based optimisation, because it does not identify how the mixture is decomposed across particles, so that a poorly matched particle can be starved of training signal. As a remedy, we study a convex combination between the individual risk, i.e. the average log loss of the individual particles, and the mixture risk. At the particle level, this regularised risk imposes a reverse-KL barrier on the responsibilities of the particles, so that no particle can be starved of training signal. These phenomena are illustrated in two case studies: In the first, a predictively-oriented posterior is computed using mean-field Langevin dynamics, and the numerics are well-behaved only when our regularisation is employed. In the second, ensembles of low-rank adapters are jointly fine-tuned on large language models, across four backbones and eight multiple-choice reasoning benchmarks; direct minimisation of the mixture risk leads to responsibility starvation, whose severity decreases as the competence of the backbone increases, whereas our regularised estimator attains a lower held-out mixture risk on every backbone considered.
