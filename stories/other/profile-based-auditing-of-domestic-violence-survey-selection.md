---
title: "Profile-Based Auditing of Domestic Violence Survey Selection Across South Asia"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15106"
authors: ["Mohammad Abu Obaida Mullick, Rezaur Rahman Ratul, Mymuna Nourin, Md. Motaharul Islam"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15106v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Domestic violence (DV) data in the Demographic and Health Surveys (DHS) are collected through a specialized module whose household-level sampling and privacy requirements create a distinct observation process. We ask whether demographic, socioeconomic, and household characteristics form reproducible population profiles and whether these profiles contain information about selection into the DV module across South Asia. Using DHS Individual Recode data for 796,374 women aged 15-49 across Afghanistan, India, Myanmar, Nepal, and Pakistan, we harmonize 61 numeric and 8 categorical features, reduce the profile space with PCA, and identify six interpretable profiles. We then evaluate 22 machine-learning models under primary-sampling-unit-aware holdout validation. The best model, HistGradientBoosting, achieves ROC-AUC 0.9167 and PR-AUC 0.9612, versus 0.8475 and 0.9203 for a design-only baseline. Adding woman-level characteristics yields the largest incremental gain, while explicit interaction terms add little out-of-sample performance. Country-specific analyses reveal substantial heterogeneity, and leave-one-country-out evaluation shows that transferability of the incremental profile signal is limited. These results demonstrate that interpretable ML can audit differential coverage in sensitive survey modules beyond the formal sampling design.
