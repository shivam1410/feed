---
title: "Branch-and-Commit for Frozen RL Agents: When and Where to Spend Test-Time Compute"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13003"
authors: ["Sahar Admoni, Assaf Hallak, Yftah Ziser, Ofra Amir"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13003v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Reinforcement learning agents are often deployed with policies that cannot be retrained or modified. In digital environments whose states can be copied and resumed, an operator has another option: sample several continuations from the current state, evaluate them, and continue from the endpoint of the selected branch. We call this procedure branch-and-commit. We study when it improves return, what produces the improvement, and where its computational budget should be spent. Across four environments, two frozen policies, five continuation verifiers, and a model-free selection rule, we find that the benefit of branching depends on dispersion: the difference between the best candidate return and the mean candidate return. Branching provides no benefit in low-dispersion settings, while increasing return by 12.8% in our main Craftax-Medium setting. Most of this gain comes not from selecting better actions, but from selecting among different stochastic realizations of the same action. Several competent verifiers achieve similar episode returns, suggesting that verifier quality is not the main constraint at our operating budget. Instead, computation is better allocated to states where useful dispersion is likely. On held-out seeds, gating branching using predicted dispersion retains 69% of the improvement from uniform branching while using 48% as many branching calls. These results characterize when branch-and-commit is useful and clarify what its gains represent.
