---
title: "Electrocardiographic Imaging via Posterior Sampling under Operator Discrepancy"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17851"
authors: ["Ricarda Buttmann, Andreas M. Lehrmann"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17851v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Electrocardiographic imaging (ECGI) reconstructs heart-surface potentials from body-surface potentials, an ill-posed inverse problem. Diffusion posterior samplers combine a learned prior with an explicit forward operator that they assume to be accurate. In ECGI this operator is only an estimate, because the body changes with respiration and posture, and body composition such as subcutaneous fat is rarely known for an individual patient. The resulting operator discrepancy is structured and depends on the heart signal. We introduce OpDis-PS, a diffusion posterior sampler that models this discrepancy instead of treating it as signal-independent noise. OpDis-PS learns how the discrepancy depends on the signal, folds this into a corrected forward operator, and reconstructs with a fixed prior across all operator conditions. We study two realistic sources of discrepancy, changing lung conductivity and an added subcutaneous-fat layer. Across both, OpDis-PS reconstructs more accurately than classical regularization and learned predictors, with its largest gains on held-out cardiac pathologies.
