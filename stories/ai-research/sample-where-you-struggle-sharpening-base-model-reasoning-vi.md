---
title: "Sample Where You Struggle: Sharpening Base Model Reasoning via Entropy-Guided Power Sampling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09926"
authors: ["Hong Guo, Nianhui Guo, Christoph Meinel, Haojin Yang"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.09926v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09926v1 Announce Type: new Abstract: Sampling from the sequence-level power distribution $p^\alpha$ elicits RL-level reasoning from base language models without any parameter updates, but the standard Metropolis--Hastings (MH), a Markov Chain Monte Carlo (MCMC) sampler, is both expensive and slow-mixing. We trace both to a structural mismatch: $p^\alpha$ mainly departs from $p$ at a sparse, spatially clustered set of high-entropy decision points, yet MH proposes resampling positions uniformly along the prefix -- wasting compute on near-degenerate conditionals while under-mixing precisely where modes diverge. We propose Entropy-Guided Power Sampling (EGPS), a training-free and verifier-free sampler that re-derives its proposal from token-level entropy already in the forward pass. EGPS skips deterministic blocks, localizes each MCMC move to a high-entropy neighborhood, and applies Multiple-Try Metropolis at decision points -- making sampling cost scale with \emph{entropy mass rather than sequence length}. On Qwen2.5-Math-7B, EGPS reaches best or tied-best accuracy on all three benchmarks (MATH500 $75.8\%$, HumanEval $62.2\%$, GPQA $42.4\%$) at up to a $12.6\times$ wall-clock speedup over the MH baseline.
