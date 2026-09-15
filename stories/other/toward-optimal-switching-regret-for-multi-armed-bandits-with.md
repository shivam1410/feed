---
title: "Toward Optimal Switching Regret for Multi-Armed Bandits with Oblivious Adversary"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13547"
authors: ["Mengxiao Zhang"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13547v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13547v1 Announce Type: new Abstract: We study switching regret in adversarial multi-armed bandits, where the learner competes with an arm sequence that changes at most $S$ times. When $S$ is known, an optimal expected regret of $\widetilde{\mathcal{O}}(\sqrt{(S+1)KT})$ is obtainable [Auer et al., 2002]. However, when $S$ is unknown, Marinov and Zimmert [2021] show that this guarantee is impossible under an adaptive adversary. In this paper, we show that a single algorithm achieves $\widetilde{\mathcal{O}}(\sqrt{(S+1)KT})$ expected regret for every $S$ against an oblivious adversary, resolving an open problem of Auer et al. [2019b]. Our algorithm combines a fixed-share learner initialized with a small learning rate and dyadic-interval subroutines that search for local improvements using randomized learning rates and implicit exploration. Importantly, a non-uniform prior favors following the main learner, keeping the cost of maintaining many subroutines small. When the subroutines accumulate sufficient improvement over the main learner, its learning rate doubles, allowing adaptation to the unknown number of comparator switches $S$.
