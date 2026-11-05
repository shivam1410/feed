---
title: "When Latent Dynamics Meet Data Assimilation: A Benchmark of Koopman-Type Representations"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03916"
authors: ["Zhiwei Zhang, Wenxuan Yuan, Xiaoyuan Cheng, Pouria Behnoudfar, Chuanqi Chen, Charlotte Moser, Yuta Tarumi, Jin-Long Wu, Rossella Arcucci, Takemasa Miyoshi, Nan Chen, Marc Bocquet, Sibo Cheng"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03916v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Koopman representations describe nonlinear dynamics through linear evolution in a transformed space, offering an attractive framework for their linear simplicity and generality. Yet these advantages do not necessarily translate into improved performance in deep latent data assimilation (LDA). We systematically compare seven representative methods and structural baselines across five systems spanning approximately periodic to strongly chaotic dynamics and a broad range of state dimensions. We evaluate forecast and assimilation accuracy, physical state recovery, latent-trajectory behavior, and dynamical consistency, and assess Gaussian error assumptions, objective convexity, and uniqueness of analysis solutions. Our results reveal a trade-off between representational flexibility and optimization tractability. Linear evolution of the latent state can stabilize short-term forecasts but restrict expressiveness in strongly chaotic and high-dimensional systems, without consistently improving assimilation accuracy. Parameterized linear operators offer greater flexibility, yet their joint optimization with the encoder--decoder remains nonconvex. Methods with closed-form analysis updates generally perform better and exhibit greater robustness in our experiments, although matrix inversion remains a computational bottleneck. These findings show that the practical benefits of Koopman structure depend on both sufficient observational information and the choice of assimilation procedure.
