---
title: "Embedding Consistent Recurrent Neural Networks in Finite Element Simulations for Path-Dependent Damage Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08494"
authors: ["Muhammed Adil Yatk{\\i}n, Mihkel K\\~orgesaar, Hasan Kurban"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08494v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Capturing sheet-metal localisation physics with a trained surrogate inside a finite element (FEM) solver requires the surrogate to deliver consistent predictions irrespective of the solver's strain-increment count, which is difficult to control in non-linear explicit codes. We address this by re-implementing a trained recurrent neural network (RNN) damage criterion in Fortran and embed it as a live, increment-by-increment fracture criterion inside an Abaqus/Explicit user material subroutine (VUMAT), advancing the network state alongside the solver. Two architectures are compared: a SimpleRNN and the proposed Consistent RNN (ConsRNN), whose transition function is designed so that predictions converge as the strain path is refined rather than drifting with the increment count. Both are trained on bilinear strain paths and evaluated under varying temporal discretisations and nonlinear histories. SimpleRNN predictions drift as the increment count increases, which disqualifies it for embedding; ConsRNN converges under refinement, at a substantial fixed-resolution accuracy cost relative to SimpleRNN on multilinear paths. Deployed at structural scale, the embedded ConsRNN surrogate governs element deletion in a clamped steel plate and reaches the same peak force and peak displacement as an established two-parameter fracture criterion. This pre-peak agreement is expected by construction, since no element is deleted before the peak and the two runs therefore share an identical constitutive path; the responses diverge only on the post-peak softening branch. The results establish discretisation consistency as the decisive property for embedding recurrent surrogates in explicit FEM solvers, and report the first embedding of a customised, non-standard-transition recurrent cell at structural scale.
