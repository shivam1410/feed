---
title: "BAT-NO: A Boundary-Condition-Aware Transformer Neural Operator for Crashworthiness Prediction of Vehicle Components"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03854"
authors: ["Haoran Li, Yingxue Zhao, Haosu Zhou, Mustapha Ziane, Pierre Culiere, Tobias Pfaff, Nan Li"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.03854v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

High-fidelity finite-element simulations provide accurate crashworthiness predictions, but their cost limits iterative design exploration. Deep learning surrogates can reduce this cost, but many component-level models are developed under a single prescribed boundary condition, limiting generalisation to boundary variations. This work proposes a Boundary-Condition-Aware Transformer Neural Operator (BAT-NO) for autoregressive prediction of transient displacement fields and scalar crashworthiness responses under variations in geometry and boundary conditions. A B-pillar simulation framework evaluates generalisation across variations in geometry, impact position and velocity, and support stiffness. BAT-NO combines recurrent mesh processing with latent-grid Fourier operator processing. Boundary-condition information is transferred to the latent grid through a hybrid local--global mechanism. Slice-based attention models interactions among physically related regions, while direct boundary-to-grid projection preserves local spatial structure. Across the validation sets for the shape-only, shape-and-loading, and shape-loading-boundary cases, BAT-NO achieves the lowest mean final-step mean nodal Euclidean displacement error among the evaluated baselines. In the most challenging case, it reduces the mean error by 32.6% relative to the second-best model. Hyperparameter tuning reduces the validation error from 0.451 to 0.269 mm, with a comparable error of 0.267 mm on 300 unseen test simulations sampled within the investigated design space. An attention-based scalar decoder jointly predicts six response trajectories with a mean relative error of 2.46%. Most derived crashworthiness indicators have median errors below 3%. These results show that explicit local and global boundary-condition representations improve crashworthiness prediction over expanded component-level design spaces.
