---
title: "The Geometry of Sequential Learning: Lie-Bracket Prediction of Transfer Order"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24993"
authors: ["John Sweeney"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.24993v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24993v1 Announce Type: new Abstract: Sequential learning is order-dependent: from Pile-style next-token domain adaptation to instruction-SFT and DPO, N candidate sources induce N! possible curricula. We show that the local order effect is governed by a computable geometric quantity, the Lie-bracket commutator of gradient update fields, yielding a pairwise score for whether A->B or B->A is better for a target domain. The pairwise bracket primitive also defines a Lie-Bracket Tournament: with a shared theta_0 target-gradient reference, Hessian symmetry gives Borda/row-sum scores from one Hessian-vector product per source, O(N) dot products, and an O(N log N) sort, without materializing the O(N^2) edge matrix. Empirically, the planner reaches 98.1%/98.9% pairwise accuracy at k=1 for instruction-SFT/DPO, remains at 73.1%/72.2% at k=20, and preserves the original pretraining-domain evidence with 82.4-92.0% accuracy across four LLMs and 91.1% on diffusion. At curriculum scale, it recovers the best of all 3! schedules in 87.5% of trials, ranks 85 Stack programming-language source domains for a Python target in the 99th sampled percentile, and reaches the 99.0-99.6th sampled percentile on 56 MMLU subjects, sharply above the reported descending gradient-norm baseline. These results reframe sequential learning as a geometric tournament problem: commutators provide both local pairwise order information and a scalable primitive for many-domain schedules.
