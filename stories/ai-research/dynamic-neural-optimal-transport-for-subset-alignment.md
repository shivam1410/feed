---
title: "Dynamic Neural Optimal Transport for Subset Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24258"
authors: ["Austin J. Brockmeier, Bilal Riaz"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 22
guid: "oai:arXiv.org:2610.24258v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

We study optimal transport between distributions when only a subset of the target population is relevant to the source. The goal is to map the source distribution to a reweighted target distribution whose density ratio with respect to the full target lies in $[0, c]$. This constraint enables the transported distribution to select an appropriate target subpopulation while limiting how strongly any region of the target can be emphasized. We propose a dynamic neural optimal transport framework for this setting using two neural networks. The first parameterizes a time-dependent potential whose spatial gradient defines the velocity field and whose terminal value enforces the density-ratio constraint. The second parameterizes an interpolation between the source distribution and the learned terminal distribution. Unlike prior neural dynamic optimal transport methods, which typically assume a fixed terminal distribution, our formulation learns the terminal distribution within the support of the target. We demonstrate the method on positive-unlabeled learning, unpaired domain translation, and trajectory inference, where meaningful alignments exist between source and target distributions, but direct distribution matching is inappropriate because the target contains additional or irrelevant components
