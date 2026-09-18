---
title: "Search at the Cost of Sampling: Nearly-Instant Latent Space Bayesian Optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19476"
authors: ["Donney Fan, Colin Doumont, Aleksandra Kalisz, Paul Duckworth, Jacob R. Gardner, Henry Moss, Geoff Pleiss"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19476v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19476v1 Announce Type: new Abstract: Generative models are increasingly central to many de novo discovery pipelines, in which designs are generated at scale and filtered through virtual screens to determine a set of candidates to experimentally validate. While Bayesian optimization (BO) is a natural fit for this setting, as it uses past evaluations to guide future proposals, the computational overhead required for its sequential decision-making becomes a bottleneck when virtual screens are relatively cheap. We make BO practical in this regime by exploiting the unique combination of a linear model constrained to a spherical domain where high-dimensional latents concentrate. We build off recent work justifying the use of linear surrogates, while deriving nearly closed-form solutions to the surrogate modelling and acquisition problems that exploit spherical symmetry. The result is at least a 100x speedup over state-of-the art baselines, with matching or improved performance across molecular and image generation benchmarks. Altogether, our method makes BO a practical drop-in for de novo pipelines where it was previously too slow to consider.
