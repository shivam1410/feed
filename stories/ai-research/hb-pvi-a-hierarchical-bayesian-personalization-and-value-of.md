---
title: "HB-PVI: A Hierarchical Bayesian Personalization and Value-of-Information Framework for Complex Activity Recognition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05582"
authors: ["Hammed A. Olayinka"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.05582v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05582v1 Announce Type: new Abstract: Personalization can improve activity-recognition performance, but participant-specific gains are heterogeneous, and every additional calibration label has an acquisition cost. This study presents HB-PVI, a hierarchical Bayesian personalization and value-of-information framework jointly modeling participant heterogeneity, the benefit and harm of four personalization mechanisms, and the economic value of an additional label, for the 47-participant MUSIC-CAR complex-activity cohort. A leakage-safe, leave-one-participant-out evaluation combines a sequential-Monte-Carlo participant-effect updater with a Student-$t$ hierarchical gain model and a one-step expected-value-of-sample-information (EVSI) stopping rule. Adapter personalization produced small positive mean F1 gains, growing from 0.00099 at one label to 0.00198 at ten, while adapter-plus-head and prototype-residual personalization were negative on average. Under the primary practical-benefit threshold ($\Delta_{\min}=0.01$) and cost setting, one-step EVSI was zero at every decision state, so the policy purchased no labels and retained population inference for all 47 participants, matching always-stop exactly (region-of-practical-equivalence probability $=1$). Relative to fixed ten-shot adapter personalization, this reduced labeling by 100\% while keeping the posterior mean F1 loss at 0.00217 (95\% credible interval, 0.00048 to 0.00389), with posterior probability 0.9992 of remaining below the 0.005 tolerance. HB-PVI was utility-optimal in 199 of 216 cost-threshold settings and in every setting at or above the primary label cost. These results argue for a population-first deployment policy whenever personalization gains are small relative to labeling, computation, and harm costs, and show that value-of-information reasoning, not raw predictive accuracy, should drive personalization decisions in health-sensing applications.
