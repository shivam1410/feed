---
title: "Low-power analogue neural networks with trainable nonlinear connections for continuous control"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23742"
authors: ["Ian T. Vidamour, Fernando Aguirre, Thomas J. Hayward, Matthew O. A. Ellis, Charles Swindells, Alexander McDonnell, Martin Trefzer, Finley Robins, Luca Manneschi, Susan Stepney, Tony Kenyon, Oliver J. Sutton, Jack C. Gartside, Ivan Y. Tyukin, Adnan Mehonic, Eleni Vasilaki"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23742v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23742v1 Announce Type: new Abstract: Physical neural networks promise low-power machine learning by computing directly with analogue device physics, but most architectures force nonlinear device responses to act as scalar weights. Inspired by Kolmogorov-Arnold networks, we place trainable nonlinear functions on the connections, making each physical connection a learnable computational element. Realising these functions as analogue band-pass filters on field-programmable analogue arrays, we find that the benefit is task-dependent and follows from the smoothness of the physical basis: the networks represent smooth, continuously valued targets, including robotic kinematics, continuous control, and photovoltaic maximum-power-point tracking, with far fewer nodes and connections than multilayer perceptrons, but offer no parameter-efficiency advantage on classification-like decision boundaries. Trained networks transfer to hardware across approximately 35,000 connections with quantified fidelity, and a dedicated CMOS implementation is projected to operate at approximately 30 microwatts. A memristive realisation reproduces the same behaviour in simulation, indicating that the advantage comes from placing trainable nonlinearity on connections, rather than from a particular device.
