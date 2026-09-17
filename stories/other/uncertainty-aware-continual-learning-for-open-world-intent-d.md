---
title: "Uncertainty-Aware Continual Learning for Open-World Intent Discovery Under an evolving Label Space"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17866"
authors: ["Pisante Aida, Formentin Simone"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17866v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17866v1 Announce Type: new Abstract: Real-world intelligent systems increasingly operate under open-world conditions, where user intents are not fixed or exhaustively known a priori and may evolve as new interaction patterns emerge. This paper proposes a unified uncertainty-aware probabilistic framework for continual new intent discovery under an evolving label space. Each utterance is encoded through an adaptive $\beta$-VAE into a latent mean, used for classification and density modelling and a posterior uncertainty estimate acting as a global reliability signal. Classifier confidence, posterior uncertainty and DP-GMM likelihood are combined through a multi-signal decision mechanism to distinguish known intents from potentially novel samples. Candidate novel instances are clustered through a density-based discovery module and only reliable clusters are promoted to new labels, enabling controlled label-space expansion. Replay and Elastic Weight Consolidation mitigate catastrophic forgetting and preserve previously acquired knowledge. The paper formalises continual intent discovery as a structured multi-phase open-world problem, introduces adaptive label-space expansion under stability--plasticity constraints and uses posterior uncertainty to regulate trusted-sample selection, pseudo-labelling, novelty admission and replay. Experiments show high novelty precision, stable adaptation across sequential phases and limited forgetting. Near-zero NMI and ARI indicate limited reconstruction of the complete fine-grained intent taxonomy, consistent with the framework's conservative promotion strategy. Qualitative analyses nevertheless reveal dense and locally coherent semantic clusters, showing that reliable novel structures can be discovered without exhaustive recovery of the underlying taxonomy.
