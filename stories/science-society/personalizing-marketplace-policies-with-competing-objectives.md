---
title: "Personalizing Marketplace Policies with Competing Objectives and Constrained Experiments: Evidence from a Job Marketplace"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.30932"
authors: ["Yufei Wu, Zhen Yan"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.30932v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.30932v1 Announce Type: new Abstract: Two-sided marketplaces connect distinct user groups whose interests often conflict -- improving outcomes on one side could degrade the other side's experience. To address this challenge, we deploy an integrated framework for personalizing free-value thresholds -- a policy governing the scope of complimentary services for job listings -- across a two-sided job marketplace connecting millions of employers and job seekers. Our personalized policy delivers statistically significant and economically sizable lift in the target metric while respecting engagement guardrail constraints. Direct application of standard uplift methods proves insufficient here for two reasons. First, cross-side externalities demand multi-objective optimization: maximizing employer-side metrics risks harming job seeker engagement, with effects varying substantially across job segments. Second, marketplace interference necessitates cluster-level randomization, limiting us to few discrete treatment levels -- effectively a form of positivity violation that rules out methods designed for continuous treatments. We contribute an integrated framework with three components. Our ensemble-based hybrid ranking models target and guardrail metrics separately, cutting guardrail risk by over 10% for equivalent target gains compared to single-objective approaches. A treatment effect extrapolation method extends our estimates from limited experimental variation to untested policy levels, relying on monotonicity assumptions that we validate empirically. Finally, we present production deployment, where post-launch data confirms both extrapolation accuracy and guardrail compliance. Our deployed system demonstrates that principled methodology can enable meaningful personalization even when experiments are severely constrained and different objectives compete -- common conditions that characterize many real-world marketplaces.
