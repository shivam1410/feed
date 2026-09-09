---
title: "A dictionary learning framework for graphs via filters and optimal transport"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05919"
authors: ["Jinchuan Liao, Dai Hai Nguyen"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.05919v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05919v1 Announce Type: new Abstract: We propose a graph dictionary learning (GDL) framework where each graph is represented as a zero-mean Gaussian distribution derived from its filtered Laplacian. Each observed graph is approximated by a barycenter over learned atom graphs, computed under the filter graph distance (fGOT), a graph comparison metric sensitive to global structural properties. The reconstruction error between the observed graph and its barycenter is measured by the surrogate fGOT (sfGOT) distance, a tractable approximation of fGOT that handles graphs without known node correspondence, and is minimized end-to-end via backpropagation. We further provide a novel interpretation of sfGOT through the lens of the Hilbert-Schmidt Independence Criterion, showing that minimizing the sfGOT distance between two graphs is equivalent to maximizing statistical dependence between the spectral embedding of their nodes. Experiments on benchmark datasets demonstrate competitive performance over existing GDL methods on graph clustering and classification tasks.
