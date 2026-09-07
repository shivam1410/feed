---
title: "How Faithful Is Attribution for Sales Forecasting? A Counterfactual Study"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04797"
authors: ["Glib Kechyn"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.04797v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04797v1 Announce Type: new Abstract: Deep models for sales forecasting, such as WaveNet-style dilated convolutional networks, are accurate but opaque: when a single model predicts sales for one of many series, it offers no account of why. We add a post-hoc, architecture-agnostic counterfactual interpretability layer to a multi-series WaveNet forecaster trained on the full Corporacion Favorita grocery dataset (174,685 series over 1,688 days). The method decomposes each forecast into contributions that sum exactly to the predicted value, avoiding the allocation artifacts we observed with additive SHAP-style attribution. We evaluate faithfulness with a deletion/insertion protocol and find a statistically significant effect on both tests (deletion gap 0.22, p<0.001; insertion gap 0.27, p<0.01; robust across five background-sampling seeds), establishing that the attributions reflect genuine model behavior rather than plausible-looking artifacts. We then characterize, honestly, where attribution is and is not informative: reliance on the promotion signal is heterogeneous across series (median ratio approximately 1.0, with roughly 20% of series showing a strong effect), and the model captures the shape of the weekly sales cycle (day-of-week r=0.78) while systematically under-predicting its amplitude. Our contribution is not improved accuracy but an interpretability layer with a rigorous faithfulness evaluation and a candid account of its limits.
