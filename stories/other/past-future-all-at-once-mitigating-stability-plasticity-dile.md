---
title: "Past, Future, All at Once: Mitigating Stability-Plasticity Dilemma via Post-hoc JANUS Rectification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19985"
authors: ["Zhilong Zheng, Letian Tao, Yang Guan, Yujie Yang, Wei Xiong, Kehua Sheng, Bo Zhang, Jingliang Duan, Keqiang Li, Shengbo Eben Li"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19985v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19985v1 Announce Type: new Abstract: Fine-tuning foundation models on new tasks inevitably suffer from catastrophic forgetting. While existing works attempt to mitigate this on the basis of parameter-efficient fine-tuning methods, they adopted an overly restrictive Subspace Orthogonality condition. In this paper, we introduce a purely post-hoc and tuning-agnostic weight rectification framework that achieves Parameter Space Orthogonality, which is the necessary and sufficient condition for preserving historical performance to the first order. By projecting parameter updates into the JAcobian NUll Space (JANUS), our method significantly recovers compromised historical knowledge without interfering with the underlying fine-tuning process. To overcome the local validity of the Jacobian approximation, we further propose a Multi-step Adaptive Rectification mechanism that utilizes the JANUS shift to dynamically verify the valid trust region and adjust step sizes. Coupled with our proposed ghost projection, ghost orientation comparison, and sequence-level singular value decomposition compression techniques, JANUS also achieves great temporal and spatial efficiency. Experiments demonstrate that JANUS seamlessly integrates with various fine-tuning methods, significantly mitigating the stability-plasticity dilemma by recovering historical knowledge while preserving downstream task adaptation.
