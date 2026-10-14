---
title: "A Physics-Informed Hybrid Forward-Inverse Machine Learning Framework for High-Dimensional Sparse Recipe Reconstruction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14097"
authors: ["Md. Muqtadir Fuad, Md. Istiak Adnan, Ridwan Al Aziz"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14097v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

High-dimensional sparse recipe formulation in process industries involves nonlinear association of various covariates, bounded by sparsity constraints and multi-criteria tolerances. Traditional physics-based classical methods (such as Kubelka-Munk) fail to generate sparse candidate recipes properly due to their simplified assumptions and industrial process variations. This study proposes a hybrid physics-informed uncertainty-aware framework that is structured into three modules: (a) Module A, a multi-target forward quality model; (b) Module B, a sparse inverse reconstructor; and (c) Module C, a feasibility-constrained ranking layer. Then it has been validated in an industrial textile dyeing context with recipe-grouped cross-validation under multi-illuminant quality assessment comprising process and production information, target reflectance, K/S values, and spectral descriptors. Histogram Gradient Boosting (HGB) with spectral-only features ($R_\lambda$, K/S) and Gradient Boosting Regressor (GBDT) with recipe-process features outperforms other configurations with out-of-Fold MAE of 0.1655 and 0.1523 in the forward quality model. For inverse reconstruction, a component-wise median blend achieved a recipe-vector MAE of 0.0295. Exploratory conditional treatment effect (CATE) suggests an observational association that alkali adjustment reduces error for red and pale shades (CATE = -0.196). This framework provides a human-in-the-loop decision-support tool that minimizes costly laboratory trials across industrial formulation domains.
