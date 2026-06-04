---
title: "Do Transformers Need Three Projections? Systematic Study of QKV Variants"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04032"
authors: ["Ali Kayyam, Anusha Madan Gopal, M Anthony Lewis"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.04032v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04032v1 Announce Type: new Abstract: Transformers have become the standard solution for various AI tasks, with the query, key, and value (QKV) attention formulation playing a central role. However, the individual contribution of these three projections and the impact of omitting some remain poorly understood. We systematically evaluate three projection sharing constraints: a) Q-K=V (shared key-value), b) Q=K-V (shared query-key), and c) Q=K=V (single projection). The last two variants produce symmetric attention maps; to address this, we also explore asymmetric attention via 2D positional encodings. Through experiments spanning synthetic tasks, vision (MNIST, CIFAR, TinyImageNet, anomaly), and language modeling (300M and 1.2B parameter models on 10B tokens), we discovered that our transformers perform on par or occasionally better than the QKV transformer. In language modeling, Q-K=V projection sharing achieves 50% KV cache reduction with only 3.1% perplexity degradation. Crucially, projection sharing is complementary to head sharing (GQA/MQA): combining Q-K=V with GQA-4 yields 87.5% cache reduction, while Q-K=V + MQA achieves 96.9%, enabling practical on-device inference. We show that Q-K=V preserves quality because keys and values can occupy similar representational spaces and attention operates in a low-rank regime, whereas Q=K-V breaks attention directionality. Our results systematically characterize projection sharing as an underexplored instance of weight tying in attention, with direct, quantifiable inference memory benefits, particularly valuable for edge deployment. The code is publicly available at https://github.com/anushamadan02/Do-Transformers-Need-3-Projections
