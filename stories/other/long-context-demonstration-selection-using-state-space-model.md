---
title: "Long-Context Demonstration Selection Using State Space Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17888"
authors: ["Ziniu Zhang, Zhenshuo Zhang, Ruoxuan Xiong, Gene Cooperman, Hongyang R. Zhang"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17888v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17888v1 Announce Type: new Abstract: We study the problem of demonstration selection, which involves selecting a subset of examples for prepending to a query to a language model. This problem is closely related to in-context learning and language model inference. Since the inference cost of a transformer model scales quadratically with sequence length, the selection problem becomes especially challenging in a long-context scenario. In this paper, we tackle this problem by building on state space models (SSMs), which require only linear inference time given the input. Our approach involves two algorithms. The first learns a small set of SSMs through distillation of a (trained) transformer model. We partition all the layers into consecutive groups. Then for each group, we estimate a separate state space model to replicate the input-output behavior within the adjacent layers. Second, we map the distilled model outputs to a small set of tokens, and apply these embeddings for demonstration selection in downstream applications. We perform extensive experiments in both synthetic and real-world datasets to validate our approach. We demonstrate that the distilled SSMs only incur an approximation error of less than $0.7\%$ relative to the true output. In downstream evaluation, we show that on several text classification and reasoning tasks, our approach reduces FLOPs by $14.2\times$ and improves accuracy by $6.48\%$ relative to baseline demonstration selection methods.
