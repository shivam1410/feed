---
title: "Hybrid coupling with numerics-informed neural networks and the overlapping Schwarz alternating method"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17841"
authors: ["George Chumbipuma, Irina Tezaur, Alejandro Diaz, Beatrice Riviere"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17841v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17841v1 Announce Type: new Abstract: We develop a hybrid modeling framework for coupling pre-trained numerics-informed neural networks (NINNs) with classical full order models (FOMs) using the overlapping Schwarz alternating method. We consider the two-dimensional advection-diffusion equation in the advection-dominated, Peclet-number 10^6 regime. We first demonstrate that, unlike the corresponding physics-informed neural network (PINN), a monolithic NINN can be accurately trained on our model problem without domain decomposition. We then employ overlapping multiplicative Schwarz as a deployment mechanism for coupling a pre-trained, subdomain-local NINN with a neighboring FOM, with the NINN weights held fixed throughout the Schwarz iteration. We consider two training approaches for the subdomain-local NINNs: a top-down approach, in which boundary data are obtained from a coupled Schwarz solve on the full domain with a FOM on each subdomain (FOM-FOM Schwarz), and a bottom-up approach, in which boundary traces are generated synthetically on the NINN subdomain without requiring any full-domain solves. The resulting hybrid NINN-FOM solutions agree closely with the corresponding FOM-FOM Schwarz solutions, with the top-down and bottom-up training approaches yielding comparable accuracy.
