---
title: "EnSol: an environment-aware graph neural network for molecular solubility prediction"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21151"
authors: ["Thao Nguyen, Saman Shafaei, Zhengyi Zhang, Huimin Zhao, Heng Ji"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.21151v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21151v1 Announce Type: new Abstract: Molecular solubility directly affects key aspects of molecular development such as reaction feasibility, formulation performance, separation efficiency, and solvent selection. However, experimental measurement across solutes, solvents, and temperatures remains costly and sparsely sampled. Existing computational models often rely on fixed-solvent assumptions, deterministic formulations, or simplified representations of solute-solvent interactions, limiting their ability to capture complex molecular interactions, continuous temperature effects, and experimental uncertainty. Here, we introduce EnSol, an environment-aware probabilistic framework for molecular solubility prediction. EnSol represents the solute and solvent as molecular graphs and learns separate representations for each before bringing them together through cross-attention to capture solute-solvent interactions. Temperature is incorporated directly into the solvent environment through feature-wise modulation, and a mixture density network predicts full solubility distributions to capture both temperature-dependent behavior and experimental uncertainty. On the independent SolProp and Leeds benchmark datasets, EnSol achieved Spearman correlations of 0.876 and 0.601, respectively, outperforming state-of-the-art solubility prediction models across both benchmarks. Beyond computational benchmarking, experimental validation across chemically diverse solute-solvent pairs showed that EnSol maintained strong predictive performance and supported reliable solvent ranking, achieving a Spearman correlation of 0.715. These results show that EnSol can support reliable solubility prediction and solvent selection across diverse chemical systems while accounting for predictive uncertainty.
