---
title: "RL$^{\\mathrm{RT}}$: On-Device Reinforcement Learning Runtime"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18035"
authors: ["Zexin Li, Xinwei Gao, Arvind Easwaran"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18035v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

On-device reinforcement learning runs a periodic actor and a learner on one embedded GPU shared with other workloads. Because the learner produces the actor's weights, existing designs stall the actor or let its policy drift. We present RL$^{\mathrm{RT}}$, an on-device runtime that makes this coupling a tunable parameter: a refresh bound limits actor releases between refreshes, and a GPU permit with slack-aware admission prioritises the actor and fills spare time with training atop any base scheduler. Under the real refresh cost on two Jetson boards, RL$^{\mathrm{RT}}$ keeps a 16.8 M-parameter policy's deadline misses below 1%, against 85 to 100% without it.
