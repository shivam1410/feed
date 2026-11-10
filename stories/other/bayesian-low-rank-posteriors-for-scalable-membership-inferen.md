---
title: "Bayesian Low-Rank Posteriors for Scalable Membership Inference"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10455"
authors: ["Khanh Nguyen, Antonio Emanuele Cin\\`a, Andrey Barsky, Alejandra Reinares, Fabio Roli, Dimosthenis Karatzas"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10455v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Membership inference attacks (MIAs) aim to determine whether a sample was used during the training of a target model. Strong MIAs rely on reference (or shadow) models to estimate target-conditional score distributions, but training such ensembles is computationally expensive for modern large-scale Vision--Language Models (VLMs). In this work, we propose a scalable alternative that replaces explicit reference-model training with a Bayesian approximation over low-rank adaptation parameters. Specifically, we model uncertainty only within the LoRA subspace and construct a posterior from a single training run, from which we sample a diverse set of \emph{virtual reference models}. We instantiate this approach using Stochastic Weight Averaging Gaussian (SWAG), enabling efficient approximation of target-conditional score distributions at a fraction of the cost of conventional shadow-model ensembles. We evaluate the resulting attack on three downstream-adapted VLMs across two privacy-sensitive visual question answering tasks, namely Document VQA and Medical VQA. To isolate the effect of pretraining knowledge, we additionally introduce a controlled synthetic dataset. Our approach outperforms standard reference-based attacks while requiring only a single reference-model fine-tuning run, making membership inference more practical for large VLMs.
