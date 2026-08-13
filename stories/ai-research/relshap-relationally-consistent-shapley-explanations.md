---
title: "RelShap: Relationally Consistent Shapley Explanations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11508"
authors: ["Seungeun Lee, Joao Fonseca, Julia Stoyanovich"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.11508v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11508v1 Announce Type: new Abstract: Machine learning pipelines commonly flatten relational data into single-table representations, discarding structural constraints. Widely used Shapley value-based feature attributions then rely on feature independence, evaluating the model on combinations that could never arise in the underlying data, producing misleading explanations. We propose RelShap, a framework that incorporates relational constraints and data provenance into Shapley value computation, restricting both background data and coalition evaluation to relationally valid configurations. The framework is estimator-agnostic and composes with Kernel SHAP, Monte Carlo, and Leverage SHAP without altering their sampling or weighting properties. Functional dependencies further induce equivalence classes over feature coalitions, which RelShap exploits to reduce runtime without changing Shapley values; we provide a combinatorial characterization of the expected speedup. Experiments across multiple datasets, models, and estimators show that RelShap produces explanations that are more faithful to the data-generating process, correctly identifying the dominant feature in controlled settings where existing methods, including Conditional SHAP and ManifoldShap, do not. Our code is available at: https://github.com/duneag2/relshap.
