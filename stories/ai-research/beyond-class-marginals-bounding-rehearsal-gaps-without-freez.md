---
title: "Beyond Class Marginals: Bounding Rehearsal Gaps without Freezing Class Co-occurrence"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25735"
authors: ["Congren Dai, Nat Roongjirarat, Fei Ye"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.25735v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25735v1 Announce Type: new Abstract: Class-balanced replay controls class frequency but does not determine the interval between successive replay appearances of a class. We study this interval, the rehearsal gap, separately from the class marginal and class co-occurrence, and introduce randomised-pass replay (RPR), which visits each resident class once per shuffled pass. For a fixed set of C resident classes and replay batch size b less than or equal to C, RPR preserves the balanced time-averaged class marginal and bounds every gap by 2*ceil(C/b)-1; a churn-conditional bound applies while the resident set changes. The scheduler uses no future class information and adds no replay examples or forward passes. In a linear-head ER-ACE diagnostic, joint absence from the incoming and replay batches produces a one-sided classifier-bias gradient. Longer absence episodes are associated with larger negative bias displacement, and removing the incoming-loss mask attenuates the scheduling effect. In the primary ER-ACE experiments, RPR improves final average accuracy by 0.72-1.67 percentage points relative to independent class-balanced retrieval under reservoir storage, with positive effects also observed under balanced storage. Pretrained ViTs show positive effects on the tested LT10 streams with small replay batches, while matched larger-batch controls show no material effect. Fixed-cycle and reused-pass controls change more than one temporal statistic, so the experiments do not isolate rehearsal-gap length from all other forms of temporal dependence. The accuracy effects depend on the learner and operating regime.
