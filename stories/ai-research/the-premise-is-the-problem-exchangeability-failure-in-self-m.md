---
title: "The Premise Is the Problem: Exchangeability Failure in Self-Monitored Test-Time Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07038"
authors: ["Weijia Han, Lisha Qu, Zhenda Li, Liying Liang"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.07038v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Modern forecasting models are often updated after deployment so they can respond to changing data. These updates can also make predictions worse, so practical systems need a reliable monitor that can detect harmful changes and trigger protection. A natural design is to monitor the same prediction errors that guide the updates. This paper asks whether the statistical guarantee behind such a monitor remains valid when monitoring and adaptation use the same feedback. We study this question in multi-step time-series forecasting. We show that overlapping targets and dependence in forecast errors can break a key assumption required by the guarantee. The monitor may then raise alarms even when no harmful change has occurred, and its response can further damage prediction quality. We also find that adaptation can hide sustained changes from its own monitor, while the original frozen model retains a clearer signal. These results expose a basic failure mode in self-monitored adaptation. They show why reliable deployment requires checking the monitor's assumptions, comparing adaptation with the frozen model under realistic feedback, and limiting the effect of every protective response.
