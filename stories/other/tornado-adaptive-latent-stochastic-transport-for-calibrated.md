---
title: "TORNADO: Adaptive Latent Stochastic Transport for Calibrated Probabilistic PDE Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10251"
authors: ["Jorge Mifsut Benet, Armand Kassa\\\"i Koupa\\\"i, Ramon Daniel Regueiro-Espino, Nicolas Baskiotis, Patrick Gallinari"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10251v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Probabilistic neural surrogates for PDEs enable ensemble forecasting, but often exhibit miscalibration when used for uncertainty quantification, especially in compute-constrained, few-step inference regimes. Existing generative approaches typically rely on fixed global stochasticity, which cannot adapt predictive uncertainty to the local dynamical state. We propose TORNADO, a latent probabilistic forecasting framework that formulates next-step prediction as stochastic transport between VAE encoder posteriors. Unlike existing approaches with globally prescribed stochasticity, TORNADO learns a SDE with state-dependent diffusion, enabling the predictive uncertainty to adapt to the local latent dynamics. The model is trained using analytic conditional endpoint targets derived from a Gaussian interpolant, enabling simulation-free learning. An additional energy distance regularization term improves distributional alignment. Empirically, TORNADO improves uncertainty calibration over representative generative baselines, including stochastic interpolants, diffusion models, and flow matching, while maintaining comparable predictive accuracy. Our results show that adapting stochasticity to the latent state, rather than prescribing it globally, is an effective mechanism for improving calibration in practical neural PDE forecasting settings. Project page: https://tornado-sde.github.io.
