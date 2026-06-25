---
title: "Enhancing Clinician Decision-Making via Uncertainty-Aware Multi-Expert Fusion for Stroke Rehabilitation"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24960"
authors: ["Tamim Ahmed, Thanassis Rikakis"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.24960v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24960v1 Announce Type: new Abstract: Tailoring stroke rehabilitation requires assessing how movements are organized, not merely if they succeed. Currently, this assessment is a rate-limiting bottleneck. Instruments like the Action Research Arm Test (ARAT) compress rich behavioral observations into single ordinal endpoints, discarding the movement-quality details that distinguish recovery from compensation. Automated alternatives typically chase accuracy on noisy, single-observer labels to output opaque scores - a technology-centric approach that rarely reaches clinical practice. To address this, we present xAARA: an engine designed to augment rather than replace clinical judgment. From multi-view video, xAARA returns ARAT assessments with calibrated uncertainty and explanations across task, movement-phase, and movement-quality levels. Treating clinical scoring as an ill-posed inference problem, xAARA composes 692 calibrated multimodal models via a Dynamic Bayesian Network with entropy-based gating. It qualifies results against clinical validity rules and defers low-confidence cases. In 105 stroke survivors (788 exercises), xAARA achieved 94.2% task accuracy (Cohen's kappa=0.934) and 81.3% movement-phase accuracy (kappa=0.727), reducing predictive uncertainty by 96.1% compared to single-clinician scoring. For subjective cases, it matched at least one rater 100% of the time and never returned out-of-range scores. Four independent clinicians validated the assessments and indicated willingness to adopt the system. We argue that principled uncertainty quantification and clinician-aligned explainability are the critical bridges moving automated assessment from technical demonstration to a deployable clinical tool.
