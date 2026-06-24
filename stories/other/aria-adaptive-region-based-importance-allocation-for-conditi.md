---
title: "ARIA: Adaptive Region-Based Importance Allocation for Conditional Diffusion Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23898"
authors: ["Loay Mualem, Vinh Tong, Samir Darouich, Mathias Niepert"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23898v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23898v1 Announce Type: new Abstract: Distilling conditional diffusion models aims to transfer the behavior of a large teacher to a smaller student while preserving alignment across conditioning inputs. Unlike recognition tasks, knowledge distillation in conditional diffusion often struggles to transfer knowledge beyond the training distribution, since the predicted noise strongly depends on the conditioning signal. As a result, effective distillation requires exploring a large conditioning space. In practical settings, this creates a major bottleneck. Paired image-condition data may be limited, and generating synthetic images for every available condition is often computationally infeasible, while the pool of conditions, such as text prompts, can be extremely large. Recent work addresses this issue by switching conditions during training, exposing the student to a broader conditioning space without changing the distillation objective. Yet this raises a complementary question: once a large conditioning corpus is available, how should the training effort be allocated? In this work, we introduce ARIA, a framework that adaptively allocates training effort across coarse regions of the conditioning space. By maintaining online estimates of teacher-student discrepancy at the region level, ARIA focuses updates where misalignment persists while preserving the original distillation objective. Empirically, ARIA improves over RC across most architectures and settings, with the clearest gains observed in unseen and underrepresented regimes. We also provide a theoretical analysis showing that the proposed tracking mechanism follows the evolving discrepancy during training under bounded variance and drift assumptions.
