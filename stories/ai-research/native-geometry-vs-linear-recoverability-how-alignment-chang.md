---
title: "Native Geometry vs. Linear Recoverability: How Alignment Changes Platonic Scaling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22749"
authors: ["Angus Hoy, Austin Lutterbach, Jasper Chong, Aman Kumar, Michael J. Smith"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.22749v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Do larger models learn increasingly similar representations of the same world? The Platonic Representation Hypothesis (PRH) predicts that they should, but similar can mean native cosine geometry---nearest-neighbour structure induced by cosine similarity before any learned alignment---or linear recoverability: correspondence revealed by a supervised linear map. Using matched Legacy Survey and Hyper Suprime-Cam (HSC) embeddings across five model families, we find that Ridge alignment strengthens the relationship between model size and cross-dataset neighbourhood correspondence relative to native cosine geometry. The effect appears in all five families and persists when both representations are reduced to dimension, so it is not simply that wider embeddings give alignment more dimensions to work with. The learned maps remain far from rotations or uniform scaling, and Sparse Autoencoder (SAE) and Block-Sparse Featuriser (BSF) features give no advantage over the same alignment applied to dense embeddings. Model scale thus improves linear recoverability more clearly than native cosine-neighbourhood correspondence, without establishing convergence toward a shared native metric geometry.
