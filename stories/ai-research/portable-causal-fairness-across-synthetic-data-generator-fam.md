---
title: "Portable Causal Fairness Across Synthetic Data Generator Families"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03180"
authors: ["Steven Golob, Sikha Pentyala, Martine De Cock"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.03180v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03180v1 Announce Type: new Abstract: When a statistical agency or regulator releases synthetic data in place of sensitive records, it chooses the generator that produces the table, and can shape that generator so unfair pathways are absent. DECAF made this concrete on one non-private GAN: three fairness definitions become three sets of edge cuts on the generator's causal graph. Whether the mechanism belongs to DECAF, or to causal factorisation itself, was untested. We port all three definitions to nine generators from three unrelated families (marginals-based, GAN, and diffusion, each with differentially private variants), across three levels of formal privacy guarantee, over 2,520 matched-pair runs on Adult and COMPAS datasets. The mechanism transfers everywhere, and our new causal diffusion backbone yields the fairest release of any family we tested, at fidelity close to the marginals tier. Applying the cut barely moves fidelity, only costs a downstream classifier about $0.07$ to $0.15$ AUC on average, and adding privacy guarantees don't make the data less fair.
