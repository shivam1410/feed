---
title: "ORION: Exact Canonical-State Supervision for Systematic Generalization in Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27087"
authors: ["Sibi Gokul, Jyoti Prakash Meher"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.27087v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Autoregressive Transformers generally fail on out-of-distribution reasoning due to two primary reasons: positional corruption over long sequences and structural state drift across deep execution steps. We introduce ORION, a framework that supervises exact canonical execution states via auxiliary heads to anchor latent trajectories to valid computational manifolds. Across Folding, GridShift, and CLRS-30, a pre-registered 2 x 2 factorial shows that RoPE and ORION address orthogonal axes. RoPE recovers length extrapolation (59.8%), while ORION recovers depth extrapolation (66.7%). Moreover, their combination complementarily achieves strict additive gain in joint length-depth extrapolation, while either method alone offers near satisfactory results. Negative controls confirm that the gain depends strictly on exact canonical alignment; hashed state statistics fail to constrain depth extrapolation.
