---
title: "Error accumulation in reverse diffusion with an imperfect score: beyond path-space analyses"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23617"
authors: ["George Giapitzakis, Ankur Moitra, Andrej Risteski, Dhruv Rohatgi"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23617v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Diffusion modeling is a popular method of sampling from a complex, high-dimensional distribution $p$ using learned approximations of its (noised) score functions. Generating a single sample requires simulating the reverse diffusion process, which requires many queries to the learned scores. Thus, a priori, the learning errors can easily compound. Indeed, in existing theoretical analyses, the sampling error (as measured in total variation distance to $p$) accumulates polynomially with the horizon of the stochastic process. This is a consequence of bounding the error of the output law by the error of the law of the entire reverse diffusion path. In this paper, we demonstrate that by circumventing the "path-space" analysis, the error accumulation of the diffusion sampler can be mitigated when $p$ satisfies a Poincar\'e inequality. Moreover, we achieve this result as a special case of a broader framework that applies to any distribution $p$, but relaxes the error metric from total variation distance to a weaker metric capturing all sample statistics that do not "witness" the multimodality of $p$. We then zoom out from analyzing the diffusion sampler to the information-theoretic question: given a learned score with some error bound, how accurately can we identify $p$? We show that, for any given bound on the Poincar\'e constant of $p$, the diffusion sampler already nearly achieves optimal total variation error.
