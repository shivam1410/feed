---
title: "PhenoBench: Mapping What a Deeply Phenotyped Human Cohort Can Tell Us"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06080"
authors: ["Gal Sapir, Alon Diament, Adva Wolf, Doron Yaya-Stupp, Dikla Gelbard Solodkin, Dana Azouri, Anat Etzion-Fuchs, Guy Lutsker, Eran Segal, Hagai Rossman"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.06080v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06080v1 Announce Type: new Abstract: Deeply phenotyped cohorts combine clinical, imaging, molecular, and wearable observations across timescales from seconds to years. This breadth can reveal which measurements inform which health-related questions, but heterogeneous analyses are not directly comparable. We present PhenoBench, an executable benchmark built around the Human Phenotype Project, in which more than 13,000 participants have completed the initial visit. Each question fixes the target, eligible population, timing, and allowed information; its evaluation contract specifies the split, metric, baseline, and claim boundary. The benchmark defines 90 clinically grounded tasks across 15 domains and 26 input modalities. Measurements showed question- and representation-dependent predictive value, including positive, near-zero, and negative changes in held-out performance relative to matched baselines. We used PhenoBench to evaluate emerging tabular foundation models across 160 matched regression comparisons spanning 52 tasks. These models ranked above standard task-specific models in aggregate but, averaged across the three pretrained models within each cell, improved on ridge by a median of only 0.004 $R^2$ (95% CI, 0.002--0.006). We then used the same cohort data and evaluation contracts to evaluate 14 language models, collectively covering 40 tasks spanning phenotype recovery, classification, follow-up forecasting, and participant ordering. Without cohort-specific fitting, language models made informative predictions on some tasks, but showed task-specific capability gaps, shared failures of scale, and rarely surpassed models fitted on the same fields. PhenoBench turns a multimodal longitudinal cohort into a versioned, auditable evaluation system where new questions, measurements, and models can be added without redefining existing comparisons.
