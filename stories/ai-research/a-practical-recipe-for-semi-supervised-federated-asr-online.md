---
title: "A Practical Recipe for Semi-Supervised Federated ASR: Online Pseudo-Labels with Server Update Stabilization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25471"
authors: ["Wonho Bae, Zakaria Aldeneh, Martin Pelikan, Jan \"Honza\" Silovsky, Tatiana Likhomanenko, Sheikh Shams Azam"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25471v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25471v1 Announce Type: new Abstract: Semi-supervised federated learning (SSFL) trains models on clients' unlabeled data using a teacher to generate pseudo-labels, with a small labeled seed dataset on the server. Automatic Speech Recognition (ASR) is particularly fragile here: pseudo-label errors compound across the output sequence and across training rounds into divergence, leaving a large gap to fully-supervised FL. We show that closing this gap turns on two coupled design axes -- the teacher (which model generates the pseudo-labels) and the anchor (the server-side updates on labeled data that stabilize training). On the teacher axis, a per-client online teacher (each client's own evolving model) diverges on its own, but once stabilized it matches or beats the broadcast global teacher (one server model, fixed within a round) -- decisively in-domain and competitively under domain shift. As the seed grows stronger and the online teacher's advantage narrows, a transitioning teacher (global $\rightarrow$ online at round $r$) matches or beats both. On the anchor axis, the server must keep training on labeled data between rounds -- otherwise the online teacher drifts -- and this interleaving, more than the seed model, governs convergence. The two axes are inseparable: aggressive teacher choices pay off only once the anchor stabilizes training, which is highly sensitive to data augmentation and batch size -- the settings that govern how much input and gradient noise the server injects. How much stabilization is needed is domain-dependent, governed by the dispersion of the seed data and its overlap with client data. These findings yield guidelines for SSFL in ASR training, improving over the strongest prior method on 9 of 11 pairs, by $20.8\%$ on average in-domain and $10.0\%$ cross-domain, narrowing the gap to fully-supervised FL.
