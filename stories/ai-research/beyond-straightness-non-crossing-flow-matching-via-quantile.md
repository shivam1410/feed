---
title: "Beyond Straightness: Non-Crossing Flow Matching via Quantile AlignTree Coupling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03443"
authors: ["Junyi Lin, Mengyu Li, Jingxuan Hu, Kejun He, Cheng Meng"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.03443v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03443v1 Announce Type: new Abstract: The performance of Flow Matching largely depends on the quality of the coupling between the source and target distributions. However, independent coupling often leads to path crossings and local velocity ambiguity, while OT-based couplings typically incur high construction costs. To address this challenge, we propose Quantile AlignTree Flow Matching (QAT-FM), an efficient structured coupling strategy that constructs a hierarchical coupling between a Gaussian prior and the target data distribution via a quantile-aligned tree structure. QAT-FM constructs the coupling in $\mathcal{O}(Nd\log N)$ time and supports per-pair source sampling with $\mathcal{O}(d)$ complexity, enabling scalable training for large-scale high-dimensional generative tasks. Theoretically, we prove that the QAT coupling satisfies marginal consistency, induces non-crossing linear interpolation paths, and consistently improves path separation at intermediate times compared with independent coupling, thereby alleviating local velocity ambiguity. QAT-FM further extends naturally to conditional generation, enabling structured conditional coupling while preserving global Gaussian alignment. Experiments across diverse benchmark datasets demonstrate that QAT-FM achieves competitive generative performance while substantially reducing coupling construction cost.
