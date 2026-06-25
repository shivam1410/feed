---
title: "What's in an Earth Embedding? An Explainability Analysis of Location Encoders"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24997"
authors: ["Livia Betti, Sebastian Ricke, Ivica Obadic, Adam J. Stewart, Esther Rolf"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.24997v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24997v1 Announce Type: new Abstract: Geographic implicit neural representations (INRs) learn to map any coordinate on Earth to a location embedding, implicitly encoding geospatial data into the weights of a neural network. Location embeddings are widely used off the shelf as general-purpose geospatial representations, yet users lack principled tools to audit what geographic or semantic information these embeddings capture. In this work, we analyze the information content of geographic INRs through their location embeddings. We decompose these embeddings into human-interpretable features$\unicode{x2014}$namely, (i) sparse latent concepts, (ii) natural language concepts, and (iii) visual features. The latent concept embeddings are learned using sparse autoencoders. To recover natural language concepts, we apply sparse linear concept embeddings (SpLiCE) over a predefined geospatial dictionary. Finally, visual features are extracted using saliency maps derived from CLIP Surgery. We show that location embeddings can be decomposed into human-interpretable representations while retaining high reconstruction capability, revealing interpretable geographic structures such as forests, deserts, and urban features. Across methods, sparse decompositions expose systematic differences in encoded information, ranging from urban structures to broader biome and climate signals, and pretraining-space saliency maps further highlight complementary features such as roads and landmarks. We hope this work provides a first step toward interpretable geospatial representations.
