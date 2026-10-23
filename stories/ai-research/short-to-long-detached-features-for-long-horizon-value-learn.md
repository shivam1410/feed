---
title: "Short-to-Long: Detached Features for Long-Horizon Value Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30461"
authors: ["Tong Che, Boris Ivanovic, Marco Pavone"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.30461v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Learning useful representations from continually changing value targets remains a challenge in deep reinforcement learning. We study the temporal horizon of this supervision: smaller discounts make these targets less sensitive to distant bootstrap changes, but using them for behavior changes the control objective. We introduce Short-to-Long (S2L), which supplies a long-horizon behavior learner with features trained by smaller-discount source networks. Detached connections prevent the behavior value loss from updating the sources, allowing each source to follow its own value objective while the behavior discount remains unchanged. Across Atari, online continuous control, and offline continuous control, the approach yields aggregate performance gains, improving the paired terminal median on 40 of 57 Atari games. Matched Atari ablations support the roles of feature transfer, smaller source discounts, and gradient isolation. Fixed-trajectory measurements further show reduced drift in source value targets with mixed discounts.
