---
title: "UpliftBench: Revealing Outcome-Regime and Objective Mismatch in Uplift Evaluation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00915"
authors: ["Binshuang Li"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2608.00915v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00915v1 Announce Type: new Abstract: Uplift modeling (conditional-average-treatment-effect estimation) drives personalized targeting, yet published uplift benchmarks frequently disagree on which estimator performs best; we show the disagreement is substantially about metrics, not models. UpliftBench evaluates 12 uplift estimators under an outer-test-isolated, multi-objective protocol across seven dataset families; its two findings are identified where a reference objective exists -- F1 on the standard continuous benchmark (IHDP), F2 in a within-sample case study on Jobs. On that benchmark, Qini shows no detectable alignment with effect accuracy -- across all 100 IHDP realizations its mean rank correlation with effect accuracy is +0.07, 95% CI [-0.03, +0.16] -- while AUUC is consistently more aligned (paired prefix-mean-AUUC-over-Qini gap +0.49 [+0.40, +0.59]; the shipped cumulative-gain AUUC aligns better still, +0.73). On Jobs, ranking metrics are structurally insufficient for a sign-threshold policy because they discard the score level; empirically, within the released split-rotation analysis direct policy-risk selection yields lower benchmark regret than random model selection while Qini, AUUC, and uplift-at-$k$ do not (14-15% regret). Calibrating the decision threshold removes 81% of the Qini-selection regret. Both findings are bounded, not universal: F1 is not detected on either validation family (the ACIC and Revenue-Synthetic gaps are both indistinguishable from zero), and F2 vanishes under a budgeted-value objective where rank suffices. UpliftBench releases versioned loaders, fixed protocols, result artifacts, and a reproducible living leaderboard; the public repository accompanies the paper.
