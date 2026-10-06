---
title: "Clean: Second-order LLM Training at Linear Memory Cost via Nystr\\\"om Sketching"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04204"
authors: ["Beheshteh T. Rakhshan, Sahar Rajabi, Maziar Sargordi Shikai Fang, Guillaume Rabusseau, Sirisha Rambhatla"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.04204v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Training large language models (LLMs) entails a fundamental trade-off: memory-efficient optimizers such as Adam discard cross-parameter curvature, whereas full-curvature methods such as SOAP can accelerate convergence at prohibitive memory costs. We introduce Clean, a memory-efficient and full-curvature optimizer designed to resolve this bottleneck. Clean leverages the randomized Nystrom method to accurately approximate the left and right preconditioners in SOAP, and to reduce the optimizer's memory complexity from quadratic to linear in terms of model dimensions. We subsequently reintegrate the off-subspace components to capture curvature information beyond the low-rank approximation, preserving rich curvature at minimal memory cost. We further propose Q-Clean, a low-precision variant that aggressively compresses optimizer states. Q-Clean reduces optimizer memory consumption by \textbf{over 50\%} compared to Muon when pre-training a LLaMA-1.3B architecture, all while maintaining strong and competitive predictive performance. Notably, Clean operates with a smaller optimizer-state footprint than standard AdamW while reaching AdamW's final performance \textbf{26\% faster} in wall-clock time. Furthermore, our methods uniquely enable the pre-training of a 13B-parameter model on a single 80GB GPU, providing a scalable, efficient, and accessible approach to large-scale model optimization.
