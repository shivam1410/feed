---
title: "Read, Write, Relax: Why Neural PDE Surrogates Need Both Global and Local Processing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21677"
authors: ["Anuj Kumar, Heiko Zimmermann, Josiah Bjorgaard, Jacan Chaplais, Nikolaos Bouklas, Matteo Salvador, Alexander Lavin"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.21677v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21677v1 Announce Type: new Abstract: Recent mesh-based simulation advances have, in no small part, relied on neural surrogates of two distinct families: global models that route information through a small set of latent tokens, and local models that perform message passing across mesh edges. Consistent with both classes is the inability to perform beyond low-dimensional problems and small-scale or oversimplified meshes, the simulation regimes where industrial problems reside. Our work shows this explicitly and presents a unified formulation. In global approaches, latent-token attention acts as a spatial low-pass filter, while local message passing lacks the global reach necessary to propagate information across large mesh spaces. Viewed through the error, the two operators are the halves of a multigrid cycle: one corrects errors at the lower end of the spectrum, the other at the higher end, and neither can do the other's job. We introduce Read-Write-Relax (RWR), which interleaves latent attention with message-passing relaxation under a unified formulation. The interleaved processor lowers error across the entire spectrum, making RWR the most accurate model in nearly every comparison across our industrial and public benchmarks. It is also markedly data-efficient in the scarce-data regimes, accurate on the engineering quantities of interest, and scales full-field predictions to challenging, large-scale problems.
