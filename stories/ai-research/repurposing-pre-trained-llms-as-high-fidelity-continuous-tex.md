---
title: "Repurposing Pre-trained LLMs as High Fidelity Continuous Text Autoencoders"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27248"
authors: ["Arkanath Pathak, Unnat Jain, Alexander C. Berg"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.27248v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27248v1 Announce Type: new Abstract: Next-token prediction has enabled highly fluent autoregressive language models, but it represents global structure only indirectly through sequential factorization. In contrast, high-fidelity autoencoders have become a standard primitive in image generation, enabling generative models to operate over continuous latent spaces; text lacks a comparably faithful continuous representation. We propose LLMAE, a method for repurposing a pretrained decoder-only language model as a continuous text autoencoder by exposing an intermediate fixed-length latent bottleneck within its internal activations. Instantiated with a parameter-efficient 270M Gemma 3 model, LLMAE uses structured attention masks, LoRA adaptation, and KL regularization to learn an autoencoding interface that leverages the generative prior of the original LLM. We train LLMAE to reconstruct text sequences up to 1024 tokens, significantly improving on this task to achieve near-perfect reconstruction. Furthermore, we demonstrate the downstream utility of this representation by training a latent text diffusion model for detailed image captioning using the learned LLMAE autoencoder. By mapping text into a fixed-length continuous latent space, our approach provides an effective substrate for downstream adaptation while benefiting from the fluency of the original LLM.
