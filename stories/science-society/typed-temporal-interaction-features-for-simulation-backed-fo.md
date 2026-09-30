---
title: "Typed Temporal Interaction Features for Simulation-Backed Forecasting of Open-Source Game Release Incidents"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31647"
authors: ["Shayma Alkobaisi, Anas Ali"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.31647v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Open-source video-game quality depends on inter-actions among code, assets, configuration, tests, contributors, and issue workflows, yet conventional defect predictors usually flatten or omit these relations. We investigate release-level forecasting of a quality incident within thirty days using GAMEQUALGRAPH-Pilot, a typed temporal feature pipeline with calibrated risk estimates and effort-aware ranking. Because the accessible OS-SGameBench materials do not provide manually audited release dates and outbreak labels, the executed evaluation is explicitly simulation-backed rather than an empirical claim about real games. Five seeded worlds each contain 120 projects and 24 releases, with project-disjoint validation and future cross-project testing. The pilot obtains an AUPRC of 0.520, AUROC of 0.673, Brier score of 0.207, and 29.68% effort-aware recall at a twenty-percent testing budget. Its closest local comparator, Static-Hetero-Reimpl, reaches 0.522 AUPRC; the -0.002 difference is not statistically significant after Holm correction. Inference requires 0.023 milliseconds per release in the measured environment. Ablations and controlled missingness, drift, engine, project-size, alert-threshold, and attribution analyses expose where typed interactions help and where they fail. Results support the reproducibility of the proposed protocol, not deployment effectiveness. Real OSSGameBench release reconstruction, stratified label audits, and official graph-model comparisons remain mandatory before journal submission or operational use in practice. This boundary protects research integrity and supports credible evaluation.
