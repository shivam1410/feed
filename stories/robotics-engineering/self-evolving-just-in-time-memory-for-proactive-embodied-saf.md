---
title: "Self-Evolving Just-In-Time Memory for Proactive Embodied Safety"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16247"
authors: ["Bingrui Sima, Lizhong Wang, Xiaoya Lu, Kun He, Xiao Yang"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.16247v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16247v1 Announce Type: new Abstract: While Vision-Language Models (VLMs) have empowered embodied agents to execute complex household tasks, they struggle to proactively handle dynamically emerging hazards during closed-loop interactions. Existing safety approaches often rely on runtime guardrails to block unsafe actions or induce excessive caution, which severely stalls task progress instead of actively resolving the underlying risks. To break this safety-progress trade-off, we introduce the Self-Evolving Just-In-Time Memory framework, which reframes embodied safety from progress-stalling guardrails to proactive hazard mitigation. The framework consists of a Risk-Sufficient Topological Belief Graph (RSG) for persistent safety-relevant state tracking under partial observability, an Agency-Grounded Factual Memory for precise hazard anticipation, and an Experience Memory that injects procedural Meta-Skills to guide executable, progress-preserving mitigation. Furthermore, we propose an automated Test-Verify-Write loop, allowing agents to continually refine their mitigation Meta-Skills from execution traces at test time. Experiments on IS-Bench demonstrate that our framework substantially boosts the Safe-Success rate across multiple VLM backbones (e.g., +30.3% on Qwen3-VL-8B), enabling agents to proactively mitigate hazards without stalling task progress. Code is available at https://github.com/DyMessi/JIT-Memory.
