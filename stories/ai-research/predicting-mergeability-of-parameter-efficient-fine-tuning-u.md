---
title: "Predicting Mergeability of Parameter-Efficient Fine-Tuning Updates"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19549"
authors: ["Lin Tang, Wei Zhang, Jing Li, Hongyu Chen, Ming Zhao, Yuxuan Wang"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19549v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19549v1 Announce Type: new Abstract: Low-rank adaptation (LoRA) makes it cheap to train many domain- and task-specific language model adapters, but whether two adapters can be merged is usually discovered only after both have been fully trained and evaluated. This late feedback is costly: adapters that are strong in isolation can interfere destructively once their updates are combined. We ask whether this outcome can be anticipated. We formalize adapter mergeability as the degree to which an adapter preserves its single-task utility after merging, and show that it can be forecast from signals measured in the first few percent of training -- chiefly how the low-rank updates and their gradients align across tasks and how much they disturb shared representations. We package these signals into MergeProbe, a lightweight predictor that estimates pairwise and set-level retention and turns the estimate into a concrete decision: merge directly, reweight, prune, or route. On MERGE-PEFT, a five-domain benchmark spanning math, code, science, instruction following, and safety, MergeProbe attains the best average and worst-case retention among strong interference-aware merge baselines while adding far less deployment overhead than full task routing. This turns LoRA merging from a post-hoc engineering step into an anticipatory measurement problem.
