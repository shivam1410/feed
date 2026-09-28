---
title: "Auditing System-1 Models on Biosecurity-Relevant Benchmarks: Calibration, Selective Prediction, and Permutation Instability in a Non-Generative Model"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30454"
authors: ["Kimon Antonios Provatas, Ilias Georgakopoulos-Soares"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.30454v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Non-generative "System-1" models return structured probabilistic decisions in a single forward pass, without autoregressive decoding, at a small fraction of the inference cost of a generative model. This makes them of interest as inexpensive components in larger pipelines, but their reliability on biosecurity-relevant tasks has not been systematically examined. We audit one commercial System-1 model on 6,020 multiple-choice items drawn from the Weapons of Mass Destruction Proxy (WMDP), a paraphrase-robust WMDP-Bio variant, and six LAB-Bench subtasks, measuring accuracy, calibration, error detection, selective prediction, and sensitivity to the order in which answer options are presented. Accuracy is strongly task-dependent. Once the vendor's uncertainty field is correctly interpreted, the model is reasonably well calibrated (pooled expected calibration error 0.034) and its top-1 probability separates correct from incorrect predictions (pooled AUROC 0.820), though both degrade substantially on the weaker tasks. Under four cyclic rotations of the answer options, 37.4% of WMDP-Cyber items receive different answers; a control using byte-identical repeated calls attributes most of this to option order rather than run-to-run variation. Averaging probabilities across rotations improves WMDP-Cyber accuracy by 3.8 percentage points, and applying it only to low-confidence items recovers most of that gain at well under the cost of averaging every item.
