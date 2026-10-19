---
title: "Acquisition Function-Guided Generation for Bayesian Optimization over Discrete Spaces"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22763"
authors: ["Tommaso Ancilli, Thomas Wedenig, Henry Moss, Robert Peharz"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.22763v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Bayesian optimization (BO) over discrete spaces is challenging due to missing gradients and the sparsity of valid solutions. Latent-space BO sidesteps both issues by fitting a surrogate in the latent space of a generative model, which however substantially complicates the direct incorporation of domain knowledge that is naturally expressed in the original discrete space. In this work, we instead combine a pretrained generative model with a surrogate defined directly in data space, where inductive biases such as domain-specific kernels can be readily incorporated. Rather than maximizing the acquisition function over the discrete design space, our method samples candidates from the generative model under a distribution tilted by the acquisition function. To recover useful gradients for sampling, we embed this tilted distribution into a diffusion bridge that yields a smooth, posterior-averaged acquisition function. This leads to \emph{acquisition function guided generation} (AFGG), which we instantiate with a categorical diffusion model and an autoregressive normalizing flow. Across a broad suite of molecular benchmarks, the diffusion model variant performs on par with leading BO methods, while the flow model variant outperforms state-of-the-art methods in most cases and remains highly competitive otherwise. Our implementation is available at https://anonymous.4open.science/r/afgg.
