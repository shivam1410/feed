---
title: "MDN-VJEPA: Multimodal Probabilistic Joint-Embedding World Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.13956"
authors: ["Yongchao Huang"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.13956v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Joint-Embedding Predictive Architectures (JEPAs) learn world models by predicting future representations rather than reconstructing observations. Variational JEPA (VJEPA) gives this prediction probabilistic semantics and permits flexible conditional predictive families. We propose MDN-VJEPA, a multimodal probabilistic JEPA that instantiates the latent predictor as a mixture density network (MDN), representing future states with a Gaussian mixture whose components encode alternative futures, their probabilities, and within-mode uncertainty. For sequential prediction, we address two additional structural requirements: multi-modal futures should remain temporally coherent across a trajectory, and predictive beliefs should remain consistent when propagated to the same horizon through different temporal path compositions, as motivated by the Chapman--Kolmogorov equation. Together, these considerations define a three-level hierarchy of multimodal prediction, coherent multimodal trajectories, and compositionally consistent multimodal dynamics. Controlled experiments show that MDN-VJEPA closely recovers known branching predictive laws, that retaining the complete multimodal belief rather than its conditional mean can lead to materially different and substantially better planning decisions under branching futures, and that trajectory-level coupling and distributional consistency improve temporal coherence and multi-horizon agreement. These results support a simple principle: a probabilistic JEPA should preserve not only how uncertain the future is, but which distinct futures constitute that uncertainty, how they form coherent trajectories, and how those beliefs compose through time.
