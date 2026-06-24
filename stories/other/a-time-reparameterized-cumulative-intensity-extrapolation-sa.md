---
title: "A Time-Reparameterized Cumulative Intensity Extrapolation Sampler for Discrete Flow Matching"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24140"
authors: ["Feiyang Fu, Hehe Fan"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24140v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24140v1 Announce Type: new Abstract: Discrete flow matching (DFM) provides a principled framework for generative modeling on discrete state spaces via continuous-time Markov chain dynamics. In practice, sampling for DFM commonly employs discretizations such as $\tau$-leaping, yet efficient sampling methods under a limited number of function evaluations (NFE) remain less studied. To address this gap, we propose the Time-Reparameterized Cumulative Intensity Extrapolation (TR-CIE) sampler, which aims to improve sampling quality when function evaluations are restricted. TR-CIE consists of two components. First, a schedule-based time reparameterization rescales the time grid according to the noise schedule. Under standard factorized DFM rate parameterizations, this transformation of variables absorbs the schedule-dependent growth term and mitigates stiffness near the terminal sampling stage. Second, we introduce a cumulative-intensity extrapolation updating rule. By reusing cached model outputs from the previous step as a history term, this improves the approximation of stepwise cumulative intensities on the resulting non-uniform time grid. We provide a theoretical analysis that bounds the local approximation error of cumulative intensities and establishes convergence results. The resulting sampler requires one NFE per step and introduces no additional model evaluations compared to the standard $\tau$-leaping sampler. Extensive experiments on synthetic tasks, text generation, and text-to-image benchmarks demonstrate that our method improves sampling quality under limited NFE.
