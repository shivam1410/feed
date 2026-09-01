---
title: "NVE: A Separability and Coverage-Aware Internal Validation Metric for Biclustering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29045"
authors: ["Paritosh Tiwari, I Navin Kumar, James C. Bezdek, Punit Rathore"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.29045v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29045v1 Announce Type: new Abstract: Biclustering, or co-clustering, aims to discover coherent submatrices by grouping rows and columns of a data matrix simultaneously. This local two-dimensional structure makes validation more difficult than in ordinary clustering, where internal indices usually rely on compactness and separation in a single shared feature space. Existing popular internal biclustering measures such as Mean Squared Residue (MSR), and Virtual Error (VE) mainly evaluate within-bicluster coherence. Although useful, these measures do not directly assess whether the extracted biclusters are mutually distinct or whether they explain a meaningful portion of the data matrix. This paper investigates Normalised Virtual Error (NVE), an internal validation metric that extends VE using a super-bicluster normalization strategy. By comparing the VE of each bicluster with the VE obtained after merging it with other biclusters, NVE introduces a relative notion of separability and redundancy. We also study a coverage-adjusted variant, NVE\textsubscript{cov}, which penalizes solutions that obtain low error by selecting only very small submatrices. Through controlled synthetic benchmarks and yeast gene-expression datasets, we examine whether NVE and NVE\textsubscript{cov} provide information beyond standard coherence-based metrics. The results show that NVE is sensitive to redundant and poorly separated biclusters, while NVE\textsubscript{cov} changes solution rankings when low-error biclusters cover only a negligible part of the matrix. These findings suggest that NVE-based measures are useful complementary criteria for internal co-clustering validation, especially when coherence, separability, and coverage must be considered jointly.
