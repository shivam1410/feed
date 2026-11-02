---
title: "RC Prediction: A Python Package for Parameter-Aware Reservoir Computing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40984"
authors: ["Jin-Cheng Rao, Zheng-Meng Zhai, Ying-Cheng Lai"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 18
guid: "oai:arXiv.org:2610.40984v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

A nonlinear dynamical system can be characterized by the autonomous evolution of its state in time and its dependence on system parameters. As a parameter varies, the dynamics can change quantitatively and, at bifurcation points, qualitatively. When the governing equations are unknown, a data-driven model should therefore capture both elements from observational data, rather than reproduce the dynamics at a single operating condition only. Parameter-aware reservoir computing (PARC) is a model-free framework for this purpose, where the parameter is supplied to a reservoir computer through an additional input channel. PARC is trained on time series recorded at several parameter values, and the trained reservoir, run in closed loop as an autonomous dynamical system, generates trajectories at parameter values that were never observed. rc_prediction is an open-source Python package that implements this workflow. It provides multi-parameter training of a reservoir, autonomous closed-loop prediction at user-specified parameter values, parameter scans, and a standard echo state network for forecasting at a fixed parameter. Hyperparameter optimization and optional GPU acceleration through PyTorch are also provided. We use three benchmark dynamical systems as examples to demonstrate its usage. As one of the featured applications, here we illustrate the prediction of critical transitions and system collapse: trained only on pre-critical data, the model is queried beyond the training range to predict whether the system collapses, to estimate the critical parameter $p_c^{*}$, and to characterize transient lifetimes.
