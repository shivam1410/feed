---
title: "Leveraging Biokinetic Knowledge Priors for Data-Scarce Bioprocess Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20539"
authors: ["Kyunghoon Hur, Eunjung Jeon, Hyun Woo Kim, Gyubok Lee, Seongjun Yang"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.20539v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20539v1 Announce Type: new Abstract: While deep learning has accelerated drug discovery, its impact on biomanufacturing has been considerably more limited. The reason is data scarcity. Bioreactor experiments are high-cost, take days to weeks, and are rarely shared in public form, leaving each research work with only a handful of experiments. The domain itself, however, is rich in prior knowledge. Biokinetic ordinary differential equation (ODE) models have described microbial growth for decades, yet how to inject this knowledge into a neural network has not been studied systematically. We present the first systematic study of how to inject this ODE knowledge into a neural network, comparing a data-level prior that pre-trains a generic decoder on simulated ODE curves against an architecture-level prior that embeds the ODE inside the decoder. Both consistently outperform no-prior baselines across 11 datasets and 7 microbial species. Our central finding is that the two are substitutable. A generic decoder pre-trained on simulation matches a fully bio-structured decoder trained on real data. Simulation pre-training therefore offers a simple, data-efficient recipe for deep learning under bioprocess data scarcity.
