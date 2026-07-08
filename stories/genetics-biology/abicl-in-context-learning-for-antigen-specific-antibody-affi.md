---
title: "AbICL: In-Context Learning for Antigen-Specific Antibody Affinity Ranking"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05846"
authors: ["Zhiyuan Chen, Jing Hu, Junzhe Wang, Yueyang Huang, Xinyi Yang, Zhaoyang Wang, Feng Zhu"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.05846v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05846v1 Announce Type: new Abstract: Accurate ranking of antibody candidates according to their binding affinity is essential for therapeutic antibody discovery. However, existing methods treat affinity comparisons independently and ignore the contextual information encoded in other labeled comparisons, limiting their ability to capture antigen-specific binding landscapes. For many target antigens, a small number of experimentally characterized affinity comparisons are often available. An important question is whether the model can exploit these existing comparisons to infer antigen-specific ranking patterns that facilitate subsequent affinity ranking. This form of learning from labeled demonstrations closely resembles the paradigm of In-Context Learning, motivating us to revisit antibody affinity ranking from an ICL perspective. To this end, we propose AbICL, an ICL framework for antigen-specific antibody affinity ranking. AbICL combines a pretrained structural encoder with a context ranking head and is trained with an episodic meta-training strategy that enables the model to leverage support demonstrations for test-time adaptation without gradient updates. Experiments on the AbRank benchmark demonstrate that AbICL consistently outperforms existing ranking baselines across almost all data splits and evaluation benchmarks. Further analysis shows that the value of contextual demonstrations depends on how well they match the target inference task, and becomes increasingly pronounced under distribution shift and fine-grained affinity discrimination. These findings highlight the potential of ICL as an effective paradigm for antigen-specific antibody affinity ranking, particularly in challenging settings where a single global ranking function is insufficient.
