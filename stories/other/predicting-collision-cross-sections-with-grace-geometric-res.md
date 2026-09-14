---
title: "Predicting Collision Cross Sections with GRACE: Geometric Residual Adduct Conditioning via Early-fusion"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12223"
authors: ["Parthasarathy Suryanarayanan, Susanta Das, Shreyans Sethi, Kenneth M. Merz, Jr., Joseph A. Morrone"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12223v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12223v1 Announce Type: new Abstract: Collision cross section (CCS), derived from ion mobility mass spectrometry, is a common descriptor for molecular annotation. Prediction is challenging for machine learning models because it reflects the size, shape, and ionization state of a gas-phase molecular ion. Most predictors either ignore explicit 3D structure or treat adduct identity as a late categorical feature, which limits their ability to capture adduct-dependent geometric effects. We present GRACE (Geometric Residual Adduct Conditioning via Early-fusion), a 3D CCS predictor that adapts a pretrained molecular geometry encoder using geometric residual adduct conditioning via early fusion. GRACE combines two inductive biases: a residual objective relative to an adduct-aware physical descriptor baseline and adduct conditioning within the encoder via a learned adduct token and low-rank attention adapters. We evaluate the model on a curated set of over 9,000 experimental molecule-adduct CCS records with random, scaffold, and adduct-sensitive splits designed to separate interpolation, scaffold generalization, and adduct-driven generalization. GRACE achieves the best mean percentage difference among the evaluated learned models on all three splits: 1.67% on the random split, 2.11% on the scaffold split, and 2.36% on the adduct-sensitive split. Diagnostic analyses suggest that residual learning stabilizes training by removing the dominant mass-CCS trend, while early fusion improves adduct-sensitive prediction relative to late fusion. Across four independent external test sets, GRACE shows consistently lower error than the other evaluated models. On a held-out set, GRACE also attains the lowest mean percent difference when compared with four previously reported physics-based workflows. These results support residual learning and encoder-level adduct conditioning as practical inductive biases for fast, accurate CCS prediction.
