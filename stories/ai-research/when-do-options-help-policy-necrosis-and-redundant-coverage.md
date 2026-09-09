---
title: "When Do Options Help? Policy Necrosis and Redundant Coverage in Option-Critic"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05508"
authors: ["Bingyun Liu, Yuheng Jing"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.05508v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05508v1 Announce Type: new Abstract: Option-critic learns options: sub-policies together with a learned rule for when each one hands control back. Its headline result is that performance improves as options are added. We explain that result, with theory and experiment. First, the termination rule option-critic learns by maximising return contributes nothing. When the termination test and the policy that picks options read the same values, the test fires at every step, so the learned rule is identical to always terminating. When that policy explores and the test does not, as in option-critic itself, the rule can block the exploration; there are instances where it suffers $\Omega(T)$ regret while always terminating holds to $O(\log T)$. Forcing termination at every step leaves the option-count curve intact. Second, the policy inside an option barely explores at all, so a state locks onto the first action that looked good and never updates again. We name this policy necrosis, give a state-level test for it, and find three fifths of states necrotic in a typical option. Restoring exploration repairs those states, and one option then solves the task. Third, extra options improve no option; what falls is the chance that all of them fail in the same state, from $59\\%$ to $4\\%$, and performance follows that joint quantity.
