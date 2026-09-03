---
title: "Entangled Representations Amplify Collateral Damage in Unlearning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.02285"
authors: ["Ev\\v{z}en Wybitul, Tim G. J. Rudner, Christian Schroeder de Witt"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.02285v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.02285v1 Announce Type: new Abstract: A long-held intuition in interpretability research is that representational entanglement, the sharing of structure between knowledge domains in a neural network, makes unlearning harder. While the intuition is widespread, it has never been directly tested in a controlled experiment. We present a way to do so: by repurposing Selective Gradient Masking (SGTM), we train a suite of six 254M-parameter language models on English Wikipedia with graded levels of disentanglement between biology and non-biology knowledge. Applying three standard unlearning methods to every model in the suite, we find that more disentangled models consistently achieve better retain-forget trade-offs: at a fixed level of forgetting, the most disentangled models incur roughly $4\times$ lower retain cost under two of the three methods, and $1.3\times$ lower under the third. Because our intervention changes only the model, not the data or the unlearning algorithm, this is direct evidence that representational entanglement is one of the causes of collateral damage in unlearning, as interpretability researchers have long suspected. A similar design could be used to test other structural claims from interpretability.
