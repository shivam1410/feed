---
title: "Predictive Uncertainty for Neural CAE Surrogates"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25430"
authors: ["Kaustubh Tangsali, Mohammad Amin Nabian, Kelvin Lee, Carmelo Gonzales, Sanjay Choudhry"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.25430v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25430v1 Announce Type: new Abstract: Neural surrogates can substantially accelerate computer-aided engineering (CAE) workflows, but their use in design requires uncertainty estimates that remain meaningful across varying geometries, spatial prediction fields, and engineering quantities of interest. We investigate how established uncertainty quantification (UQ) approaches behave when adapted to geometry-conditioned neural surrogates. We compare one closed-form and two sampling-based approaches-a Gaussian process (GP)-based method, concrete Monte Carlo (MC) dropout, and deep ensembles-and evaluate them on three large, industry-relevant CAE datasets for external aerodynamics and crash dynamics. We examine whether predicted uncertainties have credible magnitudes, identify locations with larger prediction errors, respond to unfamiliar inputs, and remain informative for derived engineering quantities. On the DrivAerStar dataset, where all three methods are compared, each generally assigns higher uncertainty to locations with larger prediction errors, and validation-based rescaling brings interval coverage close to nominal on a disjoint in-distribution test set. Results on AirFRANS and automotive crash also show useful error ranking and interval estimates, but the relative performance of the methods changes with the dataset and evaluation criterion. UQ methods and evaluation metrics should therefore be selected based on the intended downstream CAE decision.
