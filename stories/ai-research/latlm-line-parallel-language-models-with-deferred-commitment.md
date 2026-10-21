---
title: "LatLM: Line-Parallel Language Models with Deferred Commitment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23951"
authors: ["Shaorong Zhang, Shiyuan Li, Longxuan Yu, Greg Ver Steeg"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.23951v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Line-parallel language models advance multiple lines concurrently for substantial speedups. However, frameworks like the Line-Coupled Language Model (LCLM) enforce a fixed commitment schedule across lines. Because dependencies vary within text, a fixed schedule cannot hold back a line whose prerequisites remain uncomputed, forcing premature commitments and cascading reasoning errors. To address this limitation, we introduce the Lattice Language Model (LatLM), making commitment schedules an adaptive decoding-time choice. Text occupies a 2D lattice where eligible frontier tokens are scored each round; a policy commits confident candidates while deferring unready ones for extended context. One forward pass supervises entire sampled trajectories via 2D causal masking, while an append-only cache retains exact states. At 482M parameters, we establish two findings. (1) LatLM matches a data- and capacity-matched autoregressive model on held-out text when decoded sequentially, while its adaptive parallel decoder achieves near-autoregressive accuracy on independent-line tasks using 25--41% as many decoding rounds. (2) When cross-line dependencies cause LCLM's fixed schedule to fail, deferred commitment substantially improves accuracy while retaining parallelism where dependencies permit. On mixed dependency chains, LatLM achieves 96.5% accuracy versus LCLM's 78.5%, using fewer than half the decoding rounds of the autoregressive baseline.
