---
title: "HyperODE: Zero-Shot Surrogate for Simulation and Inference of Dynamical Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00852"
authors: ["Ajitesh Srivastava"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.00852v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00852v1 Announce Type: new Abstract: Understanding and controlling complex dynamical systems often requires executing thousands of numerical simulations across vast parametric landscapes, which is time-consuming. Machine learning surrogates significantly accelerate simulation by predicting state trajectories across different initializations and parameter values. However, surrogate models are specialized to one simulation model. Modifying the underlying differential equations - e.g., adding a physiological state or altering an epidemiological contact network - renders trained models obsolete and forces computationally expensive retraining from scratch. We introduce HyperODE, a surrogate capable of operating across an entire class of approximately mass-conserving compartmental models without retraining. By mapping the structure of ordinary differential equations (ODEs) into directed hypergraphs, HyperODE decouples the functional form of system interactions from the neural network architecture. HyperODE takes a compartmental model in the form of an ODE with an arbitrary parameter distribution defined through quantiles and transforms it into a hypergraph. It outputs the distribution of the trajectories for all the states in the original ODE in the form of quantiles. We then use this surrogate to build an encoder that takes a noisy trajectory and outputs a distribution over the parameters of the original ODE, thus calibrating the model in a single pass. On families and system sizes never seen in training, HyperODE produces calibrated quantile bands in a single forward pass, with weighted-interval score and coverage on par with specialized surrogates for each structure. For inverse inference, HyperODE produces calibration from noisy state trajectories in a few milliseconds with a single shared encoder, competitive with existing methods. HyperODE extends zero-shot to ODEs that break mass conservation and to external forcing.
