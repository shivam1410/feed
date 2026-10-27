---
title: "Towards Trustworthy AI-Enabled Emergency Medical Dispatch: Uncertainty-Aware Ambulance Travel Time Estimation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31944"
authors: ["Muhammad Adil Abid, Johan Holmgren, Fabian Lorig, Jesper Petersson"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31944v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Emergency medical dispatch increasingly relies on AI-enabled decision support systems when making ambulance dispatch decisions. In this process, accurate ambulance travel time estimates are essential for timely resource allocation and prehospital care. However, existing ambulance travel time estimation approaches typically produce only single point predictions. Consequently, they do not indicate how reliable an individual estimate is or how much uncertainty it carries. This limitation is particularly problematic in safety-critical emergency medical service dispatch operations, where trips with similar expected travel times may exhibit substantially different levels of uncertainty. Furthermore, real-world ambulance trip logs may contain domain-specific artefacts, such as co-located healthcare facilities and physically implausible travel speeds. These artefacts can degrade point prediction accuracy and affect the prediction task on which subsequent uncertainty estimation depends. To address these challenges, we propose an uncertainty-aware methodology for ambulance travel time estimation and evaluate it through a retrospective real-world scenario study using two years of ambulance trip data from the Sk{\aa}ne region in Sweden. The proposed methodology moves beyond average-case point predictions by generating context-adaptive prediction intervals with stable empirical coverage across the evaluated operationally important contexts. The resulting prediction intervals provide explicit information about predictive uncertainty that can support more transparent and risk-sensitive ambulance dispatch decision-making.
