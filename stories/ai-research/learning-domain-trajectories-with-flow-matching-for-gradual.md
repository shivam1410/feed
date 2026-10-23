---
title: "Learning Domain Trajectories with Flow Matching for Gradual Domain Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30685"
authors: ["Yubo Huang, Yushe Cao, Zixi Wang, Jingzehua Xu, Xin Lai, Xiongyu Hu, Shuai Zhang"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 15
guid: "oai:arXiv.org:2610.30685v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Large distribution shifts remain a primary obstacle for domain generalization and unsupervised adaptation. Although gradual domain adaptation alleviates this difficulty by introducing ordered intermediate domains, most existing approaches still operate in a discrete, step-wise manner, which can accumulate errors and often relies on unstable Min--Max optimization. We propose \textbf{FlowGDA}, a flow-matching framework that models gradual adaptation as \emph{continuous} transport on a statistical manifold in a representation space. FlowGDA learns time-dependent velocity fields that induce smooth domain trajectories, using a simulation-free regression objective rather than adversarial training. To prevent semantic drift, we couple left-to-right transport between consecutive domains with a source-anchored transport and a semantic consistency loss, and we further stabilize learning via a two-stage sequential optimization scheme. Extensive experiments demonstrate that our method outperforms state-of-the-art techniques, validating flow matching as an effective alternative for domain adaptation.
