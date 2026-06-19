---
title: "Does Text Actually Help? Uncovering and Resolving Text Collapse in Multimodal Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19413"
authors: ["Huu Hiep Nguyen, Minh Hoang Nguyen, Dung Nguyen, Hung Le"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.19413v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19413v1 Announce Type: new Abstract: Multimodal time series forecasting, which pairs numerical sequences with domain-relevant textual reports, promises to inject world knowledge into forecasting pipelines. However, we uncover a critical failure mode in existing frameworks that we term text collapse: the text branch converges to a content-independent transformation, contributing negligible discriminative signal regardless of the input description. We argue that text collapse is a consequence of a fundamental asymmetry in time series forecasting: the numerical input is strongly autocorrelated with the output, making the numerical backbone inherently dominant, while the text branch, despite carrying complementary and often critical information, is insufficiently utilized, leading to its systematic underexploitation. To address this, we propose \textbf{REST-TS} (\textbf{R}esidual-\textbf{E}xclusive \textbf{S}upervision for \textbf{T}ext in \textbf{T}ime \textbf{S}eries), which turns the asymmetry into a design principle: the numerical backbone produces its own independent numerical forecast, and the text branch is exclusively supervised to predict the structured components of the residual, the prediction gap that numbers cannot explain. Because no numerical pathway can reduce these losses, the text branch must extract genuine content from the input description. Evaluated across diverse real-world domains and backbone architectures, REST-TS achieves state-of-the-art performance and consistently demonstrates greater text-branch utilization than existing frameworks, providing strong empirical evidence that supervising the text branch on the residual compels it to extract genuine content from the input.
