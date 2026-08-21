---
title: "FAR-DPO: Feasibility-Aware and Robust Direct Preference Optimization for Cyclic Peptide Design"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19808"
authors: ["Guofeng Zhang, Rong Han, Xiaoyu Wang, Zhiyun Li, Zongbo Han, Xiaohong Liu, Guangyu Wang"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19808v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19808v1 Announce Type: new Abstract: Cyclic peptides are emerging as promising molecular scaffolds in drug discovery due to their high binding affinity and structural stability. However, extending generative models from linear to cyclic peptide design remains challenging, as cyclization sharply restricts the feasible design space through coupled geometric and biophysical constraints. Moreover, limited training data has led existing approaches to rely largely on zero-shot generation or post hoc filtering, resulting in low yields of feasible designs and limited control over multi-objective trade-offs. To address these limitations, we propose FAR-DPO (Feasibility-Aware and Robust Direct Preference Optimization), an architecture-agnostic framework that steers generative models toward structurally and biophysically feasible cyclic peptide designs, particularly for challenging targets. FAR-DPO integrates feasibility-aware preference construction with difficulty-aware group-robust optimization. Specifically, it constructs within-target preference pairs through feasibility-gated multi-objective dominance and adaptively reweights predefined difficulty groups according to their current preference losses. On the CPSea LNR benchmark, under a fixed generation budget, FAR-DPO increases overall success rate from 46.89% to 57.79% on PepGLAD and from 47.96% to 49.57% on PepFlow. These gains also extend to the hardest target quartile and are accompanied by more favorable best-per-target binding scores. Together, these results demonstrate FAR-DPO's effectiveness in improving feasibility and target-wise robustness.
