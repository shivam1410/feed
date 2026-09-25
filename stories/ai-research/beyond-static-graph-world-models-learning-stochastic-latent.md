---
title: "Beyond Static Graph World Models: Learning Stochastic Latent Dynamics over Evolving Topologies"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.28670"
authors: ["Alex Schutz, Nick Hawes, Victor-Alexandru Darvariu"]
date: "Fri, 25 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.28670v1"
image: ""
generated: "2026-09-25T19:08:22+05:30"
---

arXiv:2609.28670v1 Announce Type: new Abstract: Graph-based world models have recently emerged as a means of learning transitions over relational state representations. However, existing approaches are largely limited to fixed-topology graphs or deterministic, fully observable environments. We propose the Graph Dynamics Model (GDM), a world model for graph-structured observations that is designed to handle the more general setting of evolving topologies in stochastic and partially observable environments. The GDM uses a sparse recurrent adjacency matrix to model topology updates and perform message passing, together with a recurrent state-space architecture for modelling stochastic transitions. Furthermore, we identify a gap in the evaluation of graph-based world models, as existing methods do not provide a means of comparing predicted and true distributions over the joint graph state comprising the interdependent topology, node features, and graph features. We therefore introduce the Graph Distribution Distance (GDD) metric, which uses maximum mean discrepancy with a graph kernel to comprehensively compare joint next-state distributions. We evaluate the GDM across several environments, including stochastic and partially observable settings. We demonstrate that GDM outperforms baseline models and displays zero-shot generalisation on large graphs.
