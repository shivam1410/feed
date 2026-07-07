---
title: "Can Model Merging Improve Aggregation in DiLoCo?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03011"
authors: ["Stefan Horoi, Benjamin Th\\'erien, Guy Wolf, Eugene Belilovsky"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.03011v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03011v1 Announce Type: new Abstract: Model merging techniques, which aggregate independently finetuned models into one to combine their capabilities, have become a topic of significant interest in recent years, with a broad array of methods having been proposed to tackle this problem. Simultaneously, an emerging trend in distributed learning has been the use of methods such as local SGD and DiLoCo, which greatly reduce communication costs by periodically aggregating the independently trained local models. However, these communication-efficient methods have been shown to degrade in performance relative to the FLOP-matched data-parallel gold standard as the number of independent local models grows and as the number of local training steps before global communication is increased. In this work, we draw an explicit analogy between the pseudo-gradient aggregation step in local SGD/DiLoCo and task arithmetic-based model merging, establishing a straightforward way to utilize merging methods in the context of distributed optimization. We then evaluate multiple state-of-the-art model merging methods in this setting and identify one method in particular, Iso-C, as a promising approach for improving DiLoCo. We find that DiLoCo SGD with Iso-C aggregation outperforms not only simple pseudo-gradient averaging but even the momentum-based DiLoCo, despite lacking a momentum mechanism itself. Building on this finding, we propose IsoLoCo, which adapts Iso-C for distributed training by equipping it with Nesterov momentum. Our empirical evaluations on language model pre-training across varying numbers of local workers show that IsoLoCo significantly outperforms DiLoCo, with the gap between them widening as the number of workers increases. This advantage remains present across model sizes and inner step counts, confirming that merging-inspired aggregation is an effective strategy for low-communication distributed training.
