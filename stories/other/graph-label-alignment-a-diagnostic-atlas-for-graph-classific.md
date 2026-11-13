---
title: "Graph Label Alignment: A Diagnostic Atlas for Graph Classification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14760"
authors: ["Neelam Akula, Varun Shiralkar, Murat Kantarcioglu, Baris Coskunuzer"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14760v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Graph classification benchmarks vary widely in difficulty: some are solved by simple pooled baselines, while others remain challenging for GNNs and graph transformers. We take a data-centric view and ask whether benchmark success is driven by genuine structure--feature reasoning or by label signal already accessible from restricted marginal views. We introduce graph label alignment, a lightweight diagnostic that measures label accessibility through two supervised probes computed without training a graph encoder: structural label alignment (SLA), based on permutation-invariant topological and spectral summaries, and feature label alignment (FLA), based on pooled node features with edges removed. Across real graph classification benchmarks and multiple pooled backbones, the resulting SLA--FLA plane strongly organizes test accuracy, with low-alignment datasets forming a consistent regime where standard pooled pipelines struggle. To probe what lies beyond marginal accessibility, we introduce controlled interaction-dominated stress tests, including heterophilic ego-graphs and synthetic Twins tasks whose structural and feature marginals are matched across classes but whose role--feature couplings differ. These results show that high alignment explains much of easy benchmark performance, while low alignment reveals regimes where success requires preserving structure--feature correspondence beyond standard pooled representations.
