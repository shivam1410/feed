---
title: "Randomized SVD Approximations for Spectral Co-Clustering of Word-Document Matrices"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19243"
authors: ["Fateme Mazdarani, Carlos Toxtli"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19243v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19243v1 Announce Type: new Abstract: Spectral co-clustering is a useful tool for discovering latent structure in word-document matrices, but its reliance on singular value decomposition (SVD) can make standard formulations expensive on high-dimensional data. This paper presents two randomized approximations for normalized spectral co-clustering of bipartite text data when the numbers of document and word clusters may differ. The first method uses randomized SVD through random projection, while the second combines partial SVD with element-wise random sampling. Across real-world and synthetic datasets, both methods reduce runtime relative to the full-SVD baseline, but their behavior depends on matrix sparsity. The random projection method is the more reliable approximation across the tested settings, whereas the sampling-based method is most useful on denser matrices and provides limited benefit on already sparse text data. These results show that randomized approximations for spectral co-clustering should be selected according to the underlying structure of the data.
