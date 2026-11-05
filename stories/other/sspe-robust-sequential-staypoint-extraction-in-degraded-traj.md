---
title: "SSPE: Robust Sequential Staypoint Extraction in Degraded Trajectory Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03737"
authors: ["Yueyang Liu, Lance Kennedy, Andreas Z\\\"ufle"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03737v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Extracting semantically meaningful staypoints from raw trajectory streams is a foundational prerequisite for mobility analytics. However, real-world trajectory data is frequently degraded by severe spatial noise and protracted temporal dropouts. Classic threshold-based extraction methods, such as the widely adopted sliding-window algorithm, are highly sensitive to these anomalies, routinely fracturing continuous stationary episodes into disjointed fragments. To overcome this limitation, we propose the Sequential Staypoint Extraction (SSPE) algorithm. SSPE employs a resilient, state-driven architecture that replaces static spatial anchors with a dynamic centroid and introduces an $n$-step lookahead heuristic to structurally tolerate transient coordinate drift. Concurrently, it utilizes temporal bridging mechanisms to prevent artificial fragmentation during prolonged signal loss. Since optimal extraction parameters vary significantly across datasets, we further introduce a fully unsupervised, consensus-based parameter estimation framework. This framework derives baseline statistical scales directly from the raw trajectory data and identifies the optimal parameter configuration by maximizing structural agreement, thereby eliminating the reliance on annotated ground truth. We evaluate SSPE on the ExtraSensory dataset, a real-world mobility corpus with manually verified ground-truth staypoints, against the sliding-window implementation of Trackintel, one of the most widely adopted extraction baselines in the field. Empirical results demonstrate that SSPE achieves superior accuracy, yielding higher F1-scores while simultaneously improving computational efficiency over this standard.
