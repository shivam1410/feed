---
title: "One Capability or Many? Testing the Economic Validity of Frontier AI Evaluation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29420"
authors: ["Louis Yiven Zhu"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.29420v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29420v1 Announce Type: new Abstract: Frontier-model leaderboards now rank systems based on economic benchmarks, tests of how well models carry out professional tasks from software engineering to banking workflows, and those rankings inform what organisations buy, what regulators scrutinise, and expectations of how work will change. Whether such benchmarks measure a capability distinct from general test-taking, or re-express the one axis along which every benchmark rises as models improve, is a question of construct validity that has not yet been studied. We test it on a hash-pinned leaderboard snapshot of 421 model configurations across twelve benchmarks, four of them economic, treating benchmarks as items and models as respondents in a latent-variable model with four hypotheses and their thresholds fixed before analysis. A single factor explains 74.5% of common variance and tracks model release date (R^2 = 0.505), so the leading axis of capability is substantially a time trend; where prior work controls for scale, compute adds little once date is removed. Removing the date trend lowers that share by 14.9 points, and by 24.1 with one row per base model. Under the dimensionality rule fixed in advance the economic benchmarks form no distinct factor, yet a leave-one-benchmark-out test with factors re-estimated inside every fold shows that a multi-factor representation predicts held-out economic scores better than a single general index (pooled Delta-MSE 0.037, 95% bootstrap interval [0.019, 0.055]). Economic benchmarks therefore add incremental predictive information to a largely date-driven general factor, and the evidence does not support treating them as a distinct latent capability. Leaderboards remain a sound guide to overall progress, but most of the gap between models released months apart is calendar, so a small gap between contemporaneous models should be date-adjusted before being read as a capability difference.
