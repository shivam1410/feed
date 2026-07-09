---
title: "Robust Federated Learning Under Real-World Client Churn"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06979"
authors: ["Dhruv Garg, Neha Lakhani, Debopam Sanyal, Myungjin Lee, Alexey Tumanov, Ada Gavrilovska"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06979v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06979v1 Announce Type: new Abstract: Federated Learning (FL) enables training shared models on private, on-device data, but production deployments remain constrained to slow, multi-day refresh cycles due to the complexity of coordinating massive client populations. For applications such as feed ranking, ad targeting, and personalized recommendation, model freshness: the ability to rapidly adapt to new user-local data is critical for maximizing objectives like click-through rate. This lag leaves models stale and unresponsive to volatile data distributions driven by viral trends and shifting user intent. Bridging this gap requires addressing three challenges overlooked by existing FL systems: transient client availability, dynamic data heterogeneity, and delays between model predictions and observable outcomes. We present FeLiX, an FL orchestration framework that minimizes wall-clock time-to-target accuracy on live interaction streams. FeLiX introduces three primitives: (i) streaming-aware availability tiers that leverage lightweight telemetry to identify ready clients at scale; (ii) fresh-utility selection, a dual-tier mechanism that prioritizes statistically valuable updates from devices able to meet tight refresh deadlines; and (iii) informativeness-aware, delay-robust aggregation that incorporates late, high-value updates containing ground-truth outcomes without biasing the global model toward stale distributions. Unlike prior systems that rely on unrealistic oracular knowledge of client availability, FeLiX achieves near-oracular performance in real-world settings. Across CIFAR-10, Google Speech, and realistic low-availability traces, FeLiX reduces wall-clock time-to-target accuracy by up to 2.37X while reducing communication bandwidth by 1.30X compared to state-of-the-art synchronous and asynchronous FL baselines.
