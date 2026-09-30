---
title: "Grounding Vision-Language Models in Driving Semantics: A Multi-Dataset Predicate Framework for Explainable Reasoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31636"
authors: ["Mohamed Chouai, Fazli Faruk Okumus, Stefan Kugele"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.31636v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Vision-language models are increasingly used for driving-scene understanding, yet the semantic relations expressed in their outputs are often difficult to verify against the underlying traffic situation. This paper introduces a deterministic multi-dataset predicate framework that derives driving-scene semantics from measurable geometric, kinematic, temporal, map, and traffic-control evidence. Dataset-specific interfaces are used only to recover the required scene information, while predicate definitions remain unchanged across nuPlan and nuScenes and are materialised in a common Predicate Knowledge Graph. Quantitative semantic validation against manually annotated predicate relations on 200 scenarios from each dataset yields macro F1 scores of 0.94 on nuPlan and 0.93 on nuScenes, with an average cross-dataset difference of 0.02 across the shared predicates. The Predicate KG is further evaluated using a frozen LLaVA-OneVision-7B model on the nine NuPlanQA subtasks. Predicate grounding achieves the highest accuracy among the evaluated visual-input conditions in seven of nine NuPlanQA subtasks, including Traffic Light (53.2% to 71.5%), Situation Assessment (76.2% to 86.1%), and Action Recommendation (82.9% to 89.0%). Weather/Lighting remains essentially unchanged (89.4% vs. 88.8%), consistent with the absence of corresponding predicates, while Predicate KG only input outperforms metadata-only input in eight of nine subtasks. The results show that deterministic predicates provide a consistent and traceable semantic representation and, under oracle grounding, can reduce visual dependence for reasoning tasks covered by the predicate vocabulary.
