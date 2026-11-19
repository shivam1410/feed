---
title: "When Normal-Only Updates Are Not Enough: Test-Time Adaptation in Reconstruction-Based Time-Series Anomaly Detection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23761"
authors: ["Jianhuan Mao, Mengxiao Zhu, Yue Pei, Lei Li, Haogang Zhu"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23761v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Normal operating conditions can evolve after deployment, motivating test-time adaptation (TTA) of time-series anomaly detectors using incoming data. Yet the same stream may contain anomalies, so TTA with online updates must decide which test samples should be used for adaptation. This leaves a more basic question: even if updates are restricted to samples labeled as normal in the benchmark, does TTA reliably improve anomaly detection? We study this question with a controlled intervention that replaces the practical update selector with a rule that uses only samples labeled as normal in the benchmark, while keeping the rest of the online adaptation procedure unchanged. Across nine benchmark families, four optimizer configurations, and five random seeds, we obtain three main findings: (1) using only samples labeled as normal in the benchmark does not reliably improve detection; (2) practical TTA failures exhibit two distinct responses to this intervention, with 63 of 180 settings recovering a clear detection gain while 90 still show no clear detection gain; and (3) the updates reduce their immediate reconstruction objective across the evaluated settings, yet these reductions do not consistently lead to better anomaly ranking. Both failure patterns persist across alternative practical adaptation variants and modest perturbations of the benchmark labels. Together, these findings show that improving sample selection alone is not a complete solution to reconstruction-based TSAD TTA.
