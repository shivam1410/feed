---
title: "Rethinking Transfer in Continual Learning: A Replay-Based Realisation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15587"
authors: ["Yang Meng, Zhenya Liu, Zhuokai Zhao, Yuxin Chen"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.15587v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15587v1 Announce Type: new Abstract: Continual learning studies how deployed language models can continually acquire new tasks without expensive retraining from scratch. Existing methods, whether rehearsal-based (replaying stored past data) or rehearsal-free (regularising or isolating parameters), overwhelmingly target one objective: preventing catastrophic forgetting. Forward transfer, the past helping the future, has meanwhile been pursued almost exclusively through parameter reuse, with no explicit account of when transfer should be expected at all. We begin one step earlier: before designing a transfer mechanism, we ask when transfer should exist at all. We answer with a framework of three measurable conditions: the target task must leave room for improvement beyond its own limited supervision, transferable information must survive continued optimisation, and replay must come from compatible previous tasks. We instantiate this view as Transfer-Selective Replay (TSR), which selects replay data predicted to benefit the incoming task rather than replaying past examples indiscriminately. Selection is guided by a zero-training task signature, while distillation preserves stability on previous tasks. Under the standard continual learning protocol in the low-budget regime, TSR consistently improves forward transfer while maintaining stability, outperforming existing replay baselines across heterogeneous and homogeneous task streams. More broadly, the results argue for treating transfer as a first-class objective of continual learning, to be understood before it is engineered.
