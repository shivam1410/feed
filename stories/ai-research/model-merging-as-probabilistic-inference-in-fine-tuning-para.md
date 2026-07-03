---
title: "Model Merging as Probabilistic Inference in Fine-Tuning Parameter Space"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01689"
authors: ["Long Minh Bui, Tuan Anh Le Van, Tung Phi Duc, Phi Le Nguyen, Jana Doppa, Trong Nghia Hoang"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.01689v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01689v1 Announce Type: new Abstract: Model merging aims to combine existing single-task solutions into a multi-task solution without additional data-driven fine-tuning.~Most existing approaches achieve this using geometric properties of local solution spaces. However, such geometric views provide limited guidance for scoring how statistically useful each task-specific update direction is across tasks during merging. To address this, we formulate model merging from a new perspective of probabilistic inference under a product-of-experts (PoE) scenario where each single-task solution defines an energy-based expert model (EBM) over the merged parameters. We show that several existing model merging methods arise as special cases of our framework under energy designs that impose implicit Gaussian assumptions on directional residuals between merged and task-specific models. Empirically, we find that these residuals are often heavy-tailed which exposes a mismatch with the imposed light-tailed Gaussian structures. We address this with a heavy-tailed PoE design based on Cauchy experts, which better captures the observed residual behavior while admitting a provably convergent inference procedure. Experiments across multiple tasks and architectures show significant improvements over state-of-the-arts baselines. Our code is available at https://github.com/MinhLong210/PoE-EBM-Merging.git.
