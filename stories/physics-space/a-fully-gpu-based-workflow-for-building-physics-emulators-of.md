---
title: "A fully GPU-based workflow for building physics emulators of hypersonic flows"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13742"
authors: ["Fabian Paischer, Dylan Rubini, Deniz A. Bezgin, Aaron B. Buhendwa, David Hauser, Florian Sestak, Johannes Brandstetter, Sebastian Kaltenbach, Nikolaus A. Adams"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.13742v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13742v1 Announce Type: new Abstract: The ability to resolve complex physical phenomena with high fidelity and at low computational cost is central to addressing key challenges in modern engineering. A prime example lies in hypersonic flows, where the precise prediction of the full flowfield topology, in particular with respect to shock wave location and intensity, is critical. Yet supersonic and hypersonic flows continue to be a stumbling block for traditional reduced-order models and neural emulators that struggle to capture steep gradients in flow states with physical consistency in applications of industrial relevance. To that end, we introduce a fully GPU based workflow that integrates accelerated data generation with the training of neural emulators augmented by uncertainty quantification and physics-aware refinement. Our workflow is enabled by a differentiable high-fidelity solver (JAX-Fluids) which we employ for rapid dataset creation and residual-based improvement of the neural emulator to enhance physical consistency. Building on this framework, we first present a suite of model architectures and analyze their scaling behavior to expose their strengths and shortcomings. We then show that residual-based refinement enables training on cases where only mesh and input parameters are available, substantially reducing residuals and improving physical consistency. Together, differentiable simulation and residual-based refinement yield physics emulators that remain reliable beyond their training distribution, a key requirement for deploying surrogates in real-world engineering design loops.
