---
title: "Exact Degeneracy Under Balanced k-Shot Sampling:Consequences for Small-Sample Discriminant Analysis on LLM Embeddings"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09860"
authors: ["Lingxiao Qu"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.09860v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09860v1 Announce Type: new Abstract: Balanced k-shot sampling draws exactly k labeled examples per class. We show that it induces an exact, provable degeneracy in a family of small-sample discriminant estimators. Under balanced sampling, the within-class scatter operator of Kernelized Linear Principal Component Discriminant Analysis (KLPCDA) is not merely rank-deficient but exactly a scaled orthogonal projector. We derive the consequences in closed form: two of KLPCDA's seven variants have every signal eigenvalue exactly equal, so their eigenvector selection criterion is provably indifferent rather than ill-conditioned, and a third has a provably void objective. This follows from the estimators' construction, not any dataset; we confirm it on frozen sentence embeddings and, separately, on residual-stream activations from a decoder-only generative model. An in-formula tie-break repairs the two repairable variants, with recovery gated by class count: the residual subspace constraint costs 5x more on few-class than many-class datasets (p=0.000001). We then evaluate the repaired framework on few-shot text classification on frozen LLM embeddings (n much smaller than d, up to 4096), across four datasets, three embedding sizes, and three trained baselines (SetFit, LoRA, in-context learning). A properly cross-validated logistic-regression probe still beats every KLPCDA variant on three of four datasets, at every embedding size; guidance carried from pixel, vibration-signal, and gene-expression data does not directly generalize to this feature space. Three independent geometric separability metrics fail to explain why one high-dimensional decoder-based embedding model underperforms smaller bidirectional encoders, ruling out anisotropy; the gap is substantially an estimation-efficiency effect, not a permanent ceiling, closing by more than 80% when the support set grows from k<=10 to k=30-50 (p=0.00195, both many-class datasets).
