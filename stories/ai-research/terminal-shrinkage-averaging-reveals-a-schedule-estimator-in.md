---
title: "Terminal Shrinkage Averaging Reveals a Schedule-Estimator Interaction in LLM Pretraining"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25482"
authors: ["Adam Ousherovitch, Yixin Wang"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.25482v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25482v1 Announce Type: new Abstract: Large language model (LLM) pretraining conventionally returns the raw final iterate. This couples two design choices: the learning-rate schedule that generates the parameter trajectory and the estimator that constructs the deployed model (e.g. the raw final iterate or a checkpoint average). A schedule that promotes optimization progress may differ from one that minimizes variation in the raw final iterate. Separating these choices creates an opportunity to maintain progress late in training while reducing variation in the returned model. To this end, we propose \emph{Terminal Shrinkage Averaging (TSA)}, which interpolates between the raw final iterate and the average of recent checkpoints to balance recent progress against terminal variation. We analyze how TSA changes the preferred terminal learning-rate schedule under a local quadratic approximation and test this interaction through a sequence of controlled NanoChat experiments. Finally, we demonstrate that the resulting gains transfer to depth-22 NanoChat, where the combined schedule and estimator improve validation quality. A qualifying time-to-GPT-2 run also finishes faster than the public baseline used in our experiments, providing preliminary evidence of benchmark acceleration.
