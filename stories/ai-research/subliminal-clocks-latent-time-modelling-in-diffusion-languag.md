---
title: "Subliminal Clocks: Latent Time Modelling in Diffusion Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.01774"
authors: ["Maximo Eduardo Rulli", "Thomas Vaitses Fontanari", "Simone Petruzzi", "Federico Alvetreti", "Giorgio Strano", "Donato Crisostomi", "Giorgos Nikolaou", "Tommaso Mencattini", "Andrea Santilli", "Emanuele Rodolà", "Simone Scardapane", "Alessio Devoto"]
date: "2026-07-19T20:00:00.000Z"
score: 70
guid: "2607.01774"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.01774.png"
generated: "2026-07-25T21:42:33+05:30"
---

Diffusion Language Models (DLMs) have recently emerged as a promising alternative to autoregressive models. Unlike standard diffusion-based approaches, DLMs are not explicitly conditioned on a timestep, raising a natural question: do these models internally represent denoising progress, and how is such information used downstream? In this work, we show that DLMs do in fact encode a latent representation related to the diffusion timestep within their residual streams. We find that this signal can be reliably extracted using probes across layers, indicating that denoising progress is decodable from internal activations. We further demonstrate that steering the model along a low-dimensional subspace associated with the inferred timestep allows us to systematically modulate its notion of denoising progress, leading to predictable changes in model confidence and entropy. Finally, we analyse the geometry of the identified representation, showing that it exhibits structured and interpretable properties in activation space, and shedding light on how such a signal is processed by these models.
