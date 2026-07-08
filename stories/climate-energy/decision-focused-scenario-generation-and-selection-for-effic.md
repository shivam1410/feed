---
title: "Decision-Focused Scenario Generation and Selection for Efficient and Robust Grid Dispatch"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05830"
authors: ["Yangze Zhou, Yihong Zhou, Thomas Morstyn, Yi Wang"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.05830v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05830v1 Announce Type: new Abstract: The increasing uncertainty from flexible demand and renewable generation has made distributionally robust optimization (DRO) an important tool for robust power system dispatch. DRO relies on forecast scenarios to construct ambiguity sets, but conventional scenario generation pipelines are often trained in an accuracy-oriented manner and may neglect spatial correlations among uncertainties. This mismatch can produce ambiguity sets that are statistically plausible but suboptimal for downstream operation. This work proposes a decision-focused generative framework for correlated scenario generation in DRO-based dispatch. Instead of training generative models solely to fit the historical uncertainty distribution, the proposed framework optimizes generated scenarios according to their induced downstream operational cost. The proposed framework is tailored to mainstream generative models, including variational autoencoders, generative adversarial networks, and diffusion models, while capturing the joint distribution of uncertainties across buses. To improve computational tractability, we further develop a differentiable scenario selector that selects decision-relevant scenarios from a generated pool and can be trained within the same decision-focused pipeline. Case studies demonstrate that the proposed framework effectively reduces 0.80%-2.02% operational cost across different generative models compared to accuracy-oriented methods.
