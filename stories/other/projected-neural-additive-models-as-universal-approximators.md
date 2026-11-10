---
title: "Projected Neural Additive Models as Universal Approximators"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10186"
authors: ["Nhon N. Phan, Qiang Du, John D. Clayton, WaiChing Sun"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10186v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Neural additive models (NAMs) offer interpretability but lack expressivity due to their rigid additive structure, whereas multi-layer perceptrons (MLPs) achieve universal approximation at the cost of transparency. We establish the first theoretical foundation for projected neural additive models (PNAMs), which augment NAMs with a learnable linear transformation $\boldsymbol{T}$ to capture cross-variable interactions. While standard NAMs cannot approximate even the simplest interaction term $\chi_1 \chi_2$ because their cross-derivatives are identically zero, we prove that PNAMs are universal approximators and characterize the minimum number of projections required for exact polynomial representation. Furthermore, we derive an approximation rate of $\mathcal{O}(M^{-s / (N - 1)})$ for $\mathcal{C}^s$ functions (i.e., functions with $s$ continuous derivatives), where $M$ denotes the number of projections and $N$ the input dimension; this rate is known to be optimal for ridge function approximation. To recover interpretability from the projected inputs, we introduce structured sparsity regularizers and post-hoc symbolic regression techniques that enable global input ranking, parameter pruning, and the conversion of learned bases into compact analytical expressions. Experiments on knot theory invariants, MNIST, and phase field fracture mechanics demonstrate that PNAMs match or surpass similar architectures in accuracy while discovering salient features and yielding symbolic models with orders of magnitude fewer parameters.
