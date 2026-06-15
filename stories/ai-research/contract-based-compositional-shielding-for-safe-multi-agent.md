---
title: "Contract-Based Compositional Shielding for Safe Multi-Agent Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14130"
authors: ["Omar Adalat, Edwin Hamel-De le Court, Francesco Belardinelli"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.14130v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14130v1 Announce Type: new Abstract: Safe coordination problems surface in multi-agent reinforcement learning when global safety cannot be enforced by any agent unilaterally: the admissibility of one agent's action may depend on the dynamics of other agents. Decentralised shields can enforce safety at runtime, but purely factorised permissions often exclude optimal team behaviour that is safe only through coordination. We study deterministic safety guarantees for agents trained and deployed under decentralised execution, recovering team-optimal safe behaviour without centralised runtime control. Agents have a shared global specification $\phi$ in the safety fragment of Linear Temporal Logic ($\mathsf{LTL}_{\mathsf{safe}}$ ), and select among tuples of local $\mathsf{LTL}_{\mathsf{safe}}$ obligations whose conjunction implies the global specification $\phi$. Each agent may rely on the other agents' local obligations as assumptions because the whole contract tuple is certified simultaneously and allows projection into local action masks. At learning time, a non-stationary multi-armed bandit chooses among a library of local $\mathsf{LTL}_{\mathsf{safe}}$ obligations to select the tuple that optimises team reward, all without forgoing end-to-end safety. We evaluate the approach across 6 environments and 15 algorithmic variants.
