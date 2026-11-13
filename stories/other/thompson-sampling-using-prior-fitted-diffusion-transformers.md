---
title: "Thompson Sampling using Prior-fitted Diffusion Transformers"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14656"
authors: ["Sihwa Park, Jingsen Zhu, Vinamr Jain, Sheng-Yen Chou, Alexander Terenin"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14656v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Thompson sampling is natural randomized strategy for optimizing unknown functions in a black-box manner. In continuous global optimization, Thompson sampling has largely been restricted to Gaussian process priors, as these are essentially the only class for which computing the posterior distribution has been tractable in practice. In this work, we introduce \emph{prior-fitted diffusion transformers}, which are diffusion models that perform Thompson sampling in-context at inference time, after being pre-trained using the prior-fitted network paradigm. To apply these models, we develop a set of practical non-Gaussian priors for general black-box functions---including those that have characteristics that cannot be achieved under Gaussianity, such as priors over unimodal functions. We also quantify the tradeoff between model size and the number of pre-training iterations, and show that these models follow scaling laws akin to those observed in transformers defined over other modalities. Across a set of global optimization benchmarks, we show that prior-fitted diffusion transformers with non-Gaussian priors can achieve improved performance compared to traditional pipelines built on Gaussian processes.
