---
title: "Latent-Kernel Discrete Flow Maps for Few-Step Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27529"
authors: ["Mansoor Ahmed, Yue-Tsz Fan, Hemanth Venkateswara, Murray Patterson"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.27529v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27529v1 Announce Type: new Abstract: Discrete diffusion and flow-matching models denoise a sequence over many steps, but to keep each step cheap, they factorize the transition across positions and decide every token independently. This makes few-step generation challenging for text when the target couples two positions, such as a subject and a verb that must agree. An independent update commits to them separately, and many function evaluations are spent repairing the mismatch. Existing few-step methods buy back the lost correlation by distilling or rectifying a slow teacher, and so inherit the teacher's quality ceiling. We ask instead whether a model can express correlated steps natively, and answer with Latent-Kernel Discrete Flow Maps (LKF), a from-scratch flow-map kernel that is a mixture of M factorized components tied by a single shared latent. Conditioned on the latent, each component is cheap, and the mixture is summed over the latent in closed form for small M. We show that a single step places mass on correlated completions with the same sampling time complexity as a factorized model, since one latent is drawn per sequence and reused across the entire denoising trajectory. We also show that the Masked Diffusion Language Model (MDLM) is a special case of our LKF model at M=1. The experiments for unconditional text generation on the One-Billion-Word (LM1B) and WikiText-103 benchmarks show that our LKF model learns strongly heterogeneous components and improves generative perplexity by 2.1x to 3.3x over the likelihood baselines without losing diversity. The gain grows with M, and at M=8, it surpasses distilled and rectified few-step samplers. The source code is available at: https://github.com/mansoor181/lkf.git
