---
title: "Reification as a Transferable Vocabulary: Zero-Shot Link Prediction with Vanilla GNNs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11347"
authors: ["Camille Pradel"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11347v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11347v1 Announce Type: new Abstract: Knowledge graph foundation models such as ULTRA achieve zero-shot link prediction on unseen graphs through dedicated architectures that hard-code a transfer mechanism. In this work we move that mechanism out of the architecture and into the representation, by \emph{reifying} the input graph: every fact becomes a node, connected to its subject, object, and relation type through a fixed vocabulary of six meta-relations, with relation types as anonymous shared nodes rather than model parameters. On this representation, five textbook GNNs (GAT, GINE with sum and with mean+max aggregation, GraphSAGE, R-GCN), each trained on a single knowledge graph of 4,245 triples for 30 minutes on one NVIDIA A100, transfer zero-shot to 40 inductive link-prediction benchmarks. The best of them, an off-the-shelf GAT, matches ULTRA, a dedicated foundation model pretrained on three graphs, across ULTRA's own evaluation suite. The same fixed vocabulary extends to relational databases, a row becoming an entity and a foreign-key column a relation type; a preliminary probe on two unseen databases, with no cell values, schema text or in-context labels, shows a model of this family pretrained on three knowledge graphs ranking foreign-key targets far above random-initialization and degree controls. We release the code, the checkpoints, and the evaluation pipeline for all 40 benchmarks.
