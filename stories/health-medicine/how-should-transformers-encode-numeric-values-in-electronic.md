---
title: "How Should Transformers Encode Numeric Values in Electronic Health Records?"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01391"
authors: ["Maria Elkj{\\ae}r Montgomery, Christian Igel, Mikkel Odgaard, Martin Sillesen, Mads Nielsen"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.01391v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01391v1 Announce Type: new Abstract: How do we encode numeric values in transformer-based sequence processing, particularly in electronic health record (EHR) data? We systematically compare discrete, continuous, and hybrid value encoding strategies using synthetic arithmetic tasks embedded within real-world EHR data, as well as real-world clinical prediction tasks. Our study reveals trade-offs between numeric precision, optimisation stability, and architectural flexibility. We find that approaches that explicitly model value-concept interactions perform best on precision-sensitive arithmetic tasks when architectural constraints permit. Hybrid token-based approaches that retain numeric values but apply binning prior to projection provide a more robust and broadly applicable alternative, with the optimal number of bins following a simple empirically derived power-law in dataset size. Across tasks, models consistently exhibit reliable "good enough" numeric computation rather than exact arithmetic, while clinical gains from incorporating laboratory values are task-dependent. This suggests that robustness and deployability often outweigh maximal numeric precision in practice, motivating hybrid token-based approaches as a practical default.
