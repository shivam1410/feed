---
title: "Replay in the Silent Degrees of Freedom: Continual Learning Without an Offline Phase"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31630"
authors: ["Zhang Yanhai"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.31630v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Replay-based continual learning almost always consolidates in a dedicated offline phase or by interleaving replayed samples with the input stream, whereas brains also consolidate during wakefulness through local sleep, brief use-dependent off-periods of individual circuits. We ask whether a network trained by local, biologically constrained rules can consolidate with no offline phase at all. An isolation rule confines replay updates to hidden synapses invisible to the current input under k-winner-take-all dynamics, with optimiser state advanced only inside the mask; a refractory rotation rule makes units that have just fired sit out the next competition, widening the consolidable set; a homeostatic pressure and a relative-novelty gate decide when replay bursts fire and when rotation runs. This inverts the usual direction of non-interfering continual learning: the hidden computation on the current input is held invariant (exactly on the proven channels, and for all but 0.3% of waking samples per update elsewhere) while past memories are written into the degrees of freedom the current batch leaves unused. On class-incremental split-MNIST the system reaches 91.6+-0.3% with no offline phase, at or above the best offline-night schedule on two held-out splits, tied with DER++ and above experience replay, ER-ACE, A-GEM and unmasked local replay; in a single pass it leads DER++ (91.8% against 90.1%) while the night falls to 76.9%. The advantage is largest at small buffers and gives way to the backpropagation references at large ones; on split CIFAR-10 the system leads offline rehearsal and experience replay but trails ER-ACE and DER++. Rotation carries most of the gain; isolation adds the invariance guarantee. The mechanism is not tied to the local rule: under the same schedule a backpropagation network with k-WTA hidden layers gains from rotation, and isolation is again free on top of it.
