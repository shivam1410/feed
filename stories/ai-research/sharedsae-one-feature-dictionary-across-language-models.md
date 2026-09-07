---
title: "SharedSAE: One Feature Dictionary Across Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04344"
authors: ["Daniil Ognev, C\\'elian Vasson, Lijie Hu, Kentaro Inui, Benjamin Heinzerling"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.04344v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04344v1 Announce Type: new Abstract: Sparse autoencoders (SAEs) are widely used to interpret language model activations, but SAE training and latent labelling are typically repeated for every model. Here, we show that a single shared SAE can replace a collection of dedicated per-model SAEs. Our method, SharedSAE, combines a shared dictionary with model-specific encoder-decoder pairs. Unlike the closest prior method, which discards activation magnitudes and requires all models at inference, SharedSAE instead normalizes only selection scores, preserving magnitudes, and uses model dropout for single-model inference. We train SharedSAE on four 1B-scale base language models spanning distinct families and tokenizers. Despite sharing its latents across models, SharedSAE retains 96.6% of dedicated SAEs' mean explained variance; its latent activations exhibit cross-model correlations 1.8 times as high as separate SAEs aligned post-hoc, and its latent descriptions transfer across models. After the dictionary is frozen, new models can be efficiently adapted to it, achieving near-dedicated-SAE reconstruction quality while reusing the shared latent descriptions.
