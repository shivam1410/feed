---
title: "A Decision-Support Audit Protocol for Supervision Drift in Proxy-Labeled Credit-Risk Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16102"
authors: ["Mehrdad Shoeibi, Muhammad Shabanpour, Waldemar Karwowski, Niloofar Yousefi"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16102v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16102v1 Announce Type: new Abstract: Credit-risk models are trained on proxy labels and deployed under temporal and segment change, yet no single transfer metric separates base-rate shift, probability-scale shift, and feature-label relationship change. We contribute a design-science artifact: a locked, multi-signal audit protocol for supervision drift in proxy-labeled credit-risk prediction. Five layers (transfer performance, an oracle-gap probe, a calibration diagnostic, feature-label stability, and a synthetic positive control), thresholds, and decision rules were locked before interpretation; a bounded reading is a designed outcome. On a public LendingClub dataset (temporal 2013 to 2016 and cross-segment transfer), ranking is stable and oracle gaps are small; the clearest temporal signal is a prevalence and probability-scale mismatch that intercept-only diagnostic recalibration largely reduces, though its cause is not identifiable from the available release. The positive control responds only to larger injected shifts; subtler drift cannot be excluded. Mapping diagnostic patterns to governance actions is conceptual guidance, not validated here.
