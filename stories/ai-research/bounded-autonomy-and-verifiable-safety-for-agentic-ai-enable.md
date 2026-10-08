---
title: "Bounded Autonomy and Verifiable Safety for Agentic AI Enabled Automation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08815"
authors: ["Srini Ramaswamy, Deveeshree Nayak"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 82
guid: "oai:arXiv.org:2610.08815v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Agentic AI-enabled automation cannot be safely deployed in high-stakes environments on probabilistic reasoning alone. A recurring risk is epistemic drift: as reasoning deepens, system behavior may move away from subject-matter-expert constraints for safe operation. This paper presents BRaVeS, a bounded reasoning and safety-governance framework termed the Defensible Next-Gen Reasoning System (DNRS). BRaVeS encodes SME-defined constraints as invariant anchors, proposes MoDA-Style (Mixture of Depths Attention) depth-aware access as a candidate mechanism for keeping these anchors visible during inference, and uses a state hierarchy (SMARtAutonomy) to reduce autonomy as epistemic risk increases. To formalize bounded recovery, we introduce the Lyapunov-Bounded Consensus Framework (LBCF), which maps continuous epistemic-risk signals into a finite K-bag abstraction and applies shielded state transitions that enforce Lyapunov-style energy descent or route the system to a human-mediated terminal state. The formal convergence result applies to the finite LBCF abstraction under fixed thresholds and feasible-shield assumptions; it does not prove safety of the full continuous neural activation space. We evaluate the framework through a discrete event Monte Carlo simulation using HAI 22.04 industrial-control-system time-series data with synthetic noise and sensor-degradation regimes. Across the tested parameter-grouping strategies and thresholds, the LBCF process achieved finite-step convergence and no safety-guard violations. These results provide simulation-based evidence that bounded governance behavior can be enforced under the stated abstraction, while motivating future work on deployed transformer implementations, live human-in-the-loop validation, and broader adversarial settings.
