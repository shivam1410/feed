---
title: "Neighborhood Smoothing for Calibration"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09020"
authors: ["Idan Horowitz, Avigdor Gal"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2610.09020v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Modern neural networks are often miscalibrated, with a tendency to overconfidence. Existing train-time calibration methods largely modify task losses or calibration penalties, leaving neighborhood structure in learned representations underexploited. We introduce graph smoothing as a general principle for train-time calibration, which encourages similar predictive distributions across neighboring samples in representation space. We analyze the effects of graph smoothing, deriving bounds that connect predictive divergence between neighboring samples to local confidence variation and to the propagation of pointwise calibration error, and characterize the conditions under which smoothing can or cannot improve calibration. In light of this analysis, we propose \modelNoSpace, a graph-based train-time regularizer that penalizes the Jensen--Shannon divergence between predictive distributions of neighboring samples. We present a thorough empirical analysis, showing that across standard calibration benchmarks, \model improves predictive quality, and the improvement is complementary to post-hoc calibration: after temperature scaling, \model attains the lowest NLL of all evaluated train-time methods in seven of the eight image and tabular settings. These findings demonstrate the value of graph smoothing over learned representations for neural network calibration.
