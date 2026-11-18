---
title: "Learning Calibrated and Samplable Predictive Distributions of Surface-Ocean $\\Delta p$CO$_2$ Using Tabular Diffusion Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21769"
authors: ["Gabriele Accarino, Mohammad M. Amirian, Thea H. Heimdal, Amanda R. Fay, Galen A. McKinley, Viviana Acquaviva"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21769v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

The ocean absorbs almost 30% of anthropogenic CO$_2$ emissions, but quantifying this sink requires estimating surface-ocean CO$_2$ from observations that are sparse in space and time. Most existing machine-learning estimates of this field are deterministic, giving a single value per grid point, with uncertainty approximated post hoc via residuals, ensembles, or prescribed distributions. We instead learn a conditional predictive distribution for each observation: using Treeffuser, a conditional diffusion model with gradient-boosted-tree score functions, we estimate the full predictive distribution of $\Delta p$CO$_2$ (the sea-air $p$CO$_2$ difference) from 13 environmental, spatial, and temporal predictors. On a held-out SOCAT test set, Treeffuser attains the lowest continuous ranked probability score among the uncertainty-quantification methods evaluated (8.229 $\mu$atm) and the coverage closest to the nominal 68% / 95% levels (0.686 / 0.930), while retaining point-prediction skill comparable to a deterministic XGBoost baseline (RMSE 18.4 vs. 17.7 $\mu$atm; $R^2$ 0.77 vs. 0.79). These results show that conditional diffusion can provide well-calibrated, observation-level uncertainties while largely preserving point-prediction skill. Because Treeffuser is generative, its samples can support probabilistic analyses of $\Delta p$CO$_2$; extending this to spatially coherent field reconstruction will require modeling dependence across grid cells and evaluation on spatially held-out data.
