---
title: "When Can You Trust Offline Evaluation of Equal-Cost Top-k Allocation? A Controlled, Reproducible Benchmark and Practitioner's Guide"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.12489"
authors: ["Binshuang Li"]
date: "Fri, 14 Aug 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2608.12489v1"
image: ""
generated: "2026-08-14T19:05:44+05:30"
---

arXiv:2608.12489v1 Announce Type: new Abstract: Organizations decide whom to treat under a budget and want to know what a targeting rule would have earned before deploying it. Off-policy evaluation promises this from logged data, but the deployable rule is a deterministic top-k policy: it removes all averaging over actions, so weak overlap hits the estimate directly. We benchmark six estimators across five datasets and two known-effect sweeps, and validate the mechanisms against a non-simulated paired reference. First, weak overlap is governed by logger-target action alignment, not by logging sharpness alone: what governs support is the logger's probability of the target's actions. Sharpening a logger built from the target's own score barely moves overlap over the tested range; action-level disagreement collapses it. Effective sample size ranks this risk across logging environments, but is weak at ranking candidates within the single log a practitioner holds, and its cut point does not transfer. Second, the optimizer's curse is not fixed by cross-fitting the outcome nuisance. When the rule is fit on the data used to evaluate it, cross-fitting the nuisance alone leaves the reuse bias in place and makes it worse. Honest policy-level splitting avoids the reuse by targeting the learning procedure's value -- a change of estimand, not a de-biasing of the full-sample policy. Third, propensity-estimation error is the largest degradation we measure: an out-of-fold estimate hurts IPS more than any other stress we apply, leaves doubly-robust estimation almost unchanged, and can invert the overlap diagnostic itself. Logging is synthesized and propensities floored at 0.02, so every failure occurs with bounded weights; the floor also reduces the two tuned hybrids to their untuned parents, leaving four practically distinct estimators, and all exact-value surfaces are synthetic or semi-synthetic. We release the benchmark; public data only.
