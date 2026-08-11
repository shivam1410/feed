---
title: "CODS: Iterative Bellman-Residual Data Selection for Reusable Offline Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07719"
authors: ["Ibne Farabi Shihab, Sanjeda Akter, Abu Sa-Adat Mohamed Moon-Im Al Ahsan, Md Najmus Swaqeeb, Anuj Sharma"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.07719v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07719v1 Announce Type: new Abstract: Offline reinforcement learning repeatedly trains policies from a fixed transition pool, making redundant data costly across seeds and hyperparameters, while naive subsampling can remove rare transitions needed for long-horizon credit assignment. We introduce CODS, a critic-guided selector that alternates between fitting an algorithm-matched critic and acquiring high-residual transitions before freezing a reusable subset. Unlike prioritized replay, CODS produces a static artifact; unlike one-shot residual selection, it refreshes scores as the critic changes. At a 10\% budget, CODS retains 96.6\% of eligible-pool performance across 20 valid D4RL task--algorithm cells. It exceeds ReDOR and OPER on 19/20 cells and every other subset baseline on 20/20; all six subset advantages remain significant under predeclared hierarchical inference with Holm correction. Holding total selector updates fixed, five acquisition rounds improve four representative cells by 11.23 points over one round and saturate thereafter. Equal-pass and equal-hour evaluations clarify that reuse, rather than a single-run speedup, creates the compute advantage. Mechanism and corruption interventions expose both useful sparse-reward enrichment and sensitivity to outliers. Finally, a whole-trace extension retains 95.4\% of pooled ALFWorld success and 96.5\% of pooled GSM8K exact match. CODS is therefore a reusable selection procedure, not a formal coreset guarantee.
