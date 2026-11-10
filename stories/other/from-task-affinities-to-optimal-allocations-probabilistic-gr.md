---
title: "From Task Affinities to Optimal Allocations: Probabilistic Graphical Modelling for Supervised Finetuning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10389"
authors: ["Prateek Chanda, Saral Sureka, Krishnateja Killamsetty, Ganesh Ramakrishnan"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10389v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Supervised fine-tuning over a large pool of heterogeneous tasks is often computationally expensive, leading practitioners to train language models on a fixed training budget of carefully chosen SFT tasks. Thus, achieving strong downstream performance hinges on selecting an effective subset of tasks, or equivalently, identifying an optimal task mixture under a fixed budget constraint. In practice, supervised finetuning mixtures are often determined using simple heuristics (e.g., uniform or size-proportional sampling) that ignore task interactions, which can hurt transfer and waste budget on redundant task sources. We introduce TASKMIXPGM, a framework for learning continuous task mixtures through energy-based modelling over SFT tasks. Each task forms a node in a Markov random field, with unary potentials capturing task utility and pairwise potentials modelling inter-task relationships via behavioral divergences between predictive distributions of single-task fine-tuned models. Optimizing this objective yields task mixtures that balance utility, coverage, and redundancy. We further show that the induced set function defined over the set of such tasks is weakly submodular under budget constraints, enabling approximation guarantees for discrete task selection. Empirically, we provide a fixed, benchmark-independent mixture that improves over heuristic mixing across multiple model families and different training budgets. TASKMIXPGM also uncovers interpretable structure in task interactions, revealing complementarities and redundancies that inform effective SFT mixtures.
