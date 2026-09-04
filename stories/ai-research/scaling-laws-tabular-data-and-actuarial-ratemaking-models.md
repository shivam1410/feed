---
title: "Scaling Laws, Tabular Data and Actuarial Ratemaking Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03106"
authors: ["Ronald Richman"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.03106v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03106v1 Announce Type: new Abstract: Scaling laws in modern deep learning describe how held-out loss improves as model capacity, training data, and compute increase, often following power-law trends. We investigate whether analogous scaling regularities arise in actuarial ratemaking, where data are tabular, heterogeneous, and noisy, and where classical models such as GLMs remain strong baselines. Using a real-world motor insurance portfolio, we train models from different families across increasing fractions of the training data and multiple random seeds, evaluating out-of-sample Poisson deviance, a likelihood-based loss for Poisson count predictions in which lower values indicate better held-out fit. We find that all model families improve with additional data, but scaling exponents differ substantially: TabM exhibits markedly stronger data scaling than purely supervised tabular Transformers and standard MLP baselines. Transformer variants show weak parameter scaling unless augmented with additional inductive biases (TabM-style adaptation or self-supervision). These results provide quantitative guidance on model selection by data regime and suggest that effective scaling on actuarial tabular tasks depends on architecture and loss function objective design, with simple increases in Transformer size providing limited gains.
