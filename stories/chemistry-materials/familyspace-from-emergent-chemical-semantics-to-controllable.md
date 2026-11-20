---
title: "FamilySpace: From Emergent Chemical Semantics to Controllable Crystal Generation"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25452"
authors: ["Haowei Hua, Irwin King, Wanyu Lin"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.25452v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Even a basic crystal autoencoder groups atoms by elemental family in its latent space. The team calls this emergent chemical semantics. They built FamilySpace on that structure. Each family gets its own source distribution, and a flow model is trained on family-matched pairs. At generation time, a user-given family template picks the source for each atom. On MP-20 and MPTS-52 it stays competitive on generation while matching the requested compositions. You can steer which elements a generated crystal contains.
