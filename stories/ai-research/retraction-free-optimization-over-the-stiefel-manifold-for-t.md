---
title: "Retraction-Free Optimization over the Stiefel Manifold for the LoRA Fine-Tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25299"
authors: ["Yuan Zhang, Jiang Hu, Zhijian Lai, Lin Lin, Zaiwen Wen"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.25299v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25299v1 Announce Type: new Abstract: Optimization over the Stiefel manifold plays a significant role in various machine learning tasks. Existing methods either use the retraction operators, requiring costly orthonormalization for large-scale matrices, or employ landing methods that rely on careful step size selection and penalty parameter tuning. To address these challenges, we propose a retraction-free and penalty parameter-free algorithm that directly lands on the manifold. By leveraging the strongly-convex-like property of the quadratic penalty function and the proximal smoothness of the Stiefel manifold, we establish global convergence guarantees with the best-known iteration complexities under both constant and diminishing step sizes. Then, we reformulate the low-rank adaptation (LoRA) fine-tuning problem for large language models as a manifold optimization problem, introducing Manifold-LoRA for geometry-accelerated adaptation. This approach employs the proposed landing technique and a carefully designed step size strategy to accelerate the training process. Numerical experiments on benchmark datasets demonstrate the efficiency and strong downstream performance of the proposed method.
