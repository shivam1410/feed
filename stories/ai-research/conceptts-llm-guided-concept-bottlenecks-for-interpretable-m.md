---
title: "ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21277"
authors: ["Yichen Jiang, Yueqiao Chen, Dongyu Liu"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2608.21277v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.21277v1 Announce Type: new Abstract: State-of-the-art multivariate time-series forecasters can model complex temporal and cross-variable dependencies, yet their opaque representations provide limited insight into why a particular forecast is produced. This lack of transparency restricts their use in settings where practitioners must understand and assess the factors underlying a prediction. We introduce ConceptTS, an interpretable forecasting framework that organizes its predictions around named, human-readable concepts. ConceptTS uses a large language model to propose task-relevant concepts and generate executable labeling rules, translating the language model's domain knowledge into direct supervision without costly manual concept annotation. The proposed concepts are organized into three complementary bottlenecks that describe the historical context, local forecast intervals, and the full forecast horizon. A shared decoder combines representations derived from their predicted activations to construct the forecast, making the model's decision process explicit and supporting direct concept-level interventions. Experiments on the Beijing Multi-Site Air Quality dataset show that ConceptTS achieves accuracy competitive with strong black-box baselines while producing semantically meaningful concept activations.
