---
title: "Rethinking Data Selection as Distribution Matching on Semantic Manifolds"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08495"
authors: ["Peng Sun, Yi Yang, Mingshuo Chen, Chunxiao Li, Yao Zhu, Huawen Shen, Tianfan Fu"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08495v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Instruction tuning of large language models and large vision language models relies on massive training data, which incurs substantial computational and storage costs. Meanwhile, training data often contains redundancy, noise, and low quality samples. Existing data selection methods mostly rely on diversity, importance, or a combination of both, without explicitly constraining the distributional consistency between the selected subset and the full data in the embedding space. We propose QMAC, a quality aware multiband characteristic function matching method that formulates data selection as a joint optimization problem of distribution matching and quality filtering. QMAC matches the empirical characteristic functions of the selected subset and the full data across multiple frequency scales, capturing both global semantic coverage and local perturbations, while using task related quality scores to filter noisy and low quality samples. We systematically evaluate QMAC on 4 data types, 8 target models, and 44 benchmarks. Experimental results show that QMAC outperforms existing data selection baselines on standard image-text instruction data, substantially surpasses random selection on standard text instruction, image-text reasoning, and text reasoning data, and exceeds full data training in multiple model and budget combinations. The code will be made publicly available upon acceptance of the paper.
