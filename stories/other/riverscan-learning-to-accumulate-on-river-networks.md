---
title: "RiverScan: Learning to Accumulate on River Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18005"
authors: ["He Zhu, Zhiyi Gao, Youhuan Yang, Han Quan, Ming Li"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18005v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Accurate runoff prediction across large river basins requires models to capture heterogeneous local hydrological responses and their accumulation downstream. River-network connectivity provides a natural structure for this task, but using it effectively requires learning how to combine contributions from subcatchments of different sizes. We frame this challenge as learning to accumulate and introduce RiverScan, a spatial operator based on area-weighted selective state-space recurrence. RiverScan recursively combines local temporal representations with accumulated upstream states in topological order. Contributing-area fractions account for subcatchment size, while learned retention controls how upstream information persists downstream. Experiments on 608 stations in the Danube basin show that RiverScan outperforms the evaluated temporal and graph baselines in overall predictive performance. Structural controls and ablations demonstrate that composing heterogeneous subcatchment representations in a manner aligned with hydrological accumulation substantially improves runoff prediction, with the benefits of correct topology growing along the river-network hierarchy. These findings establish physically structured accumulation as an effective inductive bias for hydrological modeling and motivate finer-grained, fully distributed AI-based hydrological models.
