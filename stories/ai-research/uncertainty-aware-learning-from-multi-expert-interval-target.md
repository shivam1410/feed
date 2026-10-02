---
title: "Uncertainty-Aware Learning from Multi-Expert Interval Targets"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00102"
authors: ["Samira Alkaee Taleghan, Younghyun Koo, Andrew P. Barrett, Farnoush Banaei-Kashani"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.00102v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Many machine learning (ML) applications rely on expert labels, and qualified experts may provide different but plausible interpretations of the same observation. Such variation across expert labels may reflect genuine disagreement or ambiguity rather than annotation error. When individual experts additionally report intervals rather than exact values, the supervision contains two distinct sources of label uncertainty: within-label imprecision and between-expert variation. Existing methods treat these forms separately: multi-expert approaches collapse labels to a consensus, interval-target methods often yield a single prediction, and predictive-uncertainty methods rarely validate their uncertainty estimates against observed expert disagreement. To address this problem, we propose an approach that preserves individual expert intervals, separates within-label imprecision from between-expert variation, and validates the corresponding predictive uncertainty components. First, heterogeneous label vocabularies are harmonized into a common probabilistic label space, separating encoding differences from expert judgement. Second, individual label intervals are retained and modeled with a mixture of Beta distributions trained using a proper Cram\'er-distance objective, preserving distinct expert-reported labels. Third, we decompose predictive uncertainty into within-component, between-component, and model uncertainty, and evaluate whether these components correspond to within-label uncertainty, between-label uncertainty, and model error, respectively. Because this correspondence is not guaranteed, we introduce decomposition matching, which aligns the predictive components to their intended label-side sources. On sea-ice concentration the model reduces MAE by 31\% over hard labels and outperforms aggregation, interval-distribution, and interval-regression baselines.
