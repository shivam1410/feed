---
title: "Verified Detection and Prevention of Concurrency Anomalies in Multi-Agent Large Language Model Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17182"
authors: ["Sajjad Khan"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.17182v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17182v1 Announce Type: new Abstract: Multi-agent LLM systems share state through memory stores, vector indices, and tool registries. We model such sharing as long-running read-generate-write operations under deterministic-generation semantics -- the regime durable-execution engines enforce by deterministic replay -- and formalize four concurrency anomalies in TLA+: stale-generation, phantom-tool, causal-cascade, and tool-effect reordering, structural analogues of classical isolation anomalies, each with a TLC counter-example. The exclusion lattice over these anomalies is trivial; the contribution is the mechanically verified realizability and strict separation of one maximal chain within it, $L_0 \subsetneq \cdots \subsetneq L_4$, to our knowledge the first machine-checked consistency hierarchy for such runtimes. A development of 274 Verus obligations (zero assume, zero admit; trust base: two structural axioms and a mutex correspondence) proves the detectors sound and complete against the specifications and each runtime its avoidance set. Three deployed Rust runtimes realize L0-L1 (pessimistic locking, serializable snapshot isolation, default-SI), each verified against stale-generation and refined to its state machine; L2-L4 are exec-mode-verified with dependency-free prevention twins (A3, A6, A2: 0/1000 versus 1000/1000), and L2 is run live across three model families (A3 prevented in all 120 retracted sessions). We reproduce a silent lost update in ByteDance's deer-flow, formalizing its fix as a verified $L_0 \to L_1$ refinement, and exhibit tool-effect reordering in LangGraph's ToolNode on unmodified output, removed by an L3 commit-order sequencer. The verified detector, refinements, and realizability artifacts are the contribution; the phenomena and lattice are classical.
