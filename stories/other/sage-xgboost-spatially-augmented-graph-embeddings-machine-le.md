---
title: "SAGE-XGBoost: Spatially Augmented Graph Embeddings--Machine Learning Framework for Natural Hazards Susceptibility Mapping under Data Scarcity"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19672"
authors: ["Mohammad H. Vahidnia, Ali Pourkarimi"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19672v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19672v1 Announce Type: new Abstract: Natural hazard susceptibility mapping is often constrained by limited labeled data, reducing the generalizability of conventional machine learning and limiting the applicability of complex deep learning models. This study proposes SAGE (Spatially Augmented Graph Embeddings), a structurally informed feature-engineering framework that combines controlled noise-based data augmentation with neighborhood-based graph embeddings to improve prediction under data-scarce conditions. A K-nearest neighbor graph is constructed to derive local spatial statistics, which are reduced using principal component analysis and integrated with environmental covariates and spatial coordinates. The resulting features are used with XGBoost to develop the SAGE-XGBoost model. The framework was evaluated for landslide and wildfire susceptibility mapping. SAGE-XGBoost consistently outperformed conventional and spatially explicit machine learning models. Compared with Spatial XGBoost, it achieved an absolute improvement of above 33 percentage points across the two case studies. The model reached AUC values of approximately 0.97 for landslide susceptibility and 0.95 for wildfire susceptibility. Feature importance analysis confirmed the contribution of graph embeddings to prediction, while their integration improved spatial coherence and reduced local noise amplification. Overall, SAGE-XGBoost provides an efficient and transferable alternative to deep representation learning for environmental hazard assessment and other geospatial prediction tasks under limited supervision.
