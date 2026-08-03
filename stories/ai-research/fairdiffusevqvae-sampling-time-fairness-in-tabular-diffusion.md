---
title: "FairDiffuseVQVAE: Sampling-Time Fairness in Tabular Diffusion via Conditional Refinement of Vector-Quantized Latents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.28945"
authors: ["Nitish Nagesh, Mahdi Bagheri, Amir M. Rahmani"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.28945v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.28945v1 Announce Type: new Abstract: Synthetic tabular data is increasingly used in privacy-preserving data sharing, data augmentation, and to mitigate downstream classifier bias. State-of-the-art tabular diffusion models such as TabDDPM and TabSyn achieve excellent distributional fidelity but offer no mechanism for fairness; conversely, fairness-aware tabular generators (DECAF, FairTGAN, FairTabDDPM) impose explicit fairness penalties at training time, yielding modest fairness gains at substantial cost to either sample quality or downstream utility. We introduce FairDiffuseVQVAE, a two-stage architecture that decouples fidelity from fairness: a vector-quantized autoencoder with a row-level discriminator (Stage~1, no fairness terms) is followed by a DiffuseVAE-style continuous diffusion refiner that conditions on both the Stage-1 reconstruction and the protected attribute via classifier-free guidance (Stage~2). Fairness emerges as a property of the sampling distribution -- uniform sampling of the protected attribute at inference time enforces demographic parity by construction, rather than from competing loss terms. On the Adult, Bank and COMPAS datasets, FairDiffuseVQVAE achieves the highest mean Demographic Parity Ratio ($0.702$, $+47\%$ over FairTabDDPM) and Equalized Odds Ratio ($0.686$, $+100\%$). It also attains the lowest mean pair-wise correlation error ($0.034$) of any published method, while explicitly trading $\sim$$15$ AUC points for these fairness gains.
