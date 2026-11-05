---
title: "Forget What Comes Next: LLM Unlearning via Statistical Independence"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03955"
authors: ["Andrii Shkabrii, Claudia Plant, Martin Pawelczyk"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03955v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Large language models (LLMs) can memorize and reproduce fragments of their training data, raising privacy and legal concerns that motivate machine unlearning. Yet poisoned training examples can remain statistically detectable after unlearning, which raises the question of whether current unlearning objectives remove what the model has memorized at all. In this work, we introduce PINT, a novel algorithm for machine unlearning that uses the Hilbert-Schmidt Independence Criterion (HSIC) to reduce the statistical dependence between tokens to be forgotten and the internal representations used to predict them. We formally relate our HSIC-based objective to Exact Memorization through a computable upper bound, connecting the training objective directly to the model's ability to reproduce the forgotten tokens. In extensive experiments, we compare forgetting-utility trade-offs across eight settings with models up to 7B parameters and demonstrate scalability to 70B parameter models. Our evaluations cover unlearning Gaussian poisons, personal information, hazardous knowledge in biology and cybersecurity, and copyrighted books and news articles. PINT achieves the strongest forgetting-utility trade-off on average and is the only method to make Gaussian poisons undetectable while maintaining near-original model utility. Code is available at: https://github.com/shkabrii/PINT
