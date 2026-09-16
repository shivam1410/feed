---
title: "Agentic Search Spaces for Tabular Machine Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16309"
authors: ["Renat Sergazinov, Artem Chistyakov, Sergey Pankevich, Artem Babenko"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16309v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16309v1 Announce Type: new Abstract: Despite the rapid progress of LLM-based agents for planning, code generation, and debugging, their practical value for tabular machine learning remains underexplored. In this paper, we investigate a concrete use case: whether state-of-the-art agentic AI systems can design extended HPO search spaces for established tabular models that outperform the standard search spaces provided by the model authors. Specifically, we represent each tabular model as a modular pipeline covering preprocessing, embeddings, architecture, training, and inference. We then task the agent to propose candidate code implementations for each module and use a classical HPO algorithm to jointly optimize over these candidates and the model's default hyperparameters. Compared with the base HPO spaces, the expanded search spaces improve the performance of nearly every model family across a suite of 45 datasets, with average relative gains of 0.6%, rising to 2.0% on small-to-medium regression datasets. Notably, these gains come at no extra tuning cost: the enlarged spaces outperform the base under the same tuning and ensembling budgets. The gains transfer to the recent TabArena benchmark, where the agentic spaces improve the official Elo scores of four of the five model families and the two strongest agentic ensembles surpass the best AutoGluon ensemble of conventional models. Overall, our study suggests that LLM agents can provide practical value for tabular ML by expanding the design space.
