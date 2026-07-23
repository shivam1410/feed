---
title: "Agentic Calibration of Grey-Box Simulation Models: An LLM-Driven Alternative"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18308"
authors: ["David G\\'omez-Guill\\'en, Mireia Diaz, Josep Lluis Arcos, Jes\\'us Cerquides"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18308v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18308v1 Announce Type: new Abstract: Calibration of grey-box simulation models is a constrained optimization problem in which model evaluations are expensive, the parameter space can be high-dimensional, and the search must respect plausibility constraints. Although the simulation code is fully available to the analyst, the joint effect of multiple parameters remains difficult to predict analytically. Classical optimizers such as Nelder--Mead (NM) are simple to deploy but sample-inefficient, particularly under constraints. Modern Bayesian Optimization methods achieve competitive solutions with far fewer evaluations but require non-trivial modeling machinery for constraint handling. We introduce an agentic calibration method in which a large language model acts as the optimizer, with constraints incorporated as a plain-language section of the system prompt. We evaluate the agentic method, NM, and Bayesian Optimization (BO) on an anal cancer simulation model under both unconstrained and clinically constrained calibration. Under unconstrained calibration, the agentic method achieves substantially lower best error than BO and NM, while requiring fewer model evaluations. Under constrained calibration, the agentic method reaches comparable error levels and both outperform NM. These results are obtained at the cost of increased inference time per iteration. Agentic calibration achieves competitive performance with substantially fewer model evaluations, and constraint handling is essentially free at the modeller-facing interface through simple textual specifications rather than additional modelling machinery. The main trade-off lies in increased per-iteration inference cost, making the approach particularly suitable when simulation time dominates. Beyond performance, the per-iteration rationale makes the search auditable and explainable, so its decisions can be scrutinised and justified to third parties.
