---
title: "FunnelCausalNet: Funnel-aware Joint Conversion-Revenue Uplift for Multi-tier Coupon Allocation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11675"
authors: ["Yu Zhang (AMap Alibaba Group, Beijing, China), Zhihan Wang (AMap Alibaba Group, Beijing, China), Guanlin Chen (AMap Alibaba Group, Beijing, China), Min Jiang (AMap Alibaba Group, Beijing, China), Shuai Li (AMap Alibaba Group, Beijing, China)"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.11675v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11675v1 Announce Type: new Abstract: Coupon campaigns seek to lift both conversion and revenue, but gross merchandise value (GMV) follows a deterministic funnel from conversion to conditional order value and is zero-inflated and heavy-tailed. We propose FunnelCausalNet, an uplift estimator coupling a binary conversion head with a nonnegative conditional-value head through $\mu_{\mathrm{gmv}}=\mu_{\mathrm{conv}}\mu_{\mathrm{val}}$. Under explicit RCT, support, rate-gap, and cross-head covariance-control assumptions, an idealized leading-order MSE comparison identifies a regime in which funnel composition can reduce pointwise variance; this is a heuristic, not a guarantee for the shared-representation neural model. The estimator is paired with marginal split-conformal CATE summaries, combined through a Bonferroni union as audit bands, and a Lagrangian budgeted allocator using RCT-anchored estimates for subsidy-aware ROI accounting. On semi-synthetic multi-tier Criteo-MT7, FunnelCausalNet's mean AUUC_GMV is within one seed standard deviation of the leading feature-interaction baseline among eleven baselines, while a controlled ablation reduces GMV effect error versus direct GMV regression by 18--48% across tested zero-inflation regimes. On de-identified industrial Hotel-Coupon RCT logs with about 4.9 million hold-out exposure records per seed, expected-outcome evaluation sweeps full LP frontiers; FunnelCausalNet has the best seed-averaged mean DeltaROI at all seven correlated anchors from 10% to 60%, which we treat as descriptive frontier consistency rather than independent significance. On sparse binary-spend public benchmarks, revenue-focused rankers can dominate uplift-curve proxies, defining an explicit regime boundary.
