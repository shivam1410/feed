---
title: "When Does Deep Representation Learning Help Single-Cell Clustering? A Sensitivity-Aware Diagnostic Benchmark for Biomedical AI Pipelines"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25288"
authors: ["Nguyen Thanh Phong, Truong Viet Vu, Nguyen Ha Thu, Tran An Ky, Tran Hoang Thong, Le Pham Thuy Hien, Nguyen Thai Anh"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.25288v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25288v1 Announce Type: new Abstract: Single-cell ribonucleic acid sequencing (scRNA-seq) is a foundational technology for precision-medicine workflows that contribute to United Nations Sustainable Development Goal 3 on Good Health and Well-being, and unsupervised clustering is the analytical step that turns raw expression matrices into interpretable cell populations. Practitioners therefore face a recurring engineering decision: is an additional deep representation stage worth its compute and tuning cost, or do classical principal component analysis (PCA) pipelines already suffice? We address this question with a diagnostic benchmark of nine clustering pipelines on ten real datasets (90-5,685 cells, 19,046-41,480 genes, 4-11 cell types), augmented by a partial scVI V2 specialized comparison on seven datasets. The protocol integrates Optuna hyperparameter search, repeated-run robustness, Friedman/Wilcoxon-Holm/TOST testing, and Sobol total-order sensitivity analysis. The contrastive autoencoder achieved the highest mean Adjusted Rand Index (0.7872), but Holm-corrected tests did not establish dominance over the strongest baselines. Per-dataset analysis reveals three reproducible regimes: probabilistic variational autoencoder (VAE) variants help on the smallest datasets, deep autoencoders win on mid-scale data with multi-batch or many-type structure, and classical PCA pipelines remain competitive when linear projection already captures the dominant variation. Sobol indices identify learning rate ($S_T=0.70$) and latent dimensionality ($S_T=0.56$) as the dominant variance contributors, indicating where limited tuning budgets should be allocated. The contribution is therefore a dataset-aware and compute-conscious decision framework for biomedical AI pipelines supporting sustainable healthcare analytics, rather than a universal superiority claim.
