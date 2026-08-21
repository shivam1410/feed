---
title: "Complementary, Not Cumulative: Interaction Effects in Physics-Informed Neural Networks for Navier-Stokes Vortex Shedding"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19632"
authors: ["Devesh Shah"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19632v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19632v1 Announce Type: new Abstract: Physics-informed neural networks (PINNs) embed governing partial differential equations directly into the training loss, offering a promising alternative to costly CFD solvers for unsteady flows. Yet the growing list of techniques proposed to improve PINN training is typically validated one at a time, leaving open whether these techniques actually compose. We study this question in depth on the DFG/Schafer-Turek unsteady cylinder wake benchmark. In isolation, nearly every technique performs no better than an untreated baseline. However, combining periodic (SIREN) activations with causal weighting unlocks a previously inaccessible regime, reconstructing velocity and pressure fields to within 4.1% average relative L2 error against an OpenFOAM reference solution. Adding further techniques instead causes catastrophic performance degradation, demonstrating that individually effective PINN interventions can interact nonlinearly and that more elaborate training recipes are not necessarily better.
