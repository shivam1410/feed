---
title: "The Loss Is Not Enough: Sampling Conditions and Inductive Bias in Contrastive Representation Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04280"
authors: ["Justinas Zaliaduonis, Patrick Putzky, Till Richter, Sergios Gatidis"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.04280v1"
image: ""
generated: "2026-06-04T19:29:25+05:30"
---

arXiv:2606.04280v1 Announce Type: new Abstract: Contrastive learning has become a leading paradigm for self-supervised representation learning, yet the conditions under which it recovers meaningful latent geometry remain incompletely understood. We develop a measure-theoretic framework formalizing the diversity condition, a support requirement on positive-pair sampling that is necessary for isometric latent recovery. We show that the standard full-support von Mises-Fisher setting implies the satisfaction of the diversity condition and as a consequence global contrastive loss minimizers recover latent geometry up to orthogonal transformation, while restricted conditionals can make non-orthogonal maps attain strictly lower asymptotic contrastive loss. We introduce a support-corrected Information Noise Contrastive Estimation (InfoNCE) variant as a theoretical fix: this correction makes orthogonal latent space recovery achievable but does not uniquely select it. Experiments on synthetic benchmarks validate the identifiability predictions, and CIFAR-10 experiments are consistent with the qualitative prediction that architectural inductive bias becomes more important when sampling diversity is limited. Together, our results clarify how sampling mechanisms and encoder inductive bias interact in contrastive representation learning.
