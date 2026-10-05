---
title: "Drive vs. Decay: On the Training Dynamics of Joint-Embedding Predictive Architectures"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02344"
authors: ["Jos\\'e Lucas De Melo Costa, Seong Woo Ahn, Fabrice Popineau, Arpad Rimmel, Bich-Li\\^en Doan"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.02344v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Joint-Embedding Predictive Architectures (JEPAs) are prone to representation collapse, typically mitigated through empirical heuristics. We develop an early-training stability theory that unifies these heuristics. Linearising the coupled JEPA gradient flow around the trivial fixed point reveals two competing effects: a driving force ($\gamma$) and a decay effect ($\sigma$). Under approximate spectral decoupling, a per-mode stability ratio $\mu_i = \gamma_i / \sigma_i$ factorises into independent data-side and predictor-side terms and the count of unstable modes tracks the rank of representations that can emerge. The framework predicts a phase boundary, which we confirm empirically across more than 800 Tabular-JEPA configurations. It also unifies predictor scaling, masking ratio, and EMA as distinct mechanisms for shifting $\mu$. Guided by this analysis, we introduce ResidualPred, a transformer predictor whose attention is biased toward the identity at initialisation; it improves both effective rank and downstream accuracy on tabular benchmarks and in I-JEPA pretraining on CIFAR-10, CIFAR-100, STL-10, and ImageNet. Our framework connects empirical collapse-avoidance heuristics to an explicit dynamical picture, yielding theory-driven stabilizers. Code is available at https://github.com/jose-melo/drive-vs-decay.
