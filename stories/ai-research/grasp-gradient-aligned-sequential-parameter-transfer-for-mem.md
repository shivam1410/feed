---
title: "GRASP: Gradient-Aligned Sequential Parameter Transfer for Memory-Efficient Multi-Source Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14900"
authors: ["Mary Isabelle Wisell, Nicholas Jacobs, Aayush Manandhar, Salimeh Yasaei Sekeh"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.14900v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.14900v1 Announce Type: new Abstract: Multi-source transfer learning faces a fundamental scalability bottleneck: existing approaches require either loading all K source models into memory simultaneously during parameter fusion, requiring O(K) memory, or deploying all models at inference time, making production deployment infeasible. We propose GRASP (Gradient-Aligned Sequential Parameter Transfer), which achieves superior knowledge integration while maintaining O(1) memory consumption through three key innovations: (1) sequential processing that merges one source at a time into an evolving target model, (2) parameter-wise gradient alignment that selectively transfers only parameters whose optimization directions align with the target domain, avoiding negative transfer, and (3) iterative fine-tuning that adapts transferred knowledge before integrating the next source. Extensive experiments across three continual learning benchmarks (Yearbook, CLEAR-10, CLEAR-100) spanning 10 to 108-year temporal distribution shifts and four architectures (1.3M to 25.6M parameters) demonstrate that GRASP achieves 93.5% mean accuracy over all datasets and architectures compared to ensemble method's 71.7% accuracy while requiring only constant memory versus K models for standard multi-source fusion. Critically, GRASP's sequential previously merged models and scales to arbitrarily many sources without memory growth, making it uniquely suitable for resource-constrained deployment and continually evolving source domains.
