---
title: "Can Coding Agents Reproduce Official Statistics? Metadata, Retry Budget and the Limits of Execution Feedback in a Controlled Eurostat Benchmark"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22222"
authors: ["Sabina-Cristiana Necula"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.22222v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22222v1 Announce Type: new Abstract: Large language models can generate executable data-analysis code, but successful execution is not equivalent to a valid official-statistics result. This study asks whether authoritative metadata and execution feedback improve the reproducibility of Eurostat answers produced by a coding agent, and isolates what execution feedback actually contributes. A benchmark of 30 natural-language tasks covering seven domains, seven Eurostat datasets and four difficulty tiers was run under four conditions: task only (A), task plus a frozen dataset metadata card (B), metadata plus a repair loop driven by sanitized execution feedback (C), and metadata plus the same attempt budget with no diagnostics of any kind (D). Claude Sonnet 5 generated Python through the Anthropic Messages API in three independent replicates, yielding 360 task-runs. Exact correctness required successful execution, the correct dataset, filters, output shape, values and unit. A companion experiment run under an under-specified output contract, in which the required ranking key and unit representation were never stated to the model, understated condition C by 23.4 points, showing that evaluator and contract design can dominate measured agent error. Reliable statistical coding agents need semantic validation against frozen specifications, a fully specified output contract, and a retry budget - not execution diagnostics.
