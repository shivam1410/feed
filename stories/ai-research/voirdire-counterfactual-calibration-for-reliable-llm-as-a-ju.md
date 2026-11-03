---
title: "VoirDire: Counterfactual Calibration for Reliable LLM-as-a-Judge Aggregation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00491"
authors: ["Changho Shin, Frederic Sala"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.00491v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

LLM-as-a-judge systems often aggregate multiple judges to improve evaluation reliability. However, judge agreement can reflect shared biases toward verbosity, formatting, or fluency rather than the intended evaluation target. Addressing these shared biases is challenging because observational judge outputs alone cannot distinguish agreement driven by target quality from agreement driven by nuisance attributes. We introduce VoirDire, an intervention-calibrated aggregation method for LLM-judge panels. VoirDire applies controlled interventions that vary specified surface attributes while aiming to preserve the evaluation target; it then uses paired changes in judge scores to identify nuisance-sensitive directions. It attenuates these directions and selects aggregation weights that retain variation across items while penalizing sensitivity to the interventions, making the final consensus less dependent on superficial features. We show theoretically that observational judge outputs alone cannot identify which shared direction is target-relevant, while paired interventions provide the contrast needed to identify nuisance-sensitive variation. We evaluate VoirDire on 12 datasets spanning continuous scoring, binary classification, and pairwise preference. Compared with the existing LLM-judge aggregation baselines, VoirDire reduces MAE by up to 26.8% on continuous-score tasks and improves accuracy by up to 5.3 percentage points on binary and preference tasks. These findings suggest that counterfactual interventions provide an additional means of improving the reliability and controllability of LLM-based evaluation beyond merely relying on observed judge agreement.
