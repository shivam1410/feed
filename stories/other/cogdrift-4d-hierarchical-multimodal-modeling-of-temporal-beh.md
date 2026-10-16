---
title: "CogDrift-4D: Hierarchical Multimodal Modeling of Temporal Behavioral Decay for MCI Detection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20877"
authors: ["Sankalp Vaish, Sumukh Veeramalla, Rishank Singh, Caroline Summerour, John A. Batsis, Xiaohui Liang"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20877v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Early detection of mild cognitive impairment remains a critical bottleneck in dementia care, demanding scalable tools capable of capturing subtle behavioral decay. To capture the subtle temporal changes of cognitive decline, we introduce a behavioral dataset collected across seven unscripted multimodal interactions over an 18-month horizon. This dataset formalizes continuous, multi-session interactions into a dense 4D tensor (Batch * Session * Time * Feature) that explicitly preserves concurrent local dynamics alongside long-term changes. To effectively process these complex behavioral patterns, we propose CogDrift-4D: a novel, hierarchical 4D Transformer framework. To capture the complex trajectory of cognitive decline, CogDrift-4D implements a dual-level behavioral fatigue and drift modeling architecture. At the intra-session level, the model computes localized least-squares regression slopes to quantify the acute ``fading'' of frame-level facial action units and acoustic energy. At the inter-session level, a recursive cross-attention feedback encoder acts as a cumulative fatigue accumulator, mapping the patient's continuous behavioral drift across successive sessions. To mitigate environmental noise and track failures across sessions, a localized Quality Gate dynamically filters low-integrity features before final fusion, also an early fusion that integrates semantic insights with raw physical dynamics. Evaluated on structured verbal and linguistic interactions, our architecture successfully detects MCI with a classification accuracy of 0.733 +- 0.13 and an F1-score of 0.716 +- 0.14, outperforming advanced baselines. The framework provides a mathematically rigorous, scalable, and robust foundation for home-based, real-time dementia screening.
