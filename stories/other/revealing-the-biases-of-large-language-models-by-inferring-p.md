---
title: "Revealing the Biases of Large Language Models By Inferring Prior Distributions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18996"
authors: ["Joshua Ryo Cheng, Thomas L. Griffiths, Jake C. Snell"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18996v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Large Language Models (LLMs) have been known to exhibit a wide range of social biases including name-nationality associations, occupation-gender associations and racial stereotypes. Existing approaches to evaluating these biases typically involve measuring surface-level behavior where a model is fed a dataset of prompts and its outputs are scored relative to ground-truth answers. Inspired by prior elicitation in cognitive science, we propose a different perspective that reconstructs latent bias as a prior underlying the model's behavior. We formulate the problem as a Bayesian inverse problem where, given prompt-response observations on a bias benchmark dataset, we infer a low-dimensional latent distribution that summarizes the model's stereotyping tendencies. This paper develops the mathematical foundation, a practical reconstruction algorithm, and experiments using the Bias Benchmark for QA (BBQ) benchmark to infer the prior distributions of LLMs over responses in ambiguous social contexts.
