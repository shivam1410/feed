---
title: "Stable and Counterfactually Robust Physical World Models from Imposed Structure and Learned Physics"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00280"
authors: ["Yufeng Wang, Parivesh Priye, Lu Wei, Haibin Ling"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2610.00280v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

A world model learns to forecast how a physical system evolves from recorded trajectories, yet the systems it imitates obey physical laws that are neither fully supplied nor reliably respected. The model may create energy, drift or diverge over long rollouts, and answer a changed law query using the law observed during training. We ask how much general physical structure must be hard coded into a world model, and how much system-specific physics can then be learned from data, for four properties to hold simultaneously: second law compatible dissipation, correct responses to interventions on physical parameters, stability out to one hundred times the training horizon, and robustness to disturbances. The imposed structure is general: dynamics are generated from the gradient of a learned energy through a fixed reversible operator, the energy is restricted to a confining class, a one way port can remove energy but never inject it, the drive channel is known, and the intervened parameter enters through a separable map. The model learns the energy functional, constitutive relations, dissipation rate, and couplings. Across an electromagnetic cavity, a particle in cell grid, and a shallow-water fluid, models with roughly nine thousand parameters recover constitutive functions with unit slope, separate conserving from dissipating worlds by four orders of magnitude using a single set of weights, and transfer changes in sign, magnitude, rate, and gravity to unseen values, where equal-capacity models without the same structure perform at chance or worse. A nonlinear constitutive law is recovered with its curvature preserved and predicts a held-out intervention $2$-$17\times$ better than a converged linear model.
