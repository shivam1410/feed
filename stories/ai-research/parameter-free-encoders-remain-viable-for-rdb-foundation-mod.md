---
title: "Parameter-Free Encoders Remain Viable for RDB Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05476"
authors: ["Linjie Xu, David Wipf"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.05476v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05476v1 Announce Type: new Abstract: Given a relational database (RDB) storing heterogeneous tabular information, how can we predict missing (or future) values in some target column of interest? As the space of potential targets is vast across enterprise settings, it is preferable to avoid learning a new model from scratch each time there is a new prediction task. Frozen foundation models based on RDB-specific encoders provide a viable solution, but ideal design remains an open question. On the one hand, it has recently been argued that certain parameter-free subgraph encoders combined with single-table foundation models can achieve near SOTA performance, with no RDB-specific pre-training required. Meanwhile, other contemporary studies advocate for parameterized encoders pre-trained to exploit observable labels for learning task-specific representations. To address this ambiguity, we analyze RDB encoder properties specifically when labels are present as inputs, proving limitations on the potential efficacy of trainable encoder parameters. As empirical validation, we demonstrate that considerably simpler parameter-free encoders are still capable of strong performance across many relevant benchmarking tasks.
