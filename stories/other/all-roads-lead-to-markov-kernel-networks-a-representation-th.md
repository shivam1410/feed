---
title: "All roads lead to Markov kernel networks: A representation theorem for discretization-stable learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10051"
authors: ["S David Mis, Trevor Teolis, Ivan Dokmani\\'c, Matti Lassas, Maarten V. de Hoop"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10051v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Operator learning seeks to approximate function-to-function maps in a way that remains stable when the input discretization changes, a property sometimes called "discretization invariance". We consider a quantitative refinement of this idea, called $\textit{uniform discretization stability}$, which builds on a common representation of input functions and their discretizations as probability measures and provides a H\"older bound relating output changes to the Wasserstein distance between these measures. Our main result is a representation theorem showing all uniformly discretization stable operators can be written exactly as a $\textit{stable Markov kernel network}$---an abstract architecture that is a joint generalization of transformers, Fourier neural operators (FNO), Flowers, and other successful learned operators. Our representation theorem characterizes a design space for discretization-stable operator learning; designing new architectures becomes a question of which parts of a Markov kernel network to parameterize, and how. We further show that the read kernels of these networks can be realized as solutions of regularized variational problems, with particular choices of costs and regularizers recovering the kernels of transformers, FNO, Flowers, their hybrids, and beyond. This variational formulation provides a systematic approach to architecture design, together with sufficient conditions for uniform discretization stability.
