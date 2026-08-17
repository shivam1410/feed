---
title: "Contrastive Learning for Interpretable Anomaly Detection at Collider Experiments"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13652"
authors: ["Haoyi Jia, Sagar Addepalli, Julia Gonski"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.13652v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13652v1 Announce Type: new Abstract: Generic event-level anomaly detection for collider physics has two recurring problems: anomaly scores are hard to interpret, and they correlate strongly with energy scale and object multiplicity. We present Organized Representation via Contrastive learning for Anomaly detection (ORCA), a two-stage framework that first learns an embedding space via supervised contrastive learning across a diverse set of physics processes, then runs a standard autoencoder in that space to generate event-level anomaly scores. On a simulated dataset consistent with conditions at the High-Luminosity Large Hadron Collider, ORCA delivers significant gains in both breadth and depth of sensitivity to new physics signals with respect to a baseline autoencoder architecture. Beyond improved sensitivity, the contrastive embedding makes the anomalous sample interpretable: because known processes occupy distinct regions of the space, a maximum-likelihood template fit to the embedding distributions can attribute events in an anomalous sample to template physics processes with quantified uncertainties. We demonstrate that the fit accurately recovers injected signal yields, including for signals excluded from the training of the embedding, and characterizes signals absent from the template library through the known processes they most resemble. These results establish ORCA as a route to interpretable anomaly detection-based searches at colliders, where the embedding geometry carries higher dimensional physics information compared to standard one-dimensional output fits, enhancing downstream statistical analysis.
