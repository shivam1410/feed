---
title: "TS-Fault: Benchmarking Time Series Forecasters Against Structural Faults"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18539"
authors: ["Yuyang Zhao, Lian Xu, Hao Miao, Chenxi Liu, Hao Xue"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.18539v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18539v1 Announce Type: new Abstract: Time series forecasting (TSF) underpins consequential decisions in energy, transportation, finance, and healthcare, yet TSF models are almost universally ranked by a single number (e.g., average error) on clean held-out data, under the implicit assumption that it predicts deployed reliability. However, real faults are not i.i.d noise but structured events with temporal shape, broken cross-variable dependencies, regime change coupled with missingness, and causal propagation across a sensing pipeline. Treating TSF robustness as a data-quality problem, we present TS-Fault, a benchmark that evaluates forecasting models under explicit, parameterized fault scenarios with controllable semantic difficulty. TS-Fault organizes recurring failures into four modes along two orthogonal axes (observation- vs mechanism-level; univariate vs multivariate) and injects each fault into the most prediction-critical window via a unified importance score. This design enables robustness to be tested against the structures models actually rely on, rather than reduced to generic noise sensitivity. We evaluate 21 models across 6 datasets, 4 modes, and 5 difficulty levels under a paired clean/corrupt protocol. The results reveal three findings that contradict common leaderboard intuition: (i) clean-data accuracy anti-correlates with robustness; (ii) clean rankings are preserved under observation-level faults but reshuffled under mechanism-level faults; and (iii) all catastrophic failures occur under mechanism-level faults, with foundation models achieving the highest clean-data accuracy yet exhibiting the greatest fragility. The code is publicly available at https://github.com/Ray-zyy/TS-Fault.
