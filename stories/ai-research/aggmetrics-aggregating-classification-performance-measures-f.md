---
title: "aggmetrics: Aggregating Classification Performance Measures for Machine Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30456"
authors: ["Ronaldo Cristiano Prati"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 10
guid: "oai:arXiv.org:2610.30456v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

aggmetrics is a Python package that extends any binary performance measure expressed in the four confusion-matrix counts to multiclass, multilabel, ordinal, cost-sensitive, soft-label and cross-validation settings, by substituting one of four aggregation operators for what libraries usually expose as an average switch. The package also stores, for every measure, the structural properties that decide which identities apply to it, can infer those properties from a user-supplied formula, and uses them to warn when a measure is used where it does not behave as commonly assumed. Its test suite encodes the results of the companion theory as executable tests. The package is BSD-3 licensed, depends only on NumPy, and is available at https://github.com/rcprati/aggmetrics; documentation at https://aggmetrics.readthedocs.io.
