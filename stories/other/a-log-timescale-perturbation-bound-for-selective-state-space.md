---
title: "A Log-Timescale Perturbation Bound for Selective State Space Models at Every Sequence Length"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21952"
authors: ["Jack Humphries, Daniel Midgley"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21952v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Mamba models deployed on streaming data, such as limit order book updates, run far past the sequence lengths they were trained on. A guarantee on how much a small change of input can move the hidden state therefore has to hold at every length. The closest existing bound we know of measures the change of the timescale additively, and it grows linearly with the sequence length unless the timescale is bounded away from zero. In this paper, we measure the change on a log scale instead. The key observation is that the decay factor of each step then moves by at most a fixed fraction of that step's input weight, so the per-step errors cannot pile up. Using this, we prove that two runs of a selective-scan cell from a common start stay within a bound that holds at every length, shrinks to zero with the size of the change and needs no lower bound on the timescale. We give a construction showing that, for small changes, this bound is within a factor of about 2 of the best possible, and we extend it to the update used in Mamba's released code when the timescale is bounded above. We then evaluate block-level bounds built from the theorem on two small models trained on one day of order book data. With a bounded timescale, a bound built on the existing analysis is tighter than ours for at most the first 8 steps. With Mamba's softplus timescale, whose certified lower bound is as small as $10^{-21}$, it is looser at every length. Our bounds hold for every input to a block, but they remain more than five orders of magnitude above the changes that gradient attacks find.
