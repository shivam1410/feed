---
title: "Tail-Aware Geometry Learning for Conformal Ellipsoids"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27221"
authors: ["Xiang Zhang"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.27221v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27221v1 Announce Type: new Abstract: This paper studies multivariate conformal prediction (CP), a distribution-free uncertainty quantification framework with finite-sample coverage guarantees. The efficiency of multivariate prediction sets hinges critically on the residual geometry encoded by the nonconformity score, while existing minimum-volume methods rely on quantile thresholds that ignore tail residual severity and implicitly bind geometry learning to coverage level. We propose a tail-aware geometry learning framework for conformal ellipsoids that decouples tail sensitivity in geometry learning from the final coverage guarantee. Using a two-split design, we learn the metric matrix via volume minimization under a CVaR constraint on an estimation split, then apply standard conformal calibration on a held-out calibration split. The resulting problem is convex and admits a bounded-reweighting interpretation that prioritizes high-residual samples. Moreover, we theoretically characterize the trade-off between ellipsoidal volume and tail severity. Experimental results demonstrate the effectiveness of the proposed method.
