---
title: "A Gravitational Interpretation of Fine-Tuning Reversion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28525"
authors: ["Samuele Poppi, Nils Lukas"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.28525v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28525v1 Announce Type: new Abstract: Fine-tuning on harmless data can partially undo behaviors acquired earlier in training. Safety can erode under benign post-alignment updates, unlearned capabilities can re-emerge, latent traits can transfer through apparently unrelated supervision, and related post-alignment fragility appears in other generative settings. We argue these phenomena are usefully viewed through a common training-history lens. Our hypothesis is geometric: large early training phases create dominant behavioral manifolds, while later alignment or specialization phases are shallower displacements from them. Subsequent fine-tuning can therefore inherit a persistent reversion component pointing back toward a witness of the dominant manifold. We call this the gravitational interpretation of fine-tuning reversion. Across our main settings, representational drift rapidly acquires a component along a history-defined reversion direction (v_rev). In our main track, alignment with v_rev rises from cos = 0.429 +/- 0.052 after the first update to 0.647 +/- 0.021 by step 20. Across 24 run-step pairs, every observed alignment exceeds the p99 of an isotropic activation-space null. We demonstrate that selectively blocking motion along v_rev changes the final alignment at T=100 from 0.648 +/- 0.009 to -0.211 +/- 0.021 and reduces harmfulness from 19.0% +/- 4.0% to 8.5% +/- 1.5% with little task cost. These results support v_rev as a causally relevant mediator of early post-alignment reversion in our setup. Importantly, we do not claim that v_rev is the unique safety direction, nor that the dominant manifold is directly observed; rather, we identify a robust, history-defined direction that explains and partially controls early reversion dynamics.
