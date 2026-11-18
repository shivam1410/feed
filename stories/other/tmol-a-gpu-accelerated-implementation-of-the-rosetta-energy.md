---
title: "tmol: a GPU-accelerated implementation of the Rosetta energy function for machine learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21857"
authors: ["Andrew Leaver-Fay, Kieran Didi, Jeff Flatten, Alex Ford, Guangfeng Zhou, Nathaniel Corley, Hahnbeom Park, Maxwell W. Kazman, Rafael I. Brent, Joseph Kleinhenz, Henry Solberg, Andrew M. Watkins, Brian Kuhlman, David Baker, Frank DiMaio"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21857v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Physics-inspired forcefields complement generative machine learning models, showing better generalization beyond the training distribution. However, these forcefields are typically slow to evaluate, and their derivatives are difficult to integrate into ML frameworks. We introduce tmol, a GPU-native PyTorch library implementing the state-of-the-art RosettaGenFF forcefield. tmol supports efficient batched differentiable scoring and whole-structure refinement with up to 362-fold throughput increase (batched). Used as a reward in generative protein design, tmol increases hydrogen bonds and water bridges at designed interfaces.
