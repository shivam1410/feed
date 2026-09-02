---
title: "Neural means and kernel corrections for operator learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00389"
authors: ["Yitzchak Shmalo"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.00389v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00389v1 Announce Type: new Abstract: We combine neural network means with exact Mat\'ern kernel regressions of their residuals and of their learned features, and evaluate the pairing on two public emulation problems with published baselines: the structural-mechanics benchmark of de Hoop et al. and the OCO-2 radiative-transfer emulator of Lamminp\"a\"a et al. On structural mechanics the combination reaches 4.55% test error, matching the best published architecture, and 5.38% against a published 6.49% in the low-data regime. On OCO-2 it improves on the published Gaussian-process emulator on that problem's own test points, outright on two of the three spectral bands; the same kernel that trails the network tenfold on the raw state overtakes it on the network's features, and we measure why (the target's squared native-space norm drops about fortyfold at fixed effective dimension) and prove the mechanism. Where the two families tie instead, the residuals of every architecture we train correlate above 0.86 and their shared component is flat in diversity and sample size, which reads the published plateau as a property of the data. Supporting results include a second-moment identity that predicts stacking outcomes from measured correlations, an optimal-recovery certificate, and a distribution-free coverage band, the only uncertainty signal that survives our tests.
