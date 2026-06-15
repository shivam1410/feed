---
title: "The Weight Norm Sets the Grokking Timescale: A Causal Delay Law"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13753"
authors: ["Truong Xuan Khanh, Doan Hoang Viet, Luu Duc Trung, Phan Thanh Duc"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.13753v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13753v1 Announce Type: new Abstract: Grokking is the delayed onset of generalization in neural networks, arising long after they fit the training data. Whether the weight norm causes this delay is disputed: some studies report a critical norm at the transition, others observe grokking with no fixed norm at all. We settle this by intervening on the norm during training rather than only observing it. Under free training with weight decay, networks grok when the weight norm reaches a value Wc that varies little across seeds and learning rates (CV 1 to 2 percent) and grows with the modular base as a power law. When we instead clamp the norm to a fixed multiple rho of Wc and hold it there, the network still groks, but the delay follows T_grok proportional to exp(alpha rho). One exponent, alpha near 7.5, fits this delay across four moduli (R^2 = 0.996). Over the swept ranges the held norm moves the delay by about 19x and the learning rate by only about 2x, and holding the norm above Wc slows grokking rather than preventing it. A final LayerNorm removes the dependence by decoupling weight scale from the network function; without it the exponential law returns. This pinned-norm delay is the exponential counterpart to the logarithmic delay predicted for a freely contracting norm.
