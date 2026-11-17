---
title: "Geometrically Disentangling Concept Learning from the Language Modeling Loss"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18933"
authors: ["Yupei Wang, Neil Mallinar, Mikhail Belkin, Alex Warstadt"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18933v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Language models acquire a vast array of concepts and abilities from next-token prediction alone. We introduce an interpretability framework that exposes how this single loss relates to the development of different concepts at different points during pretraining. We propose Concept Energy, a measure of the concept-specific alignment between a concept subspace and the average gradient outer product (AGOP) of the next-token-prediction loss. The concept subspace captures where the concept currently lives in the model's representation; AGOP captures the directions to which the loss is most sensitive. Across 19 checkpoints of Pythia-410M and -1B and 12 lexical, syntactic, and semantic concepts, we find that the first peak in Concept Energy generally occurs at or before the steepest increase in probe decodability. Furthermore, whereas probe performance usually increases monotonically throughout training, Concept Energy is not confined to a single peak; some concepts exhibit sustained or repeated engagement across pretraining, suggesting that concept learning may require continual reinforcement or occur at multiple points. Our results indicate that the loss contributes to concept learning in a myriad of ways that simple probe performance alone cannot reveal.
