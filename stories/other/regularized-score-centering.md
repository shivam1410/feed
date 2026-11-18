---
title: "Regularized Score Centering"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.21791"
authors: ["Hao Bai", "Chenlu Ye", "Xuanchang Zhang", "Aviral Kumar", "Tong Zhang"]
date: "2026-11-15T19:00:00.000Z"
score: ""
guid: "2611.21791"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.21791.png"
generated: "2026-11-18T19:12:26+05:30"
---

Asynchronous reinforcement learning increases training throughput, but data from stale policies and numerical mismatch between training and inference can destabilize learning. To stabilize off-policy learning, score centering (SC) removes the effect of reward baselines on the expected update. Our gradient diagnostics show less extreme gradients with SC than with importance sampling (IS), but SC can still fail when the learner moves far from the behavior policy that generated the data. To limit this policy mismatch, we introduce Regularized Score Centering (RSC), which adds a reverse Kullback-Leibler (KL) penalty to encourage the learner's next-token distribution to stay close to the behavior policy's next-token distribution. RSC works with or without truncated importance sampling (TIS), which caps token importance weights. Our theoretical analysis supports this approach, showing that KL regularization improves convergence guarantees. We evaluate dense and mixture-of-experts models on mathematical reasoning and agentic tasks, including online shopping, tool use, games, and fully asynchronous software engineering. RSC with TIS substantially improves sample efficiency across all agentic benchmarks, attaining higher training rewards with the same number of sampled responses. In final evaluations, it achieves top performance across all six agentic tasks, improving by 14.3% on AppWorld and reaching 9.9 times the strongest baseline's score on BabyAI.
