---
title: "Diffusion models recover accurate mixture weights despite score function insensitivity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15485"
authors: ["Andrew Dennehy, Ramchandran Muthukumar, Rebecca Willett, Nisha Chandramoorthy"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.15485v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15485v1 Announce Type: new Abstract: Score-based generative models exhibit a puzzling behavior: they often appear to cover all modes of a target multimodal distribution and yet may fail to learn the correct relative mode amplitudes, which can be interpreted as mixture weights. We resolve this apparent paradox by relating the diffusion score matching (DSM) loss to the error in estimating mixture weights from generated samples. We show that, even when the target score is insensitive to mixture weights, generated samples can recover the weights accurately if the scores at intermediate noise levels are informative about the weights. Accordingly, we define the diffusion score sensitivity index (DSSI) as the variation in the DSM loss relative to changes in a parameter. We then show that the DSSI governs the accuracy with which the parameter of the target distribution can be estimated from generated samples. For Gaussian mixtures in arbitrary dimensions, we prove that the mixture weight estimation errors are on the same order as the DSM loss under mild conditions. Empirically, we show the emergence of sensitivity during the noising process of benchmark data distributions under typical noise schedules, and that these sensitivity values predict how well a well-trained model recovers mixture weights. Furthermore, we show that the choice of noise schedule can reduce diffusion sensitivity, leading to mode amplification. Although we focus on mixture weights, the proposed sensitivity framework governs the recovery of any qualitative parameter of the target distribution.
