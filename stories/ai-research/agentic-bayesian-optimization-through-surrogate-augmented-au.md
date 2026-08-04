---
title: "Agentic Bayesian Optimization through Surrogate-Augmented Autoresearch"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00316"
authors: ["Paul Brunzema, Louis Tiao, Nhat Le, Kevin De Angeli, Yao Xuan, Djordje Gligorijevic"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.00316v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00316v1 Announce Type: new Abstract: Bayesian optimization (BO) has become the standard tool for sample-efficient optimization and owes its efficiency to uncertainty-aware search driven by generic statistical priors. Richer domain priors can improve BO in principle, but encoding them through tailored kernels or problem structure is difficult and rarely done in practice. LLMs can help sidestep this difficulty by making informal priors from natural language, code, and documentation directly available to the optimizer. However, existing LLM-based BO methods either insert the LLM into a fixed role (surrogate, acquisition proxy, or configuration interface) or hand it broad control, sacrificing the systematic exploration that makes BO reliable. We introduce agentic Bayesian optimization: a paradigm in which an LLM agent is the central decision maker in the BO loop while a Bayesian backend provides the uncertainty-aware optimization substrate. The agent configures the problem, queries the backend, selects and commits evaluations, and can revise the optimization strategy during the run by tightening bounds, switching acquisition functions, proposing targeted evaluations, or even reframing the problem following new instructions or observed evidence. We instantiate this idea in Sara, a surrogate-augmented autoresearch agent, and lenz, a modular BoTorch-based backend that the agent can inspect and modify through a structured interface. Across synthetic and real-world benchmarks, Sara preserves the reliability of state-of-the-art BO without prior knowledge, outperforms LLM-based baselines, and uses natural-language priors to improve beyond standard BO. We further demonstrate the practical value of agentic BO in dynamic settings, where Sara reconfigures the full optimization problem on the fly as requirements change, a capability not previously available in standard BO.
