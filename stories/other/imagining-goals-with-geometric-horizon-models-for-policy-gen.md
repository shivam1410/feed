---
title: "Imagining Goals with Geometric Horizon Models for Policy Generalization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19129"
authors: ["Daniel Lawson, Dhruv Sreenivas, Adriana Hugessen, Khimya Khetarpal, Glen Berseth"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19129v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Training from offline data has allowed for substantial progress in domains such as robotics, leading to general-purpose policies that can be easily applied zero-shot or efficiently finetuned for downstream tasks. However, these policies can still have poor generalization, both due to the choice of modeling objective and from learning from a static dataset. In this work, we focus on the challenging task of zero-shot goal generalization, where a policy is evaluated on unseen tasks that require combining its existing knowledge (compositional generalization). An avenue for improving a policy's generalization is by generating new experience with world models; however, such generation has proven difficult for longer horizons. Thus, to alleviate this issue, we propose TD-Aug, which samples from a geometric horizon model and allows for directly imagining novel outcomes that can be achieved by composing existing knowledge. We demonstrate that training on these future outcomes as goals for goal-conditioned BC policies significantly improves generalization in stitching-based OGBench tasks.
