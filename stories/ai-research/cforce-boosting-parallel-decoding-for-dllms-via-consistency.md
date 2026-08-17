---
title: "CForce: Boosting Parallel Decoding for dLLMs via Consistency Forcing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13925"
authors: ["Yuji Ren, Chenkai Xu, Zhuocheng Gong, Jianguo Li, Zhijie Deng"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.13925v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13925v1 Announce Type: new Abstract: Diffusion large language models (dLLMs) accelerate language generation by predicting multiple masks in a single forward pass. However, existing dLLMs can suffer from unreliable predictions in early denoising stages under aggressive parallelism strategies, leading to errors that can propagate to later stages. To tackle this issue, we present Consistency Forcing (CForce) for dLLMs, a distillation method to force the mask predictions of early stages to align with those of later stages. CForce trains the model on pre-collected self-rollout trajectories, thereby improving training-inference alignment. We introduce Confidence Adaptive KL Divergence as a distillation objective to conjoin the merits of forward and reverse KL. We further provide a theoretical analysis for the consistency objective to explain why CForce can approximately minimize the prediction error of early stages. Critically, the same formulation applies to both mask-to-token decoding and edit-capable decoding; in the edit-capable case, later token-to-token refinements provide additional supervision for earlier masked-state predictions. Experiments on non-edit and edit-capable LLaDA models show improved speed-quality trade-offs, especially under high-parallelism decoding budgets. Code is available at: https://github.com/inclusionAI/dFactory.
