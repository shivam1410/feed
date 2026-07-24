---
title: "Attribution Markets: A Fisher-Market Formulation for Fractional Credit Assignment Between Planned Tasks and Performed Actions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20694"
authors: ["Salavat Ishbulatov"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2607.20694v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20694v1 Announce Type: new Abstract: Personal and organizational planning systems maintain two records that drift apart: what was planned (a task's effort budget) and what was done (a logged action's duration and description). Existing systems bridge them with an exclusive, all-or-nothing link that strands genuinely related but unlinked effort and reports false stalls on active goals. We formulate the bridge as a quasi-linear Fisher market: planned tasks are budget-constrained buyers, performed actions are divisible goods, and a fused text/structural/temporal signal sets each buyer's valuation. Two market instruments - a seller reserve price and a buyer cash option - yield conservation, a hard budget cap, and a provable junk filter as theorems. We extend the market with a concave completion utility discounting progress as a task nears its plan; standard convergence theory for the market's algorithm does not transfer here, resolved by a satiation-threshold fixed point with existence (Brouwer) and local uniqueness under an explicit diagonal-dominance condition, validated empirically on random and adversarial instances. A de-circularized, multi-seed benchmark - observed affinity corrupted independently of the scored ground truth - surfaces a genuine weak spot: the market's sharp, zero-entropy equilibrium is more sensitive to affinity noise than entropy-regularized optimal transport's permanently smoothed one. We resolve this with a one-parameter entropy-regularized generalization unifying the two, plus a noise-adaptive rule for its regularization strength. We report full reproducibility parameters, discuss limitations candidly, and relate the result to multi-touch attribution, optimal transport, and online Fisher-market algorithms.
