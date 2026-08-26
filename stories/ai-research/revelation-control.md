---
title: "Revelation Control"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.23860"
authors: ["Qinyou Wang"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.23860v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.23860v1 Announce Type: new Abstract: Revelation Control is the problem of choosing priced interventions that reveal hidden state only insofar as the revealed distinctions can change a consequential decision, while accounting separately for any useful progress created by the intervention itself. We develop this theory for learning systems, where states equivalent under declared current information can respond differently to future training and favor different actions. The framework defines decision-sufficient revelation and revelation depth, separates pure information value from productive reuse, embeds static Bayes refinement into state-dependent continuation value, and gives an exact cost-adjusted factorization criterion: an additional shallow coordinate is decision-nonredundant only when states sharing a scalar summary lie on opposite sides of the priced Stop/Continue boundary. We also give a target-independent protocol for model-specific instantiation and prove that bounded stop-flip risk alone cannot certify positive expected utility under unrestricted severity. Across Qwen2.5-7B and Mistral-7B-v0.3, deeper future-learning probes have positive decision value and productive reuse yields strict equal-compute utility advantages. Qwen additionally provides evidence for a decision-nonredundant shallow revealability regime; in Mistral, a scalar continuation architecture fit only on an independent development panel retains positive familywise-adjusted lower bounds on a disjoint target panel, consistent with scalar decision sufficiency within the tested architecture family and resolution. The evidence supports structural rather than numerical transfer: the decision theory, cost accounting, continuation logic, and evaluation protocol transport, while empirical proxies, coefficients, thresholds, and even the required shallow state dimension may be system-specific.
