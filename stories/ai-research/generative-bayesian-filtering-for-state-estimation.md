---
title: "Generative Bayesian Filtering for State Estimation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20521"
authors: ["Lei Cao, Sihang Feng, Jixin Yan, Tao Sun, Naichen Shi"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.20521v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20521v1 Announce Type: new Abstract: The state of a dynamic system evolves over time, switching among several latent modes that govern its observable behavior. Filtering methods infer the latent state from observations. Classical filtering approaches, including Kalman filters, typically rely on simple observation models, such as linear-Gaussian models, that are incapable of characterizing the increasingly nonlinear and heterogeneous patterns in high-dimensional sensor signals. To tackle the challenge, we propose Generative Bayesian Filtering (GBF), a filtering framework that replaces restrictive observation models with pretrained conditional generative models parametrized by conditional variational autoencoders (CVAE). For online inference, GBF performs a Bayesian prediction-update recursion in which the measurement update is formulated as a posterior sampling problem that combines the dynamical prior with the CVAE-induced likelihood. The resulting filtering problem is then transformed into a score-based sampling problem, which naturally inherits the flexibility from generative models and the uncertainty quantification capabilities from ensembling. Experiments on synthetic datasets and real-world applications involving manufacturing system monitoring and arrhythmia diagnosis demonstrate that GBF improves state estimation accuracy and robustness relative to baseline approaches.
