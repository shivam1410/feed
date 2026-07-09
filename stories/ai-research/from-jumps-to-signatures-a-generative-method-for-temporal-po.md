---
title: "From Jumps to Signatures: a Generative Method for Temporal Point Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06652"
authors: ["Niels Cariou-Kotlarek, Vasileios Lampos"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.06652v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06652v1 Announce Type: new Abstract: Rough path signatures are a universal feature map for continuous paths and, via the expected signature, characterise path distributions. These guarantees do not directly extend to cadlag paths of Temporal Point Processes (TPPs), limiting the use of signature methods for event sequences. Furthermore, neural TPP models, including recent generative approaches, optimise per-event objectives with no global sequence-level loss, while evaluation of variable-length event sequences lacks distributional discrepancy measures. This paper proposes a common pathwise framework for addressing these limitations. We introduce the interarrival embedding, a stable, injective lift from jump paths to continuous paths of bounded variation, extending signature methods to discrete event sequences. Our theoretical contributions give rise to sigTPP, the first signature-based generative model for TPPs, trained using a path-level loss on complete trajectories. We further analyse the space of counting paths and derive three distributional discrepancies, providing mathematically justified tools for evaluating generative TPP models. Across synthetic and real-world datasets, sigTPP achieves the best average rank based on eight complementary metrics, outperforms or is within a standard error of the strongest baseline in 64% of the dataset-metric pairs, and according to a relative score, improves against every baseline by at least 19% on average.
