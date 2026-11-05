---
title: "StreamLTT: Risk Certification for Policy Selection under Stream Dependence"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04062"
authors: ["Jinwen Xu, Qin Lu"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04062v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Learn-then-Test (LTT) provides a general framework for certifying deployment policies against a prescribed risk target, but its standard formulation targets a fixed population risk estimated from calibration losses. In sequential deployment, losses may instead be dependent and nonstationary, so the risk of a fixed policy can evolve with the observed history. We introduce StreamLTT, which replaces this fixed population risk with average predictable risk, defined by conditioning each decision's loss on the information available before its outcome is revealed. Conditional centering turns empirical deviations from this target into a martingale sum, enabling both a test that adapts to predictable variance and a finite-sample Hoeffding alternative. Combined with family-wise error rate control, StreamLTT yields a simultaneously certified policy region that supports subsequent deployment selection. Across seven forecasting datasets and seven deployment risks, StreamLTT places the certified frontier substantially closer to the prescribed risk target than IID, robust-variance, block-bootstrap, and concentration-based alternatives, while empirical family-wise error closely follows the prescribed level. A finite-sample ablation further shows that the predictable-risk formulation drives the tighter risk frontier, while adaptation to predictable variance makes more effective use of the available family-wise error budget. StreamLTT therefore extends risk-certified policy selection to dependent deployment streams by addressing both what risk should be certified and how it should be tested.
