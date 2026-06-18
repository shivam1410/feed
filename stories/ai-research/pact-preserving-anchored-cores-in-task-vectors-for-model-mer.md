---
title: "PACT: Preserving Anchored Cores in Task-vectors for Model Merging"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18627"
authors: ["Ningyuan Shi, Zhipeng Zhou, Hao Wang, Chunyan Miao, Peilin Zhao"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.18627v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18627v1 Announce Type: new Abstract: Model merging has emerged as a training-free alternative to multi-task learning, aiming to combine multiple task-specific fine-tuned models into a single multi-task model. Most existing model merging approaches follow the Task Arithmetic paradigm, which decomposes fine-tuned weights into pre-trained parameters and task vectors, and performs merging exclusively in the task-vector space. The effectiveness of this paradigm implicitly relies on the assumption that task-specific knowledge is encoded solely within task vectors. We argue that this assumption generally does not hold due to the intrinsic task preferences of pre-trained models. Specifically, we identify \textbf{Load-Bearing Wall (LBW) dimensions}, namely some task-critical knowledge that remains embedded in the pre-trained weights rather than being fully transferred into task vectors. We characterize LBW dimensions from both scalar-weight and subspace perspectives, thereby covering the major paradigms of existing model merging methods. Our analysis reveals that, by ignoring LBW dimensions, task-vector-based approaches fail to fully resolve task conflicts and may inadvertently damage task-specific knowledge encoded in the pre-trained model, leading to degradation. To address this issue, we propose PACT, which preserves the anchored task-specific cores (i.e., LBW dimensions) within task vectors by aligning their orthogonal complements with the subspace of the pre-trained weights. These aligned subspace components are then removed from the task vectors before applying existing model merging algorithms. Furthermore, we develop an efficient variant based on randomized SVD to improve scalability. PACT can be seamlessly integrated with existing methods. Extensive experiments across multiple benchmarks demonstrate that PACT consistently enhances mainstream model merging approaches and establishes new state-of-the-art performance.
