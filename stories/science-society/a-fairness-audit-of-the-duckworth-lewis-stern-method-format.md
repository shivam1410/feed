---
title: "A Fairness Audit of the Duckworth-Lewis-Stern Method: Format-Specific and Gender-Differential Bias, with an Interpretable Calibration Layer for Cricket Target Revision"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04754"
authors: ["Soumyadeep Roy"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.04754v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04754v1 Announce Type: new Abstract: The Duckworth-Lewis-Stern (DLS) method has been the international standard for revising target scores in rain-interrupted limited-overs cricket since 1999. Despite over two decades of operational use, no large-scale empirical audit of its prediction bias has been published. We conduct such an audit on 8,150 international matches (3,095 ODIs, 5,055 T20Is) from Cricsheet, generating 233,550 synthetic interruption scenarios with temporal splits. We document two structured biases. First, DLS prediction error spans a 137-run range across (overs-remaining, wickets-lost) match-state buckets. Second, DLS exhibits a gender-differential bias on ODIs that has not previously been quantified: on the training split, mean over-prediction is +1.51 runs for men but +7.63 runs for women, a gap of +6.13 runs (F = 195.16, p < 10^-43). We benchmark DLS against five modern alternatives: Bi-LSTM, XGBoost, an enriched XGBoost variant, a deep context-aware model, and a stacking ensemble, and propose DLS-Cal, a lightweight interpretable calibration layer (27K parameters) outputting a state-conditioned correction added to DLS. DLS-Cal reduces absolute bias by 31% on ODI and 19% on T20I, and a gender-aware variant reduces women's ODI residual bias from +6.19 to +0.65 runs while leaving men's calibration unchanged. We release code, models, and data.
