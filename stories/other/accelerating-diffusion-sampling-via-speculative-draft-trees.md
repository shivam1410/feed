---
title: "Accelerating Diffusion Sampling via Speculative Draft Trees"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17691"
authors: ["Marcello Bullo, Yanxiao Liu, \\\"Oyk\\\"u S{\\i}la G\\\"uner, Arpan Mukherjee, Deniz G\\\"und\\\"uz"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17691v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17691v1 Announce Type: new Abstract: Speculative sampling accelerates diffusion model generation by drafting inexpensive candidate states and correcting them under a coupling that preserves the target distribution exactly, reducing the number of expensive target evaluations. Existing diffusion samplers, notably those based on reflection maximal coupling, are topologically constrained: their lookahead drafts form a chain graph, a single linear sequence, which inherently limits the acceptance rate per target evaluation. We connect speculative sampling in diffusion models to relative entropy coding (REC). This perspective shows the lookahead need not be linear and motivates our central contribution, draft trees, which enrich the candidates considered per round and lower the target function evaluations. We further adopt greedy rejection sampling, an REC algorithm, as the draft-target coupling, improving acceptance while guaranteeing exact target samples. Experiments across diverse target and draft models demonstrate up to 8.3% acceleration over the reflection coupling baseline in practical settings.
