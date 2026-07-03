---
title: "On the Utility and Factual Reliability of Pruned Mixture-of-Experts Models in the Biomedical Domain"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01444"
authors: ["Atsuki Yamaguchi, Szymon Palucha, L\\'eo Bijar, Aline Villavicencio, Nikolaos Aletras"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.01444v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01444v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) models offer inference speedups via selective activation but impose substantial memory requirements because the whole network must remain loaded. Structured expert pruning is a practical approach for reducing deployment costs in resource-constrained settings. However, prior studies primarily evaluate benchmark utility, leaving the effect of pruning on factual reliability underexplored, particularly in high-stakes domains such as biomedicine. In this paper, we investigate how domain-specific expert pruning affects both utility and reliability. We assess four MoE models, six pruning methods, and multiple pruning ratios across generation and classification tasks under in-domain (biomedical) and cross-domain settings. Results reveal that moderate pruning preserves in-domain utility without immediate reliability decline, although hallucination risks increase at extreme pruning ratios. When shifting to the general domain, both utility and reliability degrade rapidly. These findings indicate that safe compression depends heavily on the task and domain. Evaluating pruned MoE models solely on utility is inadequate for high-stakes deployment without reliability assessment.
