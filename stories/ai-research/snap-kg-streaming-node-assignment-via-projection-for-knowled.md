---
title: "SNAP-KG: Streaming Node Assignment via Projection for Knowledge Graph Entity Integration"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25149"
authors: ["Jui-Chien Lin, Mohammad Mohammadi Amiri, Oshani Seneviratne"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2608.25149v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25149v1 Announce Type: new Abstract: Knowledge graph (KG) construction pipelines must continuously integrate newly arriving entities into a growing graph. Unlike inserting triples between existing nodes, a newly arriving entity has no graph connectivity: it emerges from the acquisition phase as a raw feature vector and must be assigned to a semantic community before entity resolution and link prediction can operate over a tractable candidate set. Existing multi-view graph clustering methods exploit multiple relation types as structural views, but are transductive: they assume a fixed graph and cannot assign unseen entities without retraining. We propose SNAP-KG (Streaming Node Assignment via Projection for Knowledge Graph Entity Integration), a framework supporting graph-structural multi-view relational clustering and inductive inference for streaming entities. SNAP-KG trains a projector to map a new entity directly to the learned embedding space using only raw features, enabling immediate cluster assignment without graph access or model retraining. Experiments on five benchmark multi-view graph datasets and a production-scale KG of 2.4 million nodes demonstrate multiple orders-of-magnitude inference speedups over retraining-based approaches and competitive clustering quality. As a candidate scoping mechanism for downstream tasks, SNAP-KG achieves 62-75% candidate search reduction on the five benchmark datasets and 97% on OGB-WikiKG2 for entity resolution and link prediction.
