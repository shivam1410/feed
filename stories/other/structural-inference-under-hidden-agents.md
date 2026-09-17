---
title: "Structural Inference under Hidden Agents"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18045"
authors: ["Zhongben Gong, Xiaoqun Wu, Mingyang Zhou, Hui Huang"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18045v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18045v1 Announce Type: new Abstract: Recovering latent interaction structures from multi-agent dynamics is important for understanding and predicting interacting systems. Trajectory-based structural inference has achieved promising performance, but conventional formulations assume that the trajectories of all modeled agents are available. In practice, agents may become unobserved at deployment because of limited sensing, occlusion, or communication failure. Existing studies have considered unseen-node estimation, structural inference under partial observations, and missing-value imputation, yet the joint recovery of hidden-agent trajectories and their interactions remains underexplored. We formulate this problem as structural inference under hidden agents. Its key difficulty is a circular dependency: recovering interactions involving a hidden agent requires an estimate of its trajectory, while trajectory reconstruction can itself benefit from structural information. To address this challenge, we propose Structural Inference under Hidden Agents (SIHA), which combines structure-agnostic initialization with structure-guided iterative refinement. SIHA reconstructs hidden trajectories from visible observations, infers interactions using Neural Relational Inference, and feeds the estimated structure back into hidden-state reconstruction through multi-strength structural attention and iterative state--structure updates. Experiments on three benchmark dynamical systems demonstrate consistent improvements in visible-to-visible structural inference, while also showing benefits in hidden-state reconstruction and future prediction. Motion-capture experiments with simulated whole-limb occlusion further demonstrate its effectiveness in realistic hidden-agent settings.
