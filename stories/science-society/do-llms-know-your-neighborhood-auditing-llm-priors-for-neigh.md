---
title: "Do LLMs Know Your Neighborhood? Auditing LLM Priors for Neighborhood-Level Mobility Prediction and Structural Alignment"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00345"
authors: ["Saad Mohammad Abrar, Eesha Kurella, Arnav Dadarya, Naman Awasthi, Kazi Tasnim Zinat, Vanessa Frias-Martinez"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.00345v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00345v1 Announce Type: new Abstract: Human mobility is central to urban planning, transportation, public health, and emergency response, yet fine-grained trajectory data are often proprietary, restricted, and privacy-sensitive. Large language models (LLMs) offer a potential alternative by generating plausible mobility traces and predicting individual movement, but their ability to infer aggregate neighborhood-level mobility remains unclear. We evaluate zero-shot LLMs on Census Block Group-level mobility prediction across four U.S. metropolitan areas using anonymized Cuebiq data to construct point-level, trajectory-level, and temporal mobility outcomes, paired with sociodemographic and built-environment predictors. We compare LLM predictions with supervised baselines and introduce a directional alignment analysis to test whether LLM-implied predictor effects agree with empirical OLS and Jonckheere-Terpstra trends. Supervised models achieve 0.580 average accuracy, compared with 0.435 for the best LLM, with spatial extent outcomes showing the strongest predictability but also the largest LLM-baseline gaps. Directional analysis shows that LLMs often rely on coarse, stable predictor-level priors that remain similar across outcomes and cities, including asymmetric treatment of protected-group predictors. Overall, LLMs can partially recover aggregate mobility patterns from urban context, but their predictions should not be treated as structurally grounded without auditing empirical alignment and potential bias.
