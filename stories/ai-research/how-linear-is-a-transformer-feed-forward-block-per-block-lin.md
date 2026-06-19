---
title: "How Linear Is a Transformer Feed-Forward Block? Per-Block Linear Recoverability Is Learned, Not Architectural"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19379"
authors: ["Stuart Whipp"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19379v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19379v1 Announce Type: new Abstract: Transformer feed-forward networks (FFNs) are often treated as nonlinear stores of computation, yet how nonlinear a trained FFN block actually is has rarely been measured. We treat each FFN as a position-wise input-to-output map and split it into the exact least-squares linear approximation plus a residual. The held-out variance the closed-form linear map explains defines a block's linear recoverability (R^2_lin), an optimiser-free measure of its linearity. Across all twelve blocks of GPT-2, Pythia-160m, and llama-160m, R^2_lin is highly heterogeneous and non-monotone with depth, ranging from near-linear (>0.99) to strongly nonlinear (<0.3) between adjacent blocks, and is not set by the activation function: same-width GELU models GPT-2 and Pythia-160m have sharply different profiles, so recoverability is a learned property of individual trained blocks, not an architectural one. A low-rank bilinear probe of the residual recovers only a few points of R^2, with gain uncorrelated with residual nonlinearity: the unrecovered computation is not a single position-wise product but higher-order or distributed structure. The measurement also serves as a targeted compression signal: recoverable blocks admit large single-layer replacements (GPT-2's early FFN at 8x fewer parameters for +0.77 perplexity), while low-recoverability blocks flag where this is unsafe. It further exposes a methodological pitfall: trained linear baselines can badly under-converge on ill-conditioned transformer activations, so we report the exact closed-form least-squares ceiling throughout.
