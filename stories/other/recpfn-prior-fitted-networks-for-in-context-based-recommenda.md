---
title: "RecPFN: Prior-Fitted Networks for In-Context-Based Recommendations"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19735"
authors: ["En Zhi Tan, Jia Xiang Lim, Bryan Lijie Chew, Tze Minh Ng, Benjamin Yan Han Yap"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19735v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19735v1 Announce Type: new Abstract: We introduce RecPFN, a prior-fitted network that brings in-context learning to sequential recommendation. RecPFN is pretrained entirely on synthetic clickstream environments sampled from a broad structural causal prior, enabling it to amortize Bayesian-style inference from a small support set. At inference, a lightweight decoder-only transformer conditions on a handful of domain sequences and produces next-item predictions for queries in a single forward pass, without any weight updates. Across eight public benchmarks, RecPFN achives state-of-the-art zero-shot performance while remaining strongly competitive with supervised methods in low-compute and low-data regimes. It is deployment-efficient and robust to domain shift, outperforming strong zero-shot baselines that rely on large real-interaction corpora. RecPFN provides a practical path toward generalizable, data-efficient recommenders and opens avenues for richer priors, longer-context ICL, and multimodal extensions. Code for training and evaluation is publicly available at https://github.com/SAP-samples/tabular-ai-recpfn/.
