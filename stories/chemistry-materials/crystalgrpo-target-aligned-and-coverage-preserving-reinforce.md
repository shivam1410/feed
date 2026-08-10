---
title: "CrystalGRPO: Target-Aligned and Coverage-Preserving Reinforcement Learning for Flow-Based Crystal Structure Prediction"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06582"
authors: ["Kaixiang Su, Hongfei Xue, Qiang Zhu"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 78
guid: "oai:arXiv.org:2608.06582v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

CrystalGRPO improves crystal structure prediction by adding reinforcement-learning post-training to flow-based generative models that work with ODE-to-SDE policy constructions. Rather than relying solely on energy rewards, the framework combines MACE-predicted energy with StructureMatcher-based recovery scoring applied to joint coordinate-lattice state. It offers two operating modes: CrystalGRPO-Q prioritizes single-draw recovery while CrystalGRPO-C combines full-trajectory reference regularization with coverage-aware group advantages. Testing across MP-20 and MPTS-52 datasets with PXRDGen and OMatG backbones shows consistent reductions in one-sample and twenty-sample RMSE compared to coordinate-only baselines, with CrystalGRPO-Q improving Top-1 recovery and CrystalGRPO-C achieving higher Top-20 performance. Accurate structure prediction accelerates materials discovery.
