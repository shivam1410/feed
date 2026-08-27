---
title: "Output Dilution: Redundant but Fragile Representations in MoE Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25231"
authors: ["Orion Reblitz-Richardson"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.25231v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25231v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) models appear to encode moral content as robustly as dense models, yet prove far more fragile in their encoding. In OLMoE-1B-7B, linear probes recover moral valence from nearly every expert-layer combination, with mean peak-layer accuracy above 90%. But these representations collapse under levels of activation noise that a dense model of matched size easily tolerates, with a 4.2-fold difference in robustness. We trace this to output dilution. Because the MoE block averages across active experts before contributing to the residual stream, the feedforward signal reaching downstream layers is nearly two orders of magnitude smaller than in a dense MLP. Moral information, our interest, survives aggregation intact but at a scale trivially overwhelmed by perturbation. Routing itself remains stable under noise while the vulnerability originates entirely in the diluted aggregate. Checkpoint trajectories confirm this is architectural, not learned. Experts never specialize and accuracy saturates within the first few thousand steps. In sparse architectures, redundant encoding does not imply robust encoding.
