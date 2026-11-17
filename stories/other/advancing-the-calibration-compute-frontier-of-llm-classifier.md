---
title: "Advancing the Calibration-Compute Frontier of LLM Classifiers via Asymmetric Duos"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.19020"
authors: ["Berke Akturk, Ali Can Sahin, Rasit Cem Solatay, Emanuel Sommer, Yawei Li, David R\\\"ugamer"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.19020v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

The importance of reliable uncertainty estimation in large language models (LLMs) has become increasingly pronounced, yet modern models remain poorly calibrated and frequently overconfident. In this study, we address this by proposing an efficient method for LLM classifier calibration using the Asymmetric Duos framework. Our approach combines a strong base model with a smaller sidekick model via logit-space fusion, utilizing global scaling parameters optimized on a validation set. Across diverse benchmarks, this Asymmetric LLM Duo consistently achieves best or second-best performance on expected calibration error and negative log-likelihood, without degrading predictive accuracy. More importantly, these gains are realized at a fraction of the computational cost of more complex baselines, placing our method on the calibration-compute Pareto frontier. We further demonstrate that our method acts orthogonal to various established calibration-aware techniques, meaning it can be easily combined with them to consistently boost their performance. Finally, our analysis of the logit-space behavior illustrates how asymmetric fusion successfully mitigates base model overconfidence. Overall, our findings demonstrate that the benefits of an asymmetric fusion successfully transfer to the language domain, providing a simple, highly cost-efficient approach to improving uncertainty estimation in LLM classifiers.
