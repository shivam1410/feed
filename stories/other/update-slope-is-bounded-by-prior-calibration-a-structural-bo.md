---
title: "Update Slope Is Bounded by Prior Calibration: A Structural Bound and Its Contingent Empirical Signature"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10325"
authors: ["Ben Jenkins, Mihaela Cardei"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10325v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Evaluations of LLM forecasters increasingly measure how forecasts improve as richer evidence is supplied. We identify two confounds in this update-slope metric. First, outcome-aware evidence construction substantially inflates measured responsiveness: on the same models and questions, slopes are roughly four times larger than with resolution-blinded evidence ladders. Second, update slope is a change score with a prior-dependent structural ceiling, so raw comparisons can reflect differences in starting calibration rather than updating behavior. The ceiling defines only a feasible region; whether slope and prior calibration are empirically coupled depends on headroom utilization and varies across our Manifold, ForecastBench, and ACLED pools. Despite this variability, conditioning on prior calibration roughly triples the association between intermediate updating and final Brier score under both blinded and outcome-aware construction. Question identity also explains substantially more variance than model identity across the evaluated pools. We recommend building evidence ladders blind to outcomes, conditioning on prior calibration, and reporting headroom-normalized measures alongside raw slopes.
