---
title: "Differentially Private Federated Class-Incremental Learning for EEG Mental State Classification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17944"
authors: ["Baran Can G\\\"ul, Ali G\\\"ul\\\"umser, Nasser Jazdi, Michael Weyrich"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17944v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Federated learning (FL) under differential privacy (DP) is typically evaluated on large client cohorts, where subsampling and cross-client averaging amplify privacy and smooth injected noise. Personal biosignal applications such as wearable EEG instead involve small federations of a handful of subjects, a regime whose interaction with formal client-level DP is largely uncharacterized. We study differentially private federated class-incremental learning in this small-cohort regime, combining a public EEG dataset with a custom four-channel MUSE 2 recording set into a K=5-client federation, and give a masked per-class training protocol that avoids degenerate gradients and missing negative supervision under class-incremental streaming. We propose FedEEG, combining Synaptic-Intelligence consolidation with a lagged adaptive FedProx term, and show it reduces catastrophic forgetting relative to FedAvg, FedProx, and a federated Learning-without-Forgetting baseline; on-device balanced-batch replay reduces mean forgetting by a further 56.7%. A class-scoping diagnosis yields $50.5\%\pm3.6\%$ accuracy with 6 seeds and 2.02 times chance. We also introduce head-scoped client-level DP, which protects the classification head and alone reduces the achievable $\varepsilon$ by 200 times at a matched round budget; combined with fewer communication rounds it reaches $\varepsilon\!\approx\!10.4$ with utility not statistically distinguishable from non-private training.
