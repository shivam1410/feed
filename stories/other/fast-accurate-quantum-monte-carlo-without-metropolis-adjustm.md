---
title: "Fast Accurate Quantum Monte Carlo without Metropolis Adjustment"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10187"
authors: ["Reuben Cohn-Gordon, Gabriel Pescia, Sumner N. Hearth, Jakob Robnik, Uro\\v{s} Seljak, Peter Lunts"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10187v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

In quantum systems, physical quantities of interest can be expressed as expectation values of a probability distribution, which allows their estimation by Markov Chain Monte Carlo (MCMC) methods. This approach, an instance of Quantum Monte Carlo (QMC), plays a central role in obtaining predictions of system properties relevant to condensed matter and high energy physics. The use of Hamiltonian dynamics to design a Markov kernel, known as Hybrid or Hamiltonian Monte Carlo (HMC), is widespread in quantum applications. In this context, it is standard to use an HMC kernel that is ``adjusted'' with the Metropolis-Hastings (MH) criterion, so that estimates of expectations converge to their true value in the limit of infinite sample size. However, recent work in computational statistics suggests that an \emph{unadjusted} HMC kernel can be significantly more efficient, while safely maintaining an asymptotic bias which is small relative to the error arising from the variance of the finite sample size. We adapt this approach to the QMC setting, focusing on a challenging and high-dimensional \emph{spin-fermion} model of a quantum phase transition. We find that unadjusted methods outperform adjusted HMC in terms of effective sample size per gradient call, while retaining accurate results.
