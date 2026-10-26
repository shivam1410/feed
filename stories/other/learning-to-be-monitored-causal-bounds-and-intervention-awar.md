---
title: "Learning to Be Monitored: Causal Bounds and Intervention-Aware Post-Training Recipes for Chain-of-Thought Monitorability"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31733"
authors: ["Qiang Fu, Xinyue Li, Andre Wibisono, Arman Cohan"]
date: "Mon, 26 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31733v1"
image: ""
generated: "2026-10-26T19:00:28+05:30"
---

Chain-of-thought (CoT) monitoring aims to detect potentially harmful behaviors in large language models (LLMs) from their CoTs. Intervention-based evaluations measure this property by asking whether a monitor can detect the role of an intervention from the CoT when the targeted behavior occurs, typically using minimal-criterion sensitivity ($\mathsf{TPR_{mc}}$) proposed by~\citep{guan2025monitoring}. However, a target behavior observed under intervention is not necessarily caused by it, and we show that this metric can overestimate how often a monitor detects target behaviors actually caused by the intervention. Specifically, we establish $\mathsf{TPR_{mc}}$ as an upper bound on this causal detection rate and derive a complementary lower bound, which provides a tighter evaluation framework for CoT monitorability. With this framework, we study whether LLMs can be trained to make their CoTs easier to monitor. We first construct a training dataset of paired control--intervention tasks spanning multiple intervention types. Using the dataset, we design and apply three intervention-specific training methods based on off-policy self-distillation, reinforcement learning, and on-policy self-distillation to train separate variants of each base model. Across various model-monitor configurations, all three methods generally improve CoT monitorability over the corresponding base models under our extended evaluation framework. Our code is available at https://github.com/xinyue-lxy/learning-to-be-monitored.
