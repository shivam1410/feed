---
title: "Split Federated Unlearning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36465"
authors: ["Jia Chen, Yecheng Lv, Xinrong Hu, Mingdi Huang, Jun Bai"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36465v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Split federated learning (SFL) combines partitioned model execution with federated aggregation to support collaborative learning across distributed Web and edge environments. However, removing learned contributions in SFL is challenging due to cross-partition coupling and historical influence propagation through dual-side aggregation. To the best of our knowledge, we provide the first systematic formulation of Split Federated Unlearning (SFU), encompassing client-wise and class-wise removal, counterfactual retraining, and partition-specific update constraints. We theoretically characterize historical influence propagation and mode-dependent unlearning feasibility, revealing structural limitations of restricted model updates. As an initial solution, we propose SURE, integrating dual-importance estimation, selective parameter perturbation, and importance-guided recovery. Extensive experiments with existing unlearning methods adapted to SFL reveal substantial forgetting-utility trade-offs across model architectures, data distributions, and update modes. SURE achieves competitive agreement with mode-matched retraining at modest additional cost, while further analyses highlight the impact of split position and update constraints on unlearning behavior. These findings establish SFU as a distinct research problem and provide a foundation for unlearning in partitioned federated systems.
