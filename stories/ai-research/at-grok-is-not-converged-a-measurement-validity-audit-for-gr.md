---
title: "At-Grok Is Not Converged:A Measurement-Validity Audit for Grokking Representation Metrics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06639"
authors: ["Truong Xuan Khanh"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06639v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06639v1 Announce Type: new Abstract: On modular arithmetic, a network's embedding keeps compressing for tens of thousands of steps after it has already generalized. Reading effective rank at the grokking transition overstates the converged value by 3-5x on an MLP, and by 1.3-1.5x on a transformer trained to convergence; on the MLP it also erases which cells compress at all. Compression lags the accuracy transition by an amount on the order of the time-to-grok, at least 10,000 steps, rather than coinciding with it. A one-variable ablation shows what sets the lag size: adding LayerNorm to an otherwise identical transformer moves the fraction of compression done by the grok step from 0.87 to 0.25, and a pre-registered control rules out scale invariance as the mechanism. We package this as an audit that separates onset from compression, flags censoring, excludes boundary cells that never fully generalize, and checks that the reference floor has plateaued, with an adversarial suite that caught a false-confidence bug in our own branch. A secondary, MLP-specific depth law linking norm budget to converged floor fails a generality test on a transformer and flips sign under free weight decay. Code and the toolkit are released.
