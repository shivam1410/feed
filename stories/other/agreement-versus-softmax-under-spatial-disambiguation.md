---
title: "Agreement versus Softmax under Spatial Disambiguation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14210"
authors: ["Micha{\\l} Zakrzewski, Mariia Shpir, Taras Rumezhak, Volodymyr Karpiv"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14210v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

ScanRefer Multiple queries require spatial disambiguation: several instances of the target class are present, and the referencer must pick one. When per-query logits were never logged, a common substitute is cross-epoch agreement. On the full ScanRefer validation set (9,508 queries; GeoClassifier with ground-truth proposals), object-level softmax is similarly miscalibrated on Unique and Multiple (ECE 0.068 vs. 0.102; the scene-bootstrap gap interval includes zero). Fixed-final agreement on the same checkpoints reports ECE 0.041 vs. 0.272 (gap +0.231). Modal-vote agreement is 0.045 vs. 0.318. Most Multiple errors are same-class wrong-instance (45.6%); geometric miss (H2) is 59.6%, and wrong-category (H1) is 16.7%. A non-monotone H1 pattern does not appear under the default fixed-final protocol, and we retract it. Logit-free thresholds rank spatially hard queries poorly. If only agreement was logged, calibrate abstention on Multiple and report wrong-instance rates with H1.
