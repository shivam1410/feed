---
title: "SLM-Conditioned Hierarchical Relation Routing for Labeled Property Graph Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26132"
authors: ["Michal Podstawski"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2608.26132v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26132v1 Announce Type: new Abstract: Labeled property graphs combine relational structure with heterogeneous textual and categorical properties attached to both nodes and relationships. Conventional graph neural networks typically represent these properties as static feature vectors, limiting their ability to determine which semantic evidence should influence message propagation for a particular prediction target. We propose SLM-Conditioned Hierarchical Relation Routing, an architecture that integrates a small language model directly into graph message selection. A topology GNN provides a stable structural representation and prediction anchor. For each target node, incident messages combine the neighbor's structural state, node-property encoding, relationship-property encoding, and relationship type. A parameter-efficient SLM processes structured graph soft tokens and produces a target-conditioned routing query. This query first selects relevant messages within each relationship type and subsequently routes information across relation-level summaries. The resulting representation provides a bounded residual update to the topology anchor, preserving structural evidence while allowing contextual semantic information to modify the prediction. The architecture supports interpretable analysis at both the neighbor and relationship-type levels and provides a general mechanism for integrating language-derived semantics into property-rich graph learning.
