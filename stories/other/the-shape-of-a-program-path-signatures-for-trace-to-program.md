---
title: "The Shape of a Program: Path Signatures for Trace-to-Program Induction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13005"
authors: ["Mohamed Ghanem, Bernd Finkbeiner"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13005v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Synthesizing programs from execution traces is a fundamental challenge in algorithmic interpretability and the reverse engineering of complex systems. We bring a rough-path-theoretic perspective to program induction, treating execution traces as high-dimensional rough paths and encoding them with the path signature transform, a tool from stochastic analysis whose expectation provably characterizes the distribution of traces a program induces. On three program-induction domains, Karel, List, and RASP, our log-signature trace encoder outperforms LSTM, Transformer, and Fourier baselines in almost every setting, with its largest margins when training data is scarce. We further observe that the trace-to-program pipeline is naturally contractive: it often produces valid programs that are shorter than the ground truth. We turn this into a bootstrapping procedure that exposes redundancy in the ground-truth supervision without any external oracle, which we demonstrate on redundancy-injected versions of our datasets. Finally, the log-signature encoder induces a markedly more interpretable latent geometry than the baselines, in which the nearest neighbors of every state lie on its own execution trace.
