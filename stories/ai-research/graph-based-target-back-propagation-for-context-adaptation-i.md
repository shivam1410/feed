---
title: "Graph-based Target Back-Propagation for Context Adaptation in Multi-LLM Agentic Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14155"
authors: ["Tan Zhu, Tong Yao, Kananart Kuwaranancharoen, Amit Singh, Yushang Lai, Deepa Mohan, Shankara Bhargava"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.14155v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14155v1 Announce Type: new Abstract: Context adaptation automates prompt engineering in LLM-based systems by iteratively revising tunable prompts from task feedback, without modifying model weights. Extending this paradigm to multi-LLM agentic systems is crucial: existing methods suffer from inaccurate credit assignment and lack convergence guarantees. We propose \textbf{G}raph-based \textbf{T}arget \textbf{B}ack-\textbf{P}ropagation (GTBP), a context adaptation framework for agentic workflows modeled as directed acyclic graphs. GTBP propagates local target outputs backward through the workflow graph and uses target--output discrepancies to guide a stage-wise prompt update mechanism. Theoretically, we show that GTBP's stage-wise prompt updates become stable over iterations, and that a sufficiently capable LLM optimizer can decrease the overall objective. Empirically, GTBP consistently outperforms strong baselines across three benchmarks while maintaining comparable computational cost.
