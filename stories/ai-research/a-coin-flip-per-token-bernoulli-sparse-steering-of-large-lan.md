---
title: "A Coin Flip Per Token: Bernoulli Sparse Steering of Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05615"
authors: ["Nima Eshraghi, Lovedeep Gondara, Yuqing Huang, Sagarika Suresh, Leizer Teran, Jithin Pradeep, Xiaotong Xu, Fanny Chevalier"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.05615v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05615v1 Announce Type: new Abstract: Activation steering via sparse autoencoders (SAEs) enables behavioral control of large language models without task-specific fine-tuning, but standard methods apply the steering signal at every generated token, incurring constant per-token perturbation that risks degrading fluency. We ask: is dense intervention necessary? We introduce Stochastic Token Steering (STS), which gates each token independently with probability $p$, and Stochastic Block Steering (SBS), which gates a leading window once per sequence; neither requires a reward model or learned gating policy. Across two model families and two behavioral tasks, steering only 50% of the tokens recovers most of the dense-steering effect while preserving fluency, and steering as few as 30% surpasses prompt-based control. The optimal steering magnitude scales inversely with the intervention ratio, revealing that SAE-mediated control is rate-limited: the behavioral outcome depends on cumulative signal dosage across a sequence.
