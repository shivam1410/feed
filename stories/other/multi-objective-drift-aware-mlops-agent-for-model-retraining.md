---
title: "Multi-objective drift-aware MLOps agent for model retraining"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10313"
authors: ["Kumuda Valli V, Anli Ji"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10313v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Deployed ML models face non-stationary data and delayed labels, yet most retraining strategies rely on fixed schedules or brittle drift thresholds that ignore operational cost. In this setting, retraining is a sequential decision problem rather than a one-time threshold choice. We present DARE (Drift-Aware Retraining Engine), an offline, event-driven retraining framework that separates ingestion, monitoring, policy decisions, training, and logging through explicit schemas and deterministic replay. We compare DARE against practical heuristic retraining baselines, including fixed-interval, threshold-persistence, and action-rate-matched fixed scheduling policies. On Airline, the locked LinUCB policy achieves a higher mean F1 while substantially reducing intervention frequency relative to heuristic and action-rate-matched baselines. Additional runtime-calibrated evaluation shows that these gains persist when measured using the cumulative update wall-clock time. These results suggest that conservative sequential retraining policies can improve performance while reducing unnecessary operational overhead under delayed feedback.
