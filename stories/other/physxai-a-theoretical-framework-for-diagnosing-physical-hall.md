---
title: "PhysXAI: A Theoretical Framework for Diagnosing Physical Hallucinations in Weather Foundation Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15053"
authors: ["Anjan Mahapatra, Nikhil Raj"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15053v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Modern machine learning models for global weather forecasting achieve remarkable predictive accuracy, yet they frequently produce states that violate fundamental physical laws, including conservation of mass, hydrostatic balance, or spectral energy scaling. We term these outputs physical hallucinations and propose PhysXAI, a rigorous diagnostic framework that detects, localises, and attributes such inconsistencies. Unlike existing post-hoc metric suites, PhysXAI is a learnable system that explicitly decouples forecast error from physical plausibility. We formalise the problem through a novel joint condition on numerical and physical residuals, and introduce a multi-branch encoder that extracts representations from conservation, dynamical, spectral, cross-variable, and spatiotemporal residuals. A key innovation is a physics-consistency contrastive learning objective, which we theoretically show the latent representation to be approximately isometric to the physical residual space, ensuring that diagnostic decisions remain grounded in physically meaningful deviations. We further derive an adaptive multi-objective loss with gradient-based weighting to balance competing diagnostic objectives. The framework produces spatially resolved hallucination maps, violation-type classifications, and calibrated Bayesian uncertainty, enabling both detection and interpretable attribution of physical inconsistencies. We conduct a comprehensive comparative evaluation of PhysXAI across ERA5, WeatherBench 2, and MERRA-2, using forecasts from GraphCast, Pangu-Weather, and NeuralGCM, with Python-written code and a fully reproducible experimental protocol. Our theoretical analysis and empirical evaluation establish PhysXAI as a principled framework for diagnosing physical hallucinations and advancing trustworthy AI for weather forecasting.
