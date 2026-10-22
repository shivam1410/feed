---
title: "Building a Nested LADDER for LLM Unstructured Post-Training Pruning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28773"
authors: ["Nicol\\'as Mauricio Cuadrado \\'Avila, Ivo Gollini Navarrete, Martin Tak\\'a\\v{c}, Samuel Horv\\'ath"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.28773v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Non-uniform allocation can improve post-training pruning of large language models, yet quality can still degrade sharply at high sparsity. To control degradation as sparsity increases, we introduce LADDER (Layer-Wise Allocation via Damage-Driven Evaluation and Refinement), which allocates sparsity incrementally. At each step, it evaluates pruning an additional fraction of weights from each eligible layer and commits the layer update that causes the least end-to-end degradation per removed parameter. This process produces non-uniform sparsity profiles and exactly nested masks across multiple budgets. We evaluate LADDER on five OPT, Llama, and Qwen models across 10-90% sparsity, using SparseGPT as its candidate-generation backend and comparing against uniform and adaptive allocation baselines. Results reveal a clear operating-regime trade-off: LADDER is comparable or slightly weaker at benign sparsity but becomes substantially more robust from 70% onward. This high-sparsity advantage largely persists after posterior distillation across four of five models and translates into improved retention of aggregate zero-shot accuracy.
