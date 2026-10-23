---
title: "DiffLTM: Continuous Diffusions Large Tabular Models for Conditional Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30472"
authors: ["Alankrita Bhatt, Mukur Gupta, Andrea Montanari, Pulkit Tandon"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.30472v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Conditional generation is a key capability to be supported by Large Tabular Models, enabling a number of applications. Accurate conditional generation has to contend with two key challenges: $(i)$ Data comprise a mixture of numerical and categorical entries, the latter often with high cardinality and heavily unbalanced proportions; $(ii)$ Conditional generation becomes increasingly difficult for rare sub-populations. The best models in this class use a hybrid of continuous and discrete diffusions. In this paper, we design a continuous diffusion model with strong generation quality. An important element is the use of cross-entropy loss for categoricals, for which we provide a first theoretical justification. We introduce metrics that focus on rare subpopulations. Further, we generalize conditional generation techniques to enable new types of conditioning. Finally, we show that our model (trained on labor data) can capture classical insights from econometrics. Code is available at https://github.com/granica-ai/DiffLTM
