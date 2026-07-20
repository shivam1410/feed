---
title: "Information-Directed Sampling for Causal Bandits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15577"
authors: ["Muhammad Qasim Elahi, Murat Kocaoglu, Mahsa Ghasemi"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2607.15577v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15577v1 Announce Type: new Abstract: Causal bandits exploit structural relationships among variables to share information across interventions and accelerate the identification of high-reward decisions. In many applications, however, some variables cannot be directly manipulated, even though they influence the reward and provide useful information about the underlying causal system. We study contextual causal bandits with non-manipulable variables, where context variables are observed before action selection and additional variables are observed after each intervention. Assuming a known causal graph without latent confounding, we adopt a Bayesian formulation in which the conditional probability tables of the observational distribution constitute the unknown parameter. This representation allows observations collected under one intervention to update reward estimates for other interventions through their shared causal mechanisms. We develop causal variants of Thompson Sampling and Information-Directed Sampling (IDS) for this setting. For Thompson Sampling, we establish an entropy-dependent sublinear Bayesian regret bound. For IDS, we derive an entropy-dependent regret bound that explicitly quantifies the additional error introduced by Monte Carlo approximation of the expected regret and information gain; when these quantities are available exactly, the bound recovers the standard sublinear IDS rate. We further provide high-probability confidence bounds for the Monte Carlo estimates used by the algorithm. Experiments on several synthetic causal bandit tasks show that the proposed methods outperform causal and non-causal baselines by more effectively exploiting information shared across interventions.
