---
title: "On the Residual Scaling of Looped Transformers: Stability and Transferability"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18524"
authors: ["Shaowen Wang, Bingrui Li, Ge Zhang, Wenhao Huang, Shen Yan, Jian Li"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.18524v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18524v1 Announce Type: new Abstract: Looped (weight-tied) Transformers apply a shared residual block $N$ times ($h \leftarrow h + \varepsilon\,f(h)$, same $f$ at each step), increasing effective depth without adding parameters. Prior depth-scaling analyses prescribe $\varepsilon = 1/\!\sqrt{L}$ for depth-$L$ residual networks. We show that this is insufficient for looped architectures: weight sharing makes residual updates correlated across iterations, requiring the stronger scaling $\varepsilon = 1/N$. For multi-layer blocks ($L$ unique layers looped $N$ times), we derive a factored parameterization $\varepsilon = \lambda/(N\!\sqrt{L})$ that separates the two sources of growth: $1/N$ controls the within-layer loop correlation, and $1/\!\sqrt{L}$ controls the across-layer variance. A key consequence is that the optimal learning rate depends only on the number of unique layers $L$, not on the loop count $N$, enabling direct hyperparameter transfer from small to large $N$ without retuning. Experiments on looped Transformers confirm that $1/N$ scaling improves trainability and yields better loss than $1/\!\sqrt{N}$ scaling across loop counts.
