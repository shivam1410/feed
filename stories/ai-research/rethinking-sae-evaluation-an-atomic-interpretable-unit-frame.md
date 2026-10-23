---
title: "Rethinking SAE Evaluation: An Atomic Interpretable Unit Framework Reveals Hidden Polysemanticity and Redundancy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30474"
authors: ["Riteng Zhang, Xiaoqian Wang"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.30474v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Sparse autoencoders (SAEs) were originally motivated by discovering monosemantic features, a property that characterizes individual features but does not specify what the learned feature set should look like as a whole. As SAEs have increasingly been adopted for attribution, circuit discovery, and intervention, researchers have begun evaluating metrics that describe global properties of the feature set, such as sparsity, dead feature rates, reconstruction fidelity, and disentanglement, a diverse set that extends far beyond monosemanticity. However, this implicit shift beyond monosemanticity has not been formalized as a clear, well-defined objective that comes before these evaluation metrics. Without such an objective, existing metrics remain ad hoc, with their necessity unjustified. In this work, we formalize this ultimate objective by introducing a new paradigm for SAE evaluation: requiring that SAE features, and more generally dictionary-based decompositions of model representations, form an atomic interpretable unit basis, a coordinate system for semantically meaningful explanation. Under this paradigm, we organize existing and new measurements such as DAME (Dominance-Aware Monosemanticity Evaluation) as proxy metrics and introduce a comprehensive benchmarking framework. Evaluating hundreds of SAEs across multiple architectures and model families, we uncover failure modes in which some SAEs appear monosemantic under existing evaluation metrics while remaining functionally polysemantic: the most dominant features, those contributing most to model computation, are systematically less interpretable and more redundant. These failure modes warrant attention from SAE researchers as targets for improved training and architectures, and motivate dominance-aware evaluation as a standard check for practitioners before SAE features are deployed for attribution, circuit tracing, or intervention.
