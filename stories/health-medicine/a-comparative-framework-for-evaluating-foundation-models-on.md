---
title: "A Comparative Framework for Evaluating Foundation Models on Tabular Data: A Case Study in Healthcare"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22154"
authors: ["Majid Lotfian Delouee, Sjors G. J. G. In 't Veld, Martijn C. Schut"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.22154v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22154v1 Announce Type: new Abstract: Tabular data is the most common format in clinical practice, encompassing laboratory results, medication records, diagnostic codes, and patient demographics. As foundation models for tabular data have grown in number and variety, a practical question has become harder to answer: which model should a clinician or data scientist actually choose for a given task, and why? Existing surveys catalogue what these models can do, but they stop short of providing a structured way to compare them against the specific demands of a real application. We introduce \system{}, a comparative evaluation framework that scores and ranks tabular foundation models (TFMs) across six clinically meaningful dimensions: how well a model generalizes to new datasets, how effectively it protects patient privacy, how much data it needs to perform well, how it scales with growing datasets and feature spaces, how interpretable its predictions are to clinicians, and how fairly it performs across patient subgroups. Each dimension is broken down into measurable sub-components, and groups of sub-components can optionally be combined into supplementary compound scores, called super-metrics, that provide a diagnostic view of how a model performs across several dimensions simultaneously. To show how the framework works in practice, we apply it to two healthcare use cases, screening for iron deficiency and predicting heart failure, demonstrating how the same set of metrics leads to different model rankings depending on what matters most in each clinical context. We also provide a taxonomy of 45 TFMs organized by their underlying architecture, which serves as a reference for researchers and practitioners looking to navigate this rapidly expanding field.
