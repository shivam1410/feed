---
title: "FloDR: An invertible dimensionality reduction method based on a normalising flow"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26278"
authors: ["Abdallah Baraka, Daniel Probst"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2607.26278v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26278v1 Announce Type: new Abstract: It is common for two-dimensional embeddings of high-dimensional data to be read far beyond what they can support. Distances in and between clusters, the meaning behind empty spaces, and the amount of structure hidden at each point are generally invisible in the output of methods such as t-SNE and UMAP. This is because the information that could support the meaning of these properties is discarded during the optimisation process. Here, we present FloDR, a dimensionality reduction method that embeds data through an invertible normalising flow. While FloDR only uses the first two output coordinates to create a two-dimensional embedding, it retains the remaining coordinates rather than discarding them. In addition to the embedding, an exact inverse and an exact density are properties of a trained mapping, which enable diagnostic visualisations that are computed from the exact inverse of the model that drew the layout rather than from an approximate one. Specifically, we draw two fields, the conditional spread, which measures how much of the original data remains undetermined at each embedding position in input units, and the hidden contrast, which measures how much information about a labelled contrast the two plotted coordinates discard. Both fields are rendered with a prespecified test against a held out portion of the input data and a bootstrap confidence. A field that fails the test is reported as refused.
