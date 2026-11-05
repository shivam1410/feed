---
title: "Separating Common and Unique Directions for Data-Free Model Merging"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04108"
authors: ["Shiting Wang, Yingjie Zou, Ke li"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04108v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Model merging combines multiple fine-tuned models without additional training, and arithmetic methods have emerged as a simple yet effective way to merge models without data. However, existing arithmetic methods treat task vectors in parameter space and apply a single element-wise rule to directions that can differ in mergeability. In a shared directional basis, we find a consistent two-regime structure: a low-dispersion common bulk shared across tasks and a high-dispersion task-dominated tail that carries disproportionate energy. These findings motivate Common--Unique Subspace Decomposition (CUSD), a data-free pre-merging method that separates task vectors into common and unique directional components, merges the common components with downstream arithmetic operator, and retains unique residuals separately. Experiments across $11$ base models, four model families, and four arithmetic-based merging operators show that CUSD improves 42 of 44 model--operator combinations and achieves up to 22.5% improvement over the corresponding baselines. Our code is publicly available at https://github.com/stwang666/CUSD
