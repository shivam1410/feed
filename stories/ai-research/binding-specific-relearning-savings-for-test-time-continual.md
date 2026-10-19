---
title: "Binding-Specific Relearning Savings for Test-Time Continual Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22381"
authors: ["Zhe Zhou"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.22381v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

When a fact becomes harder to elicit from a language model, has the model lost it, or has it merely become less accessible? Parameter-updating test-time continual learning agents are usually evaluated by current output accuracy; we ask whether that measurement captures how prior experience shapes later updates. We test whether learning a specific factual binding produces a later relearning advantage beyond familiarity with its entity, answer vocabulary, format, or query slot. In Qwen2.5-1.5B, we compare three matched, counterbalanced histories: LEARNED receives the correct binding, CONTROL receives matched exposure without it, and WRONG receives a competing relation-valid answer in the same slot. After an identical rehearsal-free continual fine-tuning stream, LEARNED reacquires the target faster than CONTROL at a prespecified checkpoint of partial forgetting. WRONG shows no positive advantage over CONTROL, while its comparison with LEARNED provides slot-matched corroboration, subject to possible competitor interference. The advantage remains positive after adjustment for measured pre-relearning behavior. In a secondary descriptive conversion using an unpaired never-seen pool, prior learning reduces the optimizer updates required for restoration by about 18%. Current behavioral accuracy can therefore underestimate the lasting effect of previously acquired experience. Code is available at https://github.com/zhezhou1106/relearning-savings
