---
title: "A Vocabulary for Multi-Agent Automated Research Systems"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.22682"
authors: ["Bardiya Akhbari"]
date: "2026-07-12T20:00:00.000Z"
score: 65
guid: "2607.22682"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.22682.png"
generated: "2026-07-29T16:31:06+05:30"
---

We introduce a vocabulary for automated research systems built from one or more agents to make their design choices easier to describe and compare. The vocabulary specifies 1) who the agents are, 2) what operations are available in the system, 3) who may invoke them, 4) how agents communicate, 5) what information is visible within and across runs, 6) how the next action is chosen, 7) how a run begins, and 8) how outputs are evaluated. A trajectory records one run from the input task to the returned artifact. Because agents, operations, and initialization may be stochastic, repeated runs on the same task induce a distribution over trajectories rather than a single behavior.
  Our vocabulary turns structural design questions, such as when agents should communicate, gain or lose a capability, or carry information across runs, into testable choices. It also makes the evaluator a component of the system, since reported gains depend on how closely the proxy score matches true quality. That separation also splits the vague complaint that these systems lack taste into two failures with different solutions. Generative taste is the rate at which a system proposes novel trajectories before any score is observed, and evaluative taste is the gap between the proxy score and the quality it should match. We instantiate the vocabulary on recent autoresearch systems to illustrate that it covers designs that differ widely in structure.
