---
title: "LE4Mob: Towards Inductive, Distance-Aware and General-Purpose Location Embedding for Human Mobility Modelling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22117"
authors: ["Xinglei Wang, Stephen Law, Zichao Zeng, Junyuan Liu, Guangsheng Dong, Tao Cheng"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.22117v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22117v1 Announce Type: new Abstract: Location representations provide mobility models with fundamental information about the spatial position, functional characteristics, and relationships of places. However, existing embeddings are often dependent on mobility observations, unable to represent unseen locations, and weakly constrained to retain geographic distance. This limits their reuse across datasets and mobility tasks. To address these limitations, we propose LE4Mob, an inductive, distance-aware, and geography-derived location embedding framework for mobility modelling. LE4Mob extends contrastive language-location pre-training while introducing a distance-aware regularisation objective that encourages the embedding space to preserve spatial relationships. Pre-trained from geographic context, LE4Mob can encode rich spatial-semantic information and generate embeddings for unseen locations inductively. Its independence from downstream mobility task supervision also makes it transferable across different mobility tasks. We evaluate LE4Mob on individual-level next location prediction and population-level commuter flow generation. Experiments across multiple datasets and study areas show that LE4Mob outperforms strong baselines, with particular advantages in inductive settings and when downstream models rely directly on interactions between location embeddings. These findings demonstrate the potential of distance-aware, geography-derived location representations as reusable foundations for human mobility modelling.
