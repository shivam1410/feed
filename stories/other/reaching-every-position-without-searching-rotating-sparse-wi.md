---
title: "Reaching Every Position Without Searching: Rotating Sparse Wiring on the Hypercube as a Substitute for Attention"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18145"
authors: ["Yoshiaki Takashita"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18145v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18145v1 Announce Type: new Abstract: Attention pays, at every layer and for every input, the cost of searching for whom to connect. We ask how far one can get with wiring that is fixed, sparse, and simply rotated from layer to layer. Treating the $n$ positions of a sequence as the vertices of a $\log_2 n$-dimensional hypercube and connecting each position, at layer $\ell$, to its neighbour along dimension $\ell \bmod \log_2 n$, information from every position reaches every other in $\log_2 n$ layers with $2n$ links per layer instead of $n^2$. On a synthetic task that is unsolvable unless all positions are reached, this rotation matches all-to-all wiring at $1/32$ of the links, while the same sparse pattern held fixed across layers fails; what matters is that every dimension is touched, not the order. On character-level language modelling of a public corpus (the first $12$M characters of enwik8), a hybrid that keeps two attention layers among sixteen sparse ones reaches $0.06$ bits-per-character lower held-out loss than a fully attentive model of the same width at the same step budget (three seeds each, no overlap), with $1/7$ of the links, $42\%$ fewer parameters, and $2.4\times$ less wall-clock time; the purely rotated schedule is level with the hybrid. The same ordering holds on a second corpus of mixed Japanese, English and code, where the gap widens to $0.16$. The usable learning-rate window is four to eight times wider than attention's on both. We also report what did not work - learned coordinates, and a "dynamics" variant whose apparent gains turned out to be an artefact of a saturated kernel - and the measurement discipline (frozen corpus, full-coverage evaluation, seed spread as the bar for ranking) that we found necessary to say anything at all at this scale.
