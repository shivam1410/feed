---
title: "MotionBench-XAI: Benchmarking What Shapes Shapley Explanations in Spatiotemporal Machine Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08797"
authors: ["Mathilde Papillon, Louisa Cornelis, Nina Miolane"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08797v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Predicting outcomes from spatiotemporal data, such as assessing Parkinson's severity from human motion, often requires explainability in addition to accuracy. Practitioners need to know what drove the prediction, whether it be spatial (a body joint), temporal (a specific window), or both. Shapley values are attributions computed by treating input features as players in a cooperative game and measuring how the model output changes as coalitions of players are removed. Computing them involves choosing what counts as players, how absent players are imputed, and how the game is evaluated. How these choices affect explanation quality is poorly understood for spatiotemporal data, and real data carries no ground-truth attributions to check against. We present MotionBench-XAI, a benchmark built on i) five synthetic spatiotemporal datasets with exact ground-truth Shapley values, ii) three real datasets across clinical gait, electrocardiogram, and audio, iii) ten attribution methods across three player sets, and iv) three trained architectures. We show that grouping features into players, across time, space, or both, matters more than the choice of imputer. Generative imputers improve explanations only when their conditional models are accurate. On real data, the standard proxy metrics select contradictory best methods. We distill these findings into practical insights and provide an open-source pipeline.
