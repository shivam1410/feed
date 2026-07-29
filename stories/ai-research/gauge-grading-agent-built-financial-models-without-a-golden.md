---
title: "GAUGE: Grading Agent-Built Financial Models Without a Golden Answer"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.24889"
authors: ["Jiacheng Lu, Sinuo Wang, Wentao Zhao, Rui Sun, Cheng Hua, Tao Song, Hui Cai, Beidi Luan, Zhengze Wu, Lingjing Teng, Yijia He, Jing Li, Daxin Jiang, Zuo Bai, Haibing Guan"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2607.24889v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.24889v1 Announce Type: new Abstract: Financial models combine public disclosures with analyst assumptions to produce forecasts and valuations. While some components can be checked mechanically, forecasts, discount rates, and target prices often admit multiple reasonable answers. Existing benchmarks nevertheless tend to grade such outputs against a single expert reference. Using independently built analyst models for the same companies, we find that across 108 directed pairs covering 65 companies, the median single-reference score is 0.33, 92.6% score below 0.70, and no same-vintage pair agrees on implied price within 10%. Point-tolerance grading can therefore penalize disagreement already present among professionals. We introduce GAUGE, a benchmark for evaluating agent-built valuation models against observed analyst practice rather than a single point answer. GAUGE uses 1,001 vendor-classified analyst workbooks and a 196-task evaluation set, with a three-layer observed-practice envelope, 56 auditable facets, eight validity gates, and deterministic structural checks. We validate the benchmark with a 55-participant known-groups study, company-grouped cross-fitting, and judge-stability audits. On the failure-aware score $\phi_0$, senior analysts average 88.3, juniors 66.0, and finance students 43.2. Across 24 agents and 1,011 scored generations, the best agent scores 53.4, above the student mean but below every senior and most juniors. It passes 93% of mechanical facets and 78% of judgment facets, with a fleet-median gap of 26 points. Current agents are substantially stronger at model construction than valuation judgment. We release the methodology, a gated de-identified data tier, a controlled training split, a versioned 48-task evaluation core, and a withheld refresh pool.
