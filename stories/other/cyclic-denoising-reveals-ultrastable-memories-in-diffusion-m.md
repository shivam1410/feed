---
title: "Cyclic Denoising Reveals Ultrastable Memories in Diffusion Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24000"
authors: ["Rishabh Sharma, Stefano Martiniani"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24000v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24000v1 Announce Type: new Abstract: We introduce cyclic denoising -- repeated forward and reverse diffusion at controlled noise amplitudes -- as an extraction attack for image diffusion models. Inspired by random organization in disordered solids, cyclic denoising exposes regions of the learned distribution that are largely inaccessible to standard sampling. The dynamics drive samples toward attractors with a broad stability spectrum. The deepest attractors are ultrastable: they regenerate after near-total corruption and persist through thousands of noising-denoising cycles. Many of these attractors correspond to memorized training images, including stock photographs, brand watermarks, and web-crawl artifacts. The attack requires only sampler-level control, with no gradients, weight inspection, prompts, captions, or prior knowledge of the training data. Unlike generate-and-filter attacks, which rely on large-scale prompted generation and post-hoc similarity or membership-inference filtering, our main protocol is fully unconditioned. We demonstrate the phenomenon in Stable Diffusion v1.4 and in a pixel-space DDPM, showing consistent behavior across latent- and pixel-space diffusion models. Across noise amplitudes, we observe a yielding-like transition: low-amplitude cycling produces trivial absorbing fixed points or limit cycles, while larger amplitudes induce rearrangements, basin hopping, and long-lived trapping in structured memorized attractor basins. We also observe hierarchical partial absorption, prompt-stabilized basins, and cross-initial-condition universality of the recovered attractor set. Our results therefore show that cyclic denoising is both a physics-inspired probe of generative landscapes and a practical tool for memorization auditing, with implications for privacy, copyright compliance, and model fingerprinting.
