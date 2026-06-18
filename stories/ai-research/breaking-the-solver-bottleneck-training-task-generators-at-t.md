---
title: "Breaking the Solver Bottleneck: Training Task Generators at the Learnable Frontier"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18284"
authors: ["Lorenz Wolf, Connor Watts, Roger Creus Castanyer, Geoffrey Bradway, Maxwill Lin, Augustine N. Mavor-Parker, Matthew Daborn-Sargent"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.18284v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18284v1 Announce Type: new Abstract: The limiting resource for training agents via reinforcement learning (RL) is increasingly frontier task supply: valid, solvable tasks just difficult enough to train the current model. As reasoning and agentic models improve, fixed task distributions saturate, while naive synthetic generation yields tasks that are trivial, impossible, or ill-posed. Training a task generator with RL to optimize validity and learnability can address this bottleneck, but direct optimization requires repeated solver rollouts per candidate. For software-engineering (SWE) tasks, a single rollout can take tens of minutes; solver-in-the-loop generator training is intractable. We introduce PROPEL, a solver-amortized framework for training task generators at the targeted solve rate. PROPEL trains a lightweight activation probe on a one-time labeled corpus of generated tasks and solver outcomes. The probe predicts target-solver pass rate from a frozen generator reference model and serves as a proxy for solve rate during generator optimization, reducing generator evaluation to a single forward pass. Across math, code, and software-engineering at multiple model scales, PROPEL shifts generation toward the targeted solve rate: for coding, tasks generated at the learnable frontier increase from $10.1\% \rightarrow 20.0\%$ for a Qwen2.5-3B-Instruct solver and from $5.3\% \rightarrow 12.6\%$ for a Qwen2.5-7B-Instruct solver. For SWE, PROPEL increases the share of generations at the targeted solve rate from $9.8\% \rightarrow 19.6\%$ for Qwen3.5-27B on repositories not seen during training of probe and generator.
