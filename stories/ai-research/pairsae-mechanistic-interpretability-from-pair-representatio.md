---
title: "PairSAE: Mechanistic Interpretability from Pair Representations in Protein Co-Folding"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27440"
authors: ["Giosue Migliorini, Aristofanis Rontogiannis, Grigori Guitchounts, Nicholas Franklin, Axel Elaldi, Olivia Viessmann"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.27440v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27440v1 Announce Type: new Abstract: Foundation models for structural biology have achieved remarkable performance in predicting biomolecular structure and show promise for the design of proteins and small molecules. Yet understanding which internal features drive their outputs remains challenging. Standard sparse autoencoders (SAEs), effective on transformer-style sequence embeddings, do not transfer cleanly to pairformer-like architectures: naively operating on pairwise representations yields a quadratic blow-up of features and obscures concepts distributed jointly across sequence and pair representations. We introduce PairSAE, which summarizes pairwise tensors via an N-mode SVD into token-wise interaction roles, then uses a sparse autoencoder to learn a shared set of token-level features that decode into both sequence and pair representations. Evaluated on Boltz-2 activations for PLINDER protein-ligand complexes, PairSAE yields interpretable features that align with UniProt annotations and predict Boltz-2 affinity values. These results indicate that PairSAE links the latent space of foundation models for structural biology to interpretable structural concepts, clarifying what the model "knows" while avoiding pairformer-induced pitfalls that limit conventional SAEs.
