---
title: "How Much Distribution Shift Can a Clustering Withstand? Exact Split and Merge Certificates for Structured Transports"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.22000"
authors: ["Alisina Bayati, Srinivasa Salapaka, Shahriar Talebi"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.22000v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

In clustering, the distribution of the population being clustered is often uncertain or changes over time, so the true distribution may shift away from the nominal distribution used to form the clustering. Once the clustering is committed and each member is assigned to a cluster, such shifts may change the distribution of each cluster. They can make a cluster too spread out for one representative at a given resolution, motivating a split, or bring distinct clusters close enough to share a representative at that resolution, motivating a merge. We make these split and merge events precise using a local stability criterion built on the phase-transition analysis in deterministic annealing. This notion of stability enables us to quantify how robust a clustering is against such events. Furthermore, motivated by applications in which uncertainty and population change are structured, we study shifts whose displacements are restricted to a prescribed subspace. The smallest structured shifts that reach the respective thresholds define the split and merge radii, for which we obtain exact semidefinite programming (SDP) reformulations. The split SDP has only two scalar decision variables. These convex reformulations enable us to combine the radii into a robustness certificate for the full clustering that gives the size of the smallest structured shift that reaches any monitored split or merge threshold.
