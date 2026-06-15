---
title: "Deep Spectral Learning of Embedded Latent Transfer Operators for Stochastic Dynamical Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14079"
authors: ["Ryogo Tanaka, Yoshinobu Kawahara"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2606.14079v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14079v1 Announce Type: new Abstract: We propose a spectral learning method for stochastic nonlinear dynamical systems represented with embedded latent transfer operators in deep feature spaces. We instantiate the method as Deep Spectral Encoder (DSE), an operator-based latent state-space model in which a time-invariant neural encoder implements learnable nonlinear feature maps from observations, and these features define Markovian latent states whose temporal evolution and observation mapping are described by the transfer and observation operators, respectively. Functional canonical correlation analysis in a learnable Galerkin-projected feature space provides state coordinates from past and future observations, and the two linear operators are estimated on the state coordinates as ridge-regularized closed-form solutions that coincide with Galerkin projections of the associated covariance operators. On this representation, we generalize sequential Bayesian filtering and Koopman spectral mode decomposition in feature space. Experiments on several scenarios show stable and superior performance with sequential Bayesian filtering and dynamic mode decomposition baselines even under noise and partial observability.
