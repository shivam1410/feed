---
title: "Byzantine-Robust Federated Fire Detection with a Rotating Coordinator"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10647"
authors: ["Georgia Argyrou, Aymen Bahrouny, Hedi Fendriy, Alexander Jung"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10647v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10647v1 Announce Type: new Abstract: We study the application of federated learning (FL) to indoor fire detection. Such fire-detection systems use edge cameras that record sensitive footage which cannot easily be collected at a central server. Existing federated solutions leave three practical obstacles unaddressed: limited uplink bandwidth, Byzantine (malicious or faulty) clients, and unconditional trust in a single, permanently fixed aggregation server. Our main contributions address all three. In particular, we provide (i) a curated indoor fire-detection dataset assembled from eight public sources; (ii) an edge-deployable detector whose model updates are compressed up to 10 time with only a small loss in balanced accuracy; and (iii) a semi-decentralized Byzantine-robust FL method that combines history-aware aggregation with a rotating coordinator, evicting stealthy attacks that per-round filters miss while removing the fixed-server single point of failure. On the held-out test set the rotating-coordinator method matches its fixed-server counterpart in accuracy and detection speed, and a physically distributed six-node cloud deployment confirms feasibility.
