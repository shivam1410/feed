---
title: "Adversarial Learning of Classifier-Free Guidance Schedules"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14038"
authors: ["Ashwini Pokle, Alexandre Galashov, Arnaud Doucet, Mauricio Delbracio, Valentin De Bortoli"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14038v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.14038v1 Announce Type: new Abstract: Modern text-to-image diffusion models rely on classifier-free guidance (CFG) to achieve high image fidelity and text alignment. However, CFG typically applies a static, global scale across all timesteps, samples, and conditions -- a choice that is generally suboptimal and can introduce artifacts, as different states may benefit from different levels of guidance. While time-varying schedules are known to improve quality, designing them by hand is non-trivial and application-dependent. In this paper, we learn the guidance schedule as a function of diffusion time, conditioning and the current noisy sample, in order to better align sampled images with the text prompt. We frame this as a density ratio estimation problem: a discriminator is trained to estimate the time-dependent log-density ratio between the true and guided marginal distributions, while a lightweight generator network predicts the optimal, state-dependent guidance scale. Empirically, our approach outperforms both heuristic CFG schedules and prior methods for learning dynamic guidance on text-to-image generation benchmarks.
