---
title: "Refined Topology-Pass Scheduling: Damped Trust-Region Compensation for Dynamic k-NN Graphs in SE(3)-Equivariant Structure Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19246"
authors: ["Jiankai Huang, Hanwen Shen"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19246v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Equivariant structure-prediction pipelines alternate coordinate updates with the construction of a k-nearest-neighbour (kNN) graph whose membership is a discrete, piecewise-constant function of the coordinates. Rebuilding that graph at every block boundary (PB) is the expensive part of an epoch, whereas reusing one frozen graph (F) is fast but leaves a topology gap. We study a two-pass design in which the cheap pass records a small amount of state (margins, kNN radii, measured per-boundary displacements) and a second pass compensates conservatively. We formulate the choice of the graph-construction basis as a damped fixed-point iteration whose unique fixed point is exactly PB, and derive (i) exact non-flip certificates with the two-sided constant $m_i/4$ and one-sided constant $m_i/2$, (ii) the minimum-variance (BLUE) replay gain $\gamma^*$ and the resulting feasibility crossover, (iii) an $\ell_\infty$ trust-region projection that preserves convergence, and (iv) an analytic near-tie spacing law $E[m] \approx r_k/(3k)$ that matches measurements to 1\%. Three compensation levels are implemented in C++ (L1: frozen set with live geometry; L2: margin-gated local repair; L3: damped, projected basis) and validated under a matched-conditions protocol (identical seed, MSA depth and trajectory family, only the topology mode differs). L2 reproduces the PB edge set exactly ($D = 0.0000$ at every boundary), L1 stays within 0.6% and L3 interpolates monotonically: L2 reproduces the PB edge set exactly when the trust region is removed, and L3 interpolates between the frozen and the PB topology. The recorded trajectory itself yields a measured $1.5\times$ Pass-1 and $1.76\times$ epoch speed-up with no measurable loss gap. An open-source implementation of the runtime and of all the experiments reported here is available at https://github.com/AlbertHuang96/ProteinPredictMachineLearning.
