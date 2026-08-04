---
title: "Relative Parameter Importance in Task-Agnostic Replay-Free Continual Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00630"
authors: ["Malavika Suresh, Ikechukwu Nkisi-Orji, Nirmalie Wiratunga"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2608.00630v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00630v1 Announce Type: new Abstract: Achieving continual learning (CL) with deep neural networks requires balancing stability and plasticity while enabling knowledge transfer. In this work, we focus on offline learning algorithms under the constraints: (I) no access to training data from prior tasks (II) no access to task-id at inference time. We introduce a novel measure, the relative parameter-importance, which measures the relative importance of each parameter with respect to both the current and past tasks. Parameters with high relative importance are interpreted as more important for maintaining past-task stability and thus heavily regularised, whereas parameters with low relative-importance are allowed to be more freely updated. Unlike existing methods, our approach allows the update of parameters with high past-task importance when they have low relative-importance, thus enabling backward knowledge transfer in addition to tackling the stability-plasticity trade-off. We demonstrate improvements against state-of-the-art CL methods on both class-incremental and domain-incremental learning text classification problems and provide insights for extending our method to text generation problems. Code available at: https://github.com/itsmemala/LACL
