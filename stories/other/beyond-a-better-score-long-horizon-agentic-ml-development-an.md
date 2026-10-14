---
title: "Beyond a Better Score: Long-Horizon Agentic ML Development and Evaluation Protocol for Physics Time Series"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14024"
authors: ["Yue Ma, Lucas Venetoulias, Akbota Assan, Aobo Li"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14024v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Physics time-series data are central to fundamental discoveries involving dark matter, neutrinos, and gravitational waves. Machine learning has shown strong potential to recover weak scientific signals buried in complex noise. Recent LLM-agent systems further automate ML development, but existing approaches are often driven primarily by one or a few numerical scores. In pursuit of a better score, agents may exploit shortcuts, trigger mode collapse, or game the evaluation procedure, producing models that achieve high scores but are scientifically invalid. We introduce SIDERIUS, an LLM agent system designed to move beyond a better score toward scientifically valid, long-horizon ML development. SIDERIUS combines contract-defined composable capabilities for flexible orchestration and human-in-the-loop, a multi-layer scientific evaluation protocol that distinguishes valid models from unhealthy or gaming models, and resource-aware exploration for computationally expensive scientific ML. In our TIDMAD benchmark, SIDERIUS with a GPT-based orchestrator achieves the highest Valid-model proposal rate of 63.8% and the best valid denoising score of 2.744, compared with 1.6% and -0.647, respectively, for the same GPT model using the general-purpose Codex coding agent. We further benchmark SIDERIUS on three additional physics time-series datasets, demonstrating its reuse and performance across different tasks. Together, these results suggest that progress in agentic scientific ML should be measured beyond a better score, by how an agent explores and by whether the models it produces can be trusted as science.
