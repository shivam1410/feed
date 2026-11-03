---
title: "TabAbax: A Tabular Foundation Model Technical Report"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00562"
authors: ["Zhixiong Cheng, Xiaoyun Gao, Shiyuan Han, Jingjing Suo, Zhengli Wang"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.00562v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Tabular foundation models (TFMs) enable in-context prediction on unseen tabular datasets without task-specific training. Mechanistic work has shown that increasing the depth of the ICL Transformer yields weak gains, leaving the main headroom for gains in the synthetic pretraining prior and column-row encoder upstream of the ICL backbone. We introduce TabAbax, a TFM built on TabICLv2 that focuses all modifications on these two upstream components. On the prior side, we further improve the quality and complexity of the synthetic pretraining prior. On the encoder side, a two-pass column-row stack strengthens cross-feature interactions before row compression, using learned Fourier scalar encoding from TabFM and Causilo. Evaluations on BeyondArena and TabArena show strong regression-centric gains: TabAbax reaches 1,238 Elo on the 142-dataset BeyondArena suite (10th of 41 evaluated methods), 1,676 Elo on TabArena's overall 51-dataset suite (11th of 99 methods, +115 over TabICLv2), and 2,024 Elo on TabArena's regression benchmark (7th of 99 methods, +336 over TabICLv2, +21 over TabFM). A prior-only ablation confirms the attribution: the improved prior alone yields +228 Elo for regression, demonstrating that prior quality is the dominant knob for improving regression performance.
