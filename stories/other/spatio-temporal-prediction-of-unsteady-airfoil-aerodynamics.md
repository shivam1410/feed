---
title: "Spatio-Temporal Prediction of Unsteady Airfoil Aerodynamics Using Augmented Graph Neural Ordinary Differential Equations with Exogenous Controls"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18309"
authors: ["Henrik Lange, Reik Thormann, Philipp Bekemeyer"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18309v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18309v1 Announce Type: new Abstract: Unsteady aerodynamic phenomena, such as gusts, turbulence, and fluid-structure interactions affect an aircraft during flight. For design, optimisation and certification, it is indispensable to quantify such unsteady aerodynamic effects. Industry-standard computational fluid dynamics methods, such as solving the unsteady Reynolds-averaged Navier-Stokes equations or the linearized frequency domain method, are either computationally expensive or restricted by assumptions like linearity. Once trained, machine learning methods are capable of computing non-linear relationships very fast, making them suitable as surrogate models. By autoregressively applying graph neural networks (GNNs), operating on a discretised spatial domain, spatio-temporal predictions can be made. However, autoregressive GNNs suffer from error accumulation leading to unstable rollouts over time. Here we show that combining GNNs with augmented Neural Ordinary Differential Equations yields temporally stable predictions of the surface forces on a pitching airfoil. We found that our approach, called GNODE, based on Graph Neural Ordinary Differential Equations, provides temporally more stable, spatially smoother, and overall more accurate results than an autoregressive GNN baseline. Tests are conducted on a dataset consisting of a simulations of a pitching airfoil, including transonic shocks, transient behaviour and dynamic non-linearities. Augmenting GNODEs with additional latent dimensions improves the expressivity and accuracy by capturing underlying history effects. The developed method demonstrates an approach that is suitable to model non-linear spatio-temporal systems with exogenous inputs.
