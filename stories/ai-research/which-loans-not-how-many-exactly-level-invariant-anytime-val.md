---
title: "Which Loans, Not How Many: Exactly Level-Invariant, Anytime-Valid Monitoring of Deployed Risk Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28342"
authors: ["Xin Xu"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28342v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

A refinancing wave can change the number of mortgage prepayments without changing the relationship between scores and prepayment. In a logistic model, conditioning on the monthly count removes the intercept from the likelihood of which loans prepay. Our fixed-start slope product tests a lower bound on the calibration slope. At threshold 20 its probability of ever crossing under the null is at most 5%. The restarted level sum tracks departures from intercept tolerance. A confidence sequence estimates a constant slope, and the restart-intersection rule detects changes in that slope. A continuous mixture avoids the off-grid width floor of a discrete prior. On Freddie Mac loans, fixed-slope resampling reproduces 78% of maintained-model monthly AUC variance in development and 70% in the holdout (95% intervals 57-100% and 48-100%). From fresh holdout starts, the restarted level sum crosses on both paths, and the fixed-start slope product stays below threshold on both. The restart-intersection rule signals a downward change for the frozen model in April 2018 and an upward change for the maintained model in a supplementary run in August 2019.
