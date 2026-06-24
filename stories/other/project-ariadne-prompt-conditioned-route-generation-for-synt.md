---
title: "Project Ariadne: Prompt-Conditioned Route Generation for Synthesis Planning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24184"
authors: ["Anton Morgunov, Victor S. Batista"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24184v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24184v1 Announce Type: new Abstract: Retrosynthetic planning seeks to connect a target molecule to commercially available starting materials through a multistep route. Classical planners construct such routes by iteratively applying single-step reaction models within a search procedure; constrained variants often require specialized algorithms or architectural changes. Direct route generation reframes retrosynthesis as sequence generation, but existing direct-generation methods still train separate models for different planning specifications. We introduce Ariadne, a decoder-only route generator that represents the target, optional constraints, and route in one prompt-completion sequence. On the RetroCast/PaRoutes mkt-cnv-160 benchmark family, one 24-layer checkpoint follows route-depth and required-starting-material prompts: adding the corresponding prompt fields raises Solv-0 by 13.7 points for depth constraints and 31.2 points for required-leaf constraints. Ariadne also improves over DESP, a bidirectional search planner, on required-leaf Top-10 and Solv-0 in 24 GPU-minutes versus 6.8 GPU-hours. On standard reconstruction, Ariadne is comparable to DMS Explorer XL at about half the reported inference time. Across additional target-only benchmarks, Ariadne's clearest gains are on route-holdout reconstruction, whereas AiZynthFinder MCTS remains stronger on several Solv-0 comparisons. These results extend sequence generation from specialist retrosynthesis models to prompt-conditioned structural route generation. We release the codebase and training scripts to support further work, but do not introduce Tier-1--3 route checkers; those remain the main bottleneck before models of this kind can become useful to experimental chemists.
