---
title: "A mesh-free multiresolution deep energy method with phase-field modeling of brittle fracture"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24126"
authors: ["Han Zhang, Mehrisadat Makki Alamdari, Babak Shahbodagh, Mohammad Vahab, Cosmin Anitescu, Timon Rabczuk, Elena Atroshchenko"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.24126v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.24126v1 Announce Type: new Abstract: Phase-field modeling of brittle fracture removes the need to track cracks explicitly by recasting their evolution as the minimization of an energy functional. In return it requires a discretization dense enough to resolve a localization band whose width is set by a regularization length and whose path is not known in advance. We propose a mesh-free discretization in which a single neural network represents the displacement and phase fields and is trained by minimizing the incremental energy directly. The coordinates enter the network through a multiresolution feature encoding built from $C^1$ quadratic B-spline grids, so the finest scale the representation can express is set by choice rather than reached through slow training, and the energy is estimated by stratified Monte Carlo integration on points redrawn at every optimizer iteration. This pairing proves critical, since the crack fails to advance both when the integration points are held fixed and when the encoding is too coarse to represent the band, while each ingredient tolerates a wide range of settings once the other is in place. Because the representation is globally $C^1$, the second- and the fourth-order fracture energy densities run on the identical discretization. Across six problems, from single-edge-notched tension and shear to a thick-walled ring on a single spline patch, the computed load-displacement curves follow staggered finite element references at matched regularization length, with peak loads within about 1% on the single-edge-notched tests and within 8% where the crack pattern changes topology. On a public benchmark dataset of random multi-crack configurations the method classifies the active or dormant state of 90% of the seeded cracks in twenty zero-shot runs, where the deep Ritz baseline of the dataset authors fails.
