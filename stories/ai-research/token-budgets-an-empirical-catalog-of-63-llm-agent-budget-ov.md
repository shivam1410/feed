---
title: "Token Budgets: An Empirical Catalog of 63 LLM-Agent Budget-Overrun Incidents, with an Affine-Typed Rust Mitigation as a Case Study"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.04056"
authors: ["Sajjad Khan"]
date: "2026-06-01T20:00:00.000Z"
score: 75
guid: "2606.04056"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.04056.png"
generated: "2026-06-05T13:37:27+05:30"
---

LLM-agent budget overruns are a documented production failure class: a single retry loop can spend thousands of dollars before an operator notices, and the in-process integrity properties that would prevent it (no aliasing, no double-spend, no use-after-delegation of a cost-bearing value) are enforced, if at all, by ad-hoc wrappers rather than by the type system. Our central contribution is empirical: a catalog of 63 confirmed production incidents from 21 orchestration frameworks (2023-2026), each backed by a quoted GitHub issue and, where reported, a dollar loss, organized into an eight-cluster failure taxonomy (inter-rater Cohen's kappa = 0.837, N = 113), plus 47 supplementary structural entries. As one mitigation evaluated against this taxonomy, we build token-budgets, an 1,180-line Rust crate (no unsafe) that operationalizes affine ownership so that cloning, double-spending, or using a budget after delegating it are compile errors rather than runtime hazards an operator must remember to avoid. The dollar cap is runtime arithmetic under an estimator assumption; the affine layer makes that arithmetic non-bypassable. On single-agent workloads a 4-line Python counter matches the crate at 0/30 overshoot, so the distinguishing value is non-bypassability under operator error in multi-agent delegation: the delegation-fanout race documented in 11 incidents is rejected by the borrow checker at compile time, while the same pattern under asyncio overshoots 30/30 and three disciplined alternatives overshoot 0/30. Across five runtimes, three providers, and a temperature-stratified live-API test (N = 160), the approach reports zero cap violations and zero false refusals, at operational parity with concurrent work. Static over-reservation is 4-6x (2.11x adaptive). Binary-level cap-soundness on the running binary is left open.
