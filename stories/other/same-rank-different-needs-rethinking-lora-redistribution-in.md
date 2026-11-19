---
title: "Same Rank, Different Needs: Rethinking LoRA Redistribution in Federated Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23742"
authors: ["Jinqian Chen, Jihua Zhu, Chang Liu"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23742v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Federated low-rank adaptation (LoRA) enables clients with different resource budgets to collaboratively fine-tune foundation models. To distribute an aggregated update within each client's rank budget, existing methods commonly retain its leading singular directions. However, directions that best reconstruct the update matrix need not best preserve its responses on a particular client's inputs: a lower-energy direction may matter more to that recipient. We formalize this mismatch and show that matrix-optimal truncation can incur arbitrarily larger response error than another readout of the same rank. Motivated by this result, we propose Receiver-Aware Subspace Adaptation (RASA), a plug-in framework for receiver-aware knowledge transfer. RASA uses compact diagonal input second moments to perform uncentered PCA of receiver-weighted update responses. The resulting readout is globally optimal for the rank-constrained receiver objective and preserves at least as much response energy as spectral truncation under the diagonal metric. RASA also introduces spectral-reference aggregation, which removes the personalized initialization offset while retaining the locally learned increment. Experiments on DomainNet-100, NICO++, GLUE, and SuperNI demonstrate RASA's effectiveness across methods under resource, task, and data heterogeneity. In particular, RASA improves DomainNet-100 accuracy by 3.23 percentage points with FlexLoRA and achieves gains of up to 8.33 ROUGE-L points on seen SuperNI tasks and 4.37 on unseen tasks with modest overhead.
