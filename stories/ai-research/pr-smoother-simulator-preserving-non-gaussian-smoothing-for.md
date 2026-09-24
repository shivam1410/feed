---
title: "PR-Smoother: Simulator-Preserving Non-Gaussian Smoothing for Data Assimilation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.26890"
authors: ["Yuta Tarumi"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2609.26890v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.26890v1 Announce Type: new Abstract: Many physical data assimilation (DA) workflows require smoothing methods that represent non-Gaussian posteriors over physical state variables, scale to high-dimensional simulators, train from observation windows alone, and remain compatible with calibration of the prescribed simulator. We introduce PR-Smoother, a simulator-preserving amortized smoother designed for this prescribed-simulator DA regime. Its key design principle is to keep the prescribed simulator explicit in both the evidence lower bound and the variational family: rather than learning replacement dynamics or a learned trajectory prior, PR-Smoother learns only future-conditioned corrections around the prescribed rollout. This yields an explicit non-Gaussian smoothing distribution over physical trajectories and supports joint state, parameter, and sensor-bias learning from observations alone. The variational family contains the exact smoother in deterministic and linear-Gaussian limits. Empirically, PR-Smoother captures multimodal posteriors in 4-dimensional Lorenz-96, remains accurate under ambiguous nonlinear observations and process noise in 40-dimensional Lorenz-96, and scales to joint state-parameter-bias inference in 16,384-dimensional Kolmogorov flow.
