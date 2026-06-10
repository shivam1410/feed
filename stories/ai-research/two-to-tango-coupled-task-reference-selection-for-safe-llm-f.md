---
title: "Two to Tango: Coupled Task-Reference Selection for Safe LLM Fine-tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09866"
authors: ["Xinrui Chen, Jianhao Zhang, Ou Wu, Di Gao"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.09866v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09866v1 Announce Type: new Abstract: Fine-tuning safety aligned large language models (LLMs) on downstream data improves adaptation but may erode learned safety behavior. Existing methods use fixed safety examples, global constraints, or one-sided task filtering. Our diagnostics show task updates expose different safety constraints, motivating joint selection of relevant references and compatible task samples. We propose DualSelect, a coupled framework for task and reference selection that refreshes task conditioned safety references before filtering whole task samples compatible with the induced reference direction. Under a minimax view, DualSelect selects safety references with high preservation loss and task conflict, together with compatible task samples, through entropy-regularized scoring surrogates, lazy reference refresh, and gradient correction. On 1B-8B LLMs, DualSelect preserves safety without losing task utility; using the REDORCA judge, it improves Safety Avg. over the strongest baseline by at least 5.10 points and remains highest in Safety Avg. across judges with moderate overhead. This view extends to retention focused continual learning.
