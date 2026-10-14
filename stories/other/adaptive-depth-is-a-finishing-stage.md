---
title: "Adaptive-Depth Is a Finishing Stage"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14252"
authors: ["Andrei Piterbarg, Sean McLeish, Dhruv Pai, Benjamin Keigwin"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14252v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Looped transformers reuse the same layer multiple times, allowing inference compute to be adjusted without changing the model. Recent adaptive-depth methods train the model across multiple loop depths from the beginning of training. We introduce fixed-first training, which varies model depth only during a short final phase of training. At 200M parameters, training a model of fixed-depth 2 for the first 67% of the run reduces modeled training compute by 45% while keeping mean negative log-likelihood (NLL) across inference depths within 0.5% of training across depths throughout. At 1B parameters, training initially at depth 4 reduces modeled compute by 31% to 37% and wall-clock time by 32% to 39%, while keeping final NLL within 0.8% and downstream differences within the observed seed variation. These results show that training over the full range of depths can be reserved for a short finishing phase with only small changes in performance.
