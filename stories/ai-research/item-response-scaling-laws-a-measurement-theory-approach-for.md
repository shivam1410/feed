---
title: "Item Response Scaling Laws: A Measurement Theory Approach for Efficient and Generalizable Neural Scaling Estimation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07616"
authors: ["Sang Truong, Yuheng Tu, Rylan Schaeffer, Sanmi Koyejo"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.07616v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07616v1 Announce Type: new Abstract: Scaling laws provide a fundamental framework for understanding the performance of Language Models (LMs), yet deriving them requires prohibitively expensive evaluations across thousands of checkpoints or millions of inference samples. To address this, we introduce Item Response Scaling Laws (IRSL), a unified framework that integrates Item Response Theory (IRT) within the scaling law framework. Unlike traditional approaches that treat each model-benchmark pair in isolation, IRSL disentangles latent model ability from question characteristics, factorizing the scaling law estimation for $M$ models and $N$ questions to significantly reduce parameter complexity from $O(M \times N)$ to $O(M + N)$. We instantiate IRSL with Beta-IRT, which leverages the empirical probability responses of LMs -- such as token probabilities in pre-training and pass rates in test-time sampling -- to capture richer signals than binary responses. We validate our approach across two prevalent scaling paradigms: (1) pre-training downstream scaling, using 6,612 LM checkpoints and 37,682 questions from 10 benchmarks; and (2) test-time scaling, using 12 LMs and 120 questions from 4 benchmarks with up to 2,500 samples per question. Given a one-time calibration on existing model responses, IRSL yields more reliable scaling estimates using only 50 questions per benchmark (a 99.9\% reduction), achieving comparable or superior decision accuracy to traditional approaches. Furthermore, we show that the estimated latent model abilities are generalizable, enabling accurate performance forecasting across benchmarks that share the same measurement objective.
