---
title: "LEAN: Library-Based Adaptation for Asynchronous, Federated Fine-Tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26805"
authors: ["Erdong Hu, Zhimin Ding, Yuxin Tang, Chris Jermaine"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 38
guid: "oai:arXiv.org:2611.26805v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Federated fine-tuning of foundation models with low-rank adapters (LoRA) is typically reconciled by averaging locally trained adapters. In cross-device settings, where participants hold heterogeneous data and join or leave asynchronously, averaging is poorly suited: locally trained adapters are not identifiable up to permutation, and averages of adapters trained on dissimilar data can be uninformative or unstable. We propose a simple idea called federated library-based adaptation (LEAN), which replaces averaging altogether. The server maintains a library of rank-1 basis pairs; participants check out random subsets, fine-tune them locally as a LoRA adapter, and check them back in, so that each pair is shuffled across sites and trained on many participants' data. Because no aggregation step is required, LEAN operates fully asynchronously and communicates only low-rank parameters. We prove that, in a synchronous setting, LEAN converges to a neighborhood of a stationary point, with the shuffle canceling data heterogeneity at first order. Across image and text fine-tuning benchmarks, LEAN outperforms averaging-based baselines in most settings with substantially less communication, and remains effective under heavy data heterogeneity, where averaging-based methods fail to reach nontrivial accuracy, and under heavy asynchrony, where they degrade substantially.
