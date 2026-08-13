---
title: "Dual-Primal Graph VAEs for Noisy Label Aggregation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11473"
authors: ["Patrick Stinson, Nikolaus Kriegeskorte"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.11473v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11473v1 Announce Type: new Abstract: Inferring the ground-truth from noisy crowdsourced labels is an important theoretical and practical problem. Neural network-based methods offer an alternative to classical Bayesian models which require specifying a family of generative models used for inference. However, current models either still rely on fairly simple generative models for inference or require pseudo-labels or synthetic data to train the aggregate classifier. We propose a graph VAE architecture in which the decoder and encoder use GAT-based message passing on the adjacency graph of a crowdsourced dataset and its dual, respectively. The ground-truth labels are treated as latent variables, enabling unsupervised representation learning without needing to train a separate classifier. We show our model achieves state of the art performance on crowdsourcing benchmarks. We then demonstrate the generality of our approach by showing how the original crowdsourcing graph can be augmented to incorporate side information such as representations from neural network classifiers trained on the noisy labels to substantially boost their classification performance at test time.
