---
title: "Autoregressive Multimodal Anomaly Detection with Large Language Models for Microservice Systems"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31722"
authors: ["Yixiang Tang, Fagui Liu, Guoxiang Zhong, Xi Yao, C. L. Philip Chen"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31722v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Microservice systems have become a dominant architecture for large-scale cloud applications, enabling rapid deployment and elastic scaling. However, ensuring the reliability and availability of microservice systems critically relies on effective anomaly detection, as failures and performance anomalies can quickly propagate across services and severely impact end-to-end system behavior. Existing multimodal anomaly detection approaches for microservice systems often struggle with two fundamental limitations: (i) the neglect of modality-specific characteristics in favor of cross-modality fusion, and (ii) the "identity-shortcut" problem that affects the feature reconstruction process. To address these issues, we propose LLMMAD, an autoregressive multimodal anomaly detection framework for microservice systems based on Large Language Models (LLMs). Initially, to reconcile cross-modality fusion with modality-specific preservation, LLMMAD embeds and recombines multimodal data into a unified sequence for LLM processing to model inter-modality relationships, while employing modality-wise reconstruction heads to retain modality-specific information. Subsequently, to eliminate the identity-shortcut, we implement a prediction-driven autoregressive objective, under which the model predicts future states rather than copies current inputs. Finally, we conduct extensive experiments on three real-world datasets. The results demonstrate that LLMMAD consistently outperforms state-of-the-art methods, achieving F1-score improvements of 3.1%, 1.4%, and 0.9%, respectively, thereby providing a more reliable solution for microservice monitoring.
