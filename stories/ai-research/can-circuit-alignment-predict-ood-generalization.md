---
title: "Can Circuit Alignment Predict OOD Generalization?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31996"
authors: ["Ayan Banerjee, Abhra Chaudhuri, Josep Llados, Umapada Pal, Anjan Dutta"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.31996v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Can out-of-distribution (OOD) generalization be predicted from a trained model's weights alone, without any target-domain data? Existing representational similarity metrics (CKA, SVCCA, RSA) compare activations rather than forecast generalization. We show they are provably insensitive to structural rerouting in the computational graph, the very change distribution shift induces. We close this gap with the Circuit Alignment Score (CAS), which compares class-specific circuits across domains via graph kernels, decomposed into same-class coherence and cross-class confusion. Casting CAS as a Lebesgue integral over the domain distribution, we prove its Monte Carlo estimate recovers the ground-truth ranking of learners by OOD accuracy, with pairwise inversion error vanishing at rate $O(1/M)$, where $M$ is the number of sampled domains. Across $48$ learners on PACS, CAS attains $0.88$ rank correlation with OOD accuracy, versus $0.58$ (CKA), $0.23$ (SVCCA), and $0.14$ (RSA), with similar trends on other benchmarks and even against data-dependent methods, making it the first provably consistent predictor of distributional robustness requiring neither target-domain data nor labels. The code is available at: https://github.com/ayanban011/ACE
