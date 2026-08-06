---
title: "LaPrune: Controllable Differentiable Sparsity at Million Scale"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.04057"
authors: ["Jakub Antczak, Joanna Wojciechowicz, {\\L}ukasz Struski, Jacek Tabor"]
date: "Thu, 06 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.04057v1"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

arXiv:2608.04057v1 Announce Type: new Abstract: Top-$k$ selection determines which components of a sparse model remain active. Hard selection blocks gradients, while continuous relaxations often couple mask hardness to the selected mass. We introduce LaPrune, a mathematically exact-budget differentiable layer that controls the normalized second moment while preserving the selected mass. A LapSum barrier preserves the selection mass, and a normalized second-moment constraint moves the mask from a dense equal-mass allocation toward hard top-$k$ at each budget. We derive a population prediction of the saturated fraction, a near-binary limiting law, and a tight worst-case guarantee on the near-zero fraction. The normalized hardness parameter is invariant to score scale, while a fixed LapSum temperature is not.
