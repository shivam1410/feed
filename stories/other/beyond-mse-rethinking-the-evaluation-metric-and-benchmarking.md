---
title: "Beyond MSE: Rethinking the Evaluation Metric and Benchmarking for Irregular Time Series Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17293"
authors: ["Rongwen Li, Haixin Xie, Xiao Wang, Changjian Chen"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17293v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17293v1 Announce Type: new Abstract: Existing research on irregular time-series forecasting has primarily focused on model design, while evaluation metrics remain insufficiently studied. Existing benchmarks typically use mean squared error (MSE) as the evaluation metric. We show that, in irregular forecasting, MSE is determined not only by the model prediction but also by the sample-specific timestamp sampling distributions, leading to a biased assessment of the models' continuous-time predictive performance. To address this issue, we propose the Continuous-time Squared Error (CSE), which employs importance weighting to eliminate the influence of the timestamp sampling distributions. We further theoretically prove that CSE's asymptotic estimation error with respect to continuous-time risk is no greater than that of MSE. Finally, we construct a systematic benchmark covering synthetic, semi-synthetic, and eight real-world datasets to validate the effectiveness of CSE and systematically evaluate models' continuous-time predictive performance. Experiments show that CSE can recover continuous-time risk more accurately than MSE, while relying solely on MSE may not fully reflect models' continuous-time predictive performance in real-world scenarios. Our code can be obtained at https://github.com/hnu-vis/ITS-Bench.
