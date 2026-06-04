---
title: "Neural Galerkin Normalizing Flows for Bayesian Inference of Diffusions with Inaccessible Boundaries"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04324"
authors: ["Riccardo Saporiti, Fabio Nobile"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.04324v1"
image: ""
generated: "2026-06-04T19:29:25+05:30"
---

arXiv:2606.04324v1 Announce Type: new Abstract: One of the primary challenges in Bayesian inference on the parameters of a diffusion model from discrete observations is the unavailability of an analytical expression for the transition density function between consecutive observation times, which is needed to derive the likelihood function. Extending previous studies that solve Fokker-Planck (FP) type partial differential equations with Normalizing Flows, we propose a new Normalizing Flow architecture to learn the transition density function of the diffusion process between two observation times. We do so by solving in a Neural Galerkin framework the associated FP equation with a Dirac mass as initial condition, over a specified training distribution of the initial datum and the coefficients of the diffusion. We specifically focus on processes whose diffusion matrix vanishes in certain inaccessible boundary regions, such as Stochastic Volatility models that satisfy a Feller condition. The product of the obtained transition densities evaluated along the observed trajectory approximates the likelihood function, thereby enabling cheap posterior sampling via Markov chain Monte Carlo (MCMC). After the offline training phase, inference becomes significantly more efficient, as it avoids the need to solve the FP equation in real time for each parameter proposed by the MCMC sampler or to rely on other likelihood-free methods for Bayesian inference that involve repeated simulation of diffusion bridges.
