---
title: "When RLVR Shrinks the Reasoning Boundary: Diagnosing Pass@k Inversion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20543"
authors: ["Todd Zhou"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.20543v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20543v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR) can improve one-sample accuracy while making a model worse under repeated sampling. We study this pass@k inversion: after training, the policy may solve fewer distinct problems than its base model at large $k$. The failure concentrates on boundary prompts, where the base model contains rare correct trajectories that are recoverable by sampling but too sparse to reliably appear in finite RLVR rollout groups. We argue that a two-mode account explains this as an absence-of-evidence failure: rare correct trajectories may disappear before RLVR samples and reinforces them often enough. The main contribution is this diagnostic and mechanistic framing. Per-Problem Base Anchoring (PBA) is a deliberately simple proof-of-concept: sharpen prompts with sufficient frozen-base correct evidence, and anchor risky prompts to the base distribution. Across three training seeds on Omni-MATH-Test, with MATH500 as a secondary high-coverage validation benchmark, PBA improves both \PassK{1} and high-budget coverage over matched GRPO. A 3000-prompt regime-controlled diagnostic study is consistent across seeds with the expected signature: ordinary GRPO loses base-solvable boundary prompts, while PBA preserves rare verifier-positive trajectories. We use mathematical verifiers as a controlled testbed for verifier-guided optimization; the same pass@k inversion risk applies to ECCV-relevant vision-language agents when repeated visual, spatial, or chart-reasoning attempts are checked by external tools or verifiers. Reasoning post-training should decide not only how strongly to optimize, but which prompts are safe to optimize.
