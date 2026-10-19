---
title: "CF-NODE: Counterfactual Spatial Node Intervention for Test-Time Adaptation Under Domain Shift, Evaluated Across Five Diabetic Retinopathy Datasets"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22437"
authors: ["Sabarish G, Deepak Parashar"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.22437v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Automated fundus-based diabetic retinopathy (DR) grading can substantially expand screening capacity, but source-trained models degrade sharply across different cameras, clinics, and patient populations. Existing test-time adaptation methods depend on entropy minimization or target information accumulated from image batches and streams. These mechanisms can reinforce confidently incorrect predictions and break down when clinical images arrive independently. We introduce CF-NODE, a novel counterfactual test-time adaptation framework for cross- domain DR grading. Instead of trusting prediction confidence or estimating a target distribution, CF-NODE asks how each prediction responds under a controlled intervention on the evidence supporting it. CF-NODE ranks internal spatial nodes using model-derived attention, feature magnitude, and node-set similarity, progressively attenuates the highest-ranked nodes, and uses the stability of the resulting expected-grade response to apply a bounded calibration of the predicted grade distribution. The framework is fully frozen and adapts every image independently using only geometric views and a fixed source-derived prior, requiring no target-derived information or model updates. We evaluate CF-NODE on five external DR datasets under repeated-seed evaluation against TENT, EATA, SAR, and T3A. CF-NODE outperforms all four methods with statistically significant improvements over the second-best method, improves AUC on every target domain, and attains the highest average AUC and macro-F1, delivering stronger grade discrimination together with more balanced recognition across DR severity levels. These results demonstrate that counterfactual intervention sensitivity provides consistent and deployment-ready domain robustness for single-image clinical inference.
