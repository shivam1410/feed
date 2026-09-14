---
title: "When Connected Does Not Mean Similar: Charting the Homophily Boundary of SNAP-KG for Streaming Entity Integration"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12356"
authors: ["Jui-Chien Lin, Oshani Seneviratne"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12356v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12356v1 Announce Type: new Abstract: SNAP-KG is a framework for assigning newly arriving entities to semantic communities in a growing knowledge graph (KG) using only their raw features, with no graph access and no retraining at inference time. It was evaluated on five multi-view benchmarks and a 2.4M-node OGB-WikiKG2 KG. In each of these datasets, at least one graph view is homophilous, meaning that connected nodes usually belong to the same class, and SNAP-KG performs well on all of them. This paper asks what happens outside that setting. We extend the evaluation to three heterophilous graphs (Texas, Wisconsin, Chameleon) and measure the edge homophily of every view. When no homophilous view is available, clustering quality drops sharply for both SNAP-KG and the transductive baselines used in its original evaluation. What decides this is the homophily of the relation, not the number of relations. Multi-view fusion still helps, but only when at least one homophilous relation provides a reliable foundation. The homophily assumption is therefore shared by the whole method family, not specific to SNAP-KG. We argue that heterophilous multi-view clustering is a separate research problem, outside the scope of this work. As future work, we outline how a heterophily-aware teacher could be distilled into SNAP-KG's projector to serve both homophilous and heterophilous KGs.
