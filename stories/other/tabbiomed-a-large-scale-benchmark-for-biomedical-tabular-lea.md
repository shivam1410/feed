---
title: "TabBioMed: A Large-Scale Benchmark for Biomedical Tabular Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23779"
authors: ["Pau Mateo-Bernad\\'o, Saivenkata Nagavyjayanthi Polapragada, David Bonet, Pol Arbiol Rakuljic, Laia Mogas Pladevall, Mar\\c{c}al Comajoan Cara, Jesus Gonzalez-Ferrer, Jordi Abante, Daniel Mas Montserrat, David Haussler, Alexander G. Ioannidis"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23779v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Recent advances in machine learning have accelerated biomedical prediction, but evaluation on structured biomedical data remains fragmented, especially for datasets with high dimensionality, large sample size, missingness, and class imbalance. We introduce TabBioMed, a large-scale benchmark of 94 curated public biomedical tabular datasets spanning electronic health records, drug discovery, genomics, transcriptomics, proteomics, metabolomics, single-cell omics, and systems biology. TabBioMed unifies these datasets through a standardized, dataset-aware preprocessing and evaluation framework, enabling reproducible comparison across classification, regression, and multi-target tasks. We benchmark 23 models across classical baselines, gradient-boosted trees, neural tabular architectures, and tabular foundation models. Foundation models deliver the strongest family-level predictive performance. However, their gains are regime-dependent: tree-based models and tuned multilayer perceptrons remain highly competitive, often dominating under inference-time or training-cost constraints. Overall, TabBioMed shows that biomedical tabular learning is strongly context-dependent, with optimal model choice depending on data regime, task type, and computational budget. We release TabBioMed with curated datasets and splits, preprocessing code, baselines, and results, providing a reproducible benchmark for practical model selection and future methods development in biomedical machine learning, available at https://github.com/AI-sandbox/TabBioMed.
