---
title: "Recursive Value Learning for Long-Horizon Offline Goal-Conditioned RL"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.02237"
authors: ["Hyeonseong Jeon, Youngwoon Lee"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.02237v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.02237v1 Announce Type: new Abstract: Scaling offline goal-conditioned reinforcement learning (GCRL) to long-horizon tasks is difficult because (1) long-range value learning depends on shorter-range estimates that may still be inaccurate, and (2) max-based value backups can amplify overestimation through repeated propagation. We propose DCRL (Divide-and-Conquer RL), which recursively decomposes each trajectory segment into a balanced binary tree and trains the values from leaves to root. Each parent is therefore updated only after its children, using an exact factorization of the observed route rather than selecting among noisy alternatives. Since this objective learns values along demonstrated routes that are not necessarily optimal, DCRL jointly propagates values across trajectories to discover shorter routes. Thanks to the balanced binary tree, DCRL reduces worst-case bootstrap depth from linear to logarithmic, and this shorter dependency structure empirically corresponds to much slower error accumulation. Across diverse goal-reaching tasks, DCRL substantially outperforms prior flat offline GCRL methods, and on the five most challenging long-horizon OGBench tasks, it improves the best prior average score from 55 to 64, surpassing all flat and hierarchical baselines.
