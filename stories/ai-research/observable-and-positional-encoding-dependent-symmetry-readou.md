---
title: "Observable- and Positional-Encoding-Dependent Symmetry Readout from Neural Network Weights"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03108"
authors: ["Naoya Chiba, Satoshi Sugiyama, Yuki Uranishi"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.03108v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03108v1 Announce Type: new Abstract: Post-hoc analysis of trained neural network weights often seeks to recover geometric structure directly from the parameters. We show that, for positional-encoding-equipped neural fields, the symmetry visible from weights is not the true symmetry group itself, but an observable symmetry set determined by the trained parameters, the positional encoding (PE), and readout observable. We formulate this dependence through an exact observability hierarchy, $G_{\mathrm{obs}}^{\mathrm{exact}} \subseteq G_{\mathrm{lift}}^{\mathrm{exact}}(\phi) \cap G_{\mathrm{true}}$, where $G_{\mathrm{lift}}^{\mathrm{exact}}(\phi)$ is the set of input transformations that the PE can exactly lift to the feature space. The hierarchy implies that even when a target function has a geometric symmetry, that symmetry may be structurally invisible to weight-level observables if the PE does not represent the corresponding transformation. We test this prediction using MLPs trained on two-dimensional signed distance functions with multiple shape symmetry groups, positional encodings, and Gram-based observables. The results show a consistent PE-dependent pattern: DyadicAxisPE supports $D_4$-sensitive readout but structurally suppresses $D_3$ rotations, TriAxisPE yields lower $D_3$ / $D_6$ readout scores under the tested Gram observables by replacing coordinate axes with three 120-degree-separated axes, and random Fourier features mainly exhibit a $\pi$-rotation response under these readouts. These findings show that PE design affects not only approximation behavior but also which structures are accessible to post-hoc weight-level readouts. This provides a basis for a principled observable-dependent symmetry readout.
