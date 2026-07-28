---
title: "Hierarchical Grading in Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22757"
authors: ["T. Shaska"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2607.22757v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22757v1 Announce Type: new Abstract: We introduce Graded Large Language Models (GLLMs), an algebraic framework that equips the representation space of a transformer with a grading and propagates the induced weighted scalar action through embeddings, self-attention, and the training objective. The construction extends the theory of graded neural networks and graded transformers to autoregressive language models while preserving expressive power, asymptotic computational complexity, and inference cost. The governing geometric picture is that of geometric invariant theory. The benefit of a grading is expressed by a Kempf--Ness functional on the grading torus; the grades that improve upon the uniform architecture form an open convex cone whose membership is decided by a Hilbert--Mumford-type criterion pairing a grade direction against two measurable profiles of the target and the data; the optimal grades are the coincidence point of two moment maps, given in closed form; and the ordinary transformer appears as a semistable isotropic point on the boundary of the cone: one member of a larger graded family rather than a distinguished optimum. Separately, for level-stratified targets we prove a minimax separation between the graded prior and its absence: over all estimators the risks of the graded and uniform target classes separate throughout an explicit window of sample sizes, by a factor that decays exponentially in the number of levels under geometric stratification. Both profiles are estimable offline, so the optimal grades solve a convex program certified before training begins. Because the grading is absorbed into the learned parameters after training, every GLLM compiles to a standard transformer of identical architecture and inference complexity.
