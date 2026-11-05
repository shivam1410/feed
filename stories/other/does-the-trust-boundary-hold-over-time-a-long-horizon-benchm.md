---
title: "Does the Trust Boundary Hold over Time? A Long-Horizon Benchmark for Receiver-Directed Federated Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03724"
authors: ["Ting Xu, Henry Leung"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03724v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

In receiver-directed federated learning, each site draws a trust boundary. For every source and model component it judges, on its own data, whether the transfer helps (admit), harms (reject) or cannot yet be told (abstain). We ask whether this boundary holds over hundreds of rounds. Our benchmark has a federation of thirteen semi-synthetic sites, an exact oracle for every evaluated transfer, paired seeds, an attack protocol, fourteen methods over 600 rounds and Qwen3-1.7B LoRA sites over 500. The answer depends on which boundary is measured. Across 20 paired CPU seeds, a gate judging against a fixed reference better identified transfers useful relative to the site's starting model. Yet it admitted 29% of transfers harmful to the model the site now has. A gate judging against the current model admitted 2% of harmful transfers on that target in the CPU tier, but missed many transfers useful to the starting model. Two short propositions explain these distinct failures. We also evaluate a held out audit that leaves gate verdicts intact. After training, it decides whether each final model is deployed or the site falls back to local training, and reports admissions that have gone stale. With independent audit data its guarantees hold after any training history. At 600 rounds the audit deployed 65 to 72% of models, none with negative benefit on its target, and kept 98% of the gain. No stale report had the wrong sign in our runs. With 20,000 audit observations, a variance-adaptive bound found 99% of stale transfers that cost at least 0.01 in log loss. A common-target Qwen3 comparison on 60 selected transfers shows the same tension over 100 rounds. With 38% adversarial sites, FedFomo and CS-Gate were the only evaluated methods with positive mean gain in every honest group.
