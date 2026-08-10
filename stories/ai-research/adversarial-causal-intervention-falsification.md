---
title: "Adversarial Causal Intervention Falsification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06427"
authors: ["Mojtaba Eslami"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.06427v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06427v1 Announce Type: new Abstract: Generative models can reproduce an observational distribution while encoding an incorrect causal structure. We study a sequential game in which a structural causal generator proposes observational and interventional distributions, while an adversarial experimentalist selects interventions intended to maximally falsify the generator. The discriminator is therefore not merely a real-versus-synthetic classifier: it is indexed by an intervention and tests whether the generator reproduces the corresponding post-intervention law. We introduce Adversarial Causal Intervention Falsification (ACIF), formulate oracle and implementable versions of the game, and distinguish three objects that are often conflated: observational fit, interventional equivalence over an admissible query class, and point identification of a structural causal model. For finite model and intervention classes, we prove: (i) an exact reduction of the adversarial objective to a worst-intervention integral probability metric; (ii) identification up to interventional equivalence, with point identification under a separating intervention family; (iii) existence of mixed-strategy equilibria; (iv) finite-sample uniform convergence and margin-based model-selection guarantees; and (v) a logarithmic elimination guarantee for a disagreement-driven sequential design under a balanced-separation condition. We also give a complete linear-Gaussian example in which two observationally indistinguishable causal directions are separated by a single well-chosen intervention. The framework clarifies what an adversarial causal discriminator can and cannot certify, and provides a principled bridge between causal generative modeling, active causal discovery, and experimental design.
