---
title: "Finite-Horizon Input-Output Dynamics of Minibatch Perturbations in AdamW"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19762"
authors: ["Kang Liu, Suyan Li"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19762v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19762v1 Announce Type: new Abstract: A minibatch can influence training beyond the update at which it is observed because AdamW stores past gradient information in its optimizer states. We study this delayed effect through paired trajectories that differ only in one gradient update and share the same subsequent training sequence. We formulate AdamW as a finite-horizon input--state--output (ISO) system whose state contains the model parameters and first- and second-moment estimates. Linearizing the joint dynamics yields a signed response operator that maps a localized gradient perturbation to its future loss effects, revealing how optimizer memory shapes their magnitude, timing, and sign. We further derive an exact multistep error decomposition and establish first-order finite-horizon accuracy under local smoothness and controlled activation switching. Experiments validate the response mechanism and optimizer-state effects, while repeated-future analyses reveal substantial prospective structure in delayed influence that can be partially recovered from ISO approximations. Code is available at https://github.com/Kanyooo/Loss_ISO.
