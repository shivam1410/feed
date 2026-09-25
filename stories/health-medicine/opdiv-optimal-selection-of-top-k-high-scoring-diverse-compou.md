---
title: "OPDiv: Optimal Selection of Top-K High-Scoring, Diverse Compounds"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.28665"
authors: ["Miroslav L\\v{z}i\\v{c}a\\v{r} (Deep MedChem)"]
date: "Fri, 25 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.28665v1"
image: ""
generated: "2026-09-25T19:08:22+05:30"
---

arXiv:2609.28665v1 Announce Type: new Abstract: A virtual screening campaign may produce thousands of promising candidates, but only a small number can be purchased, synthesized, or tested. The practical question is how to select a set of compounds that both rank well and are diverse enough: this poses a genuine tradeoff, where selecting the highest-scoring molecules yields limited diversity, while diversity selection sacrifices some well-scoring molecules. We introduce OPDiv, a diversity selection and evaluation algorithm solving this tradeoff by finding an optimal subset of molecules using integer optimization. We demonstrate the selection algorithm in practice with fingerprint distance, shape and electrostatic diversity and compare the resulting diversity spectra. We argue that virtual screening is not merely a ranking problem, but also an implicit constrained optimization task: when redundant chemotypes are undesirable, pipelines should be compared based on the top-k compound selections satisfying the desired diversity constraints. OPDiv makes it possible to find the optimal compound set under a given diversity threshold efficiently and serves as a fair benchmark of the best diverse selection achievable by a given structure-based or ligand-based virtual screening pipeline, molecular search or generative model.
