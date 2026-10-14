---
title: "Splicing Hints into Reasoning Traces: Learning from Demonstrator Failures"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.13996"
authors: ["Hamed Mahdavi (Pennsylvania State University), Pouria Mahdavinia (Pennsylvania State University), Majid Farhadi (Google), Vasant Honavar (Pennsylvania State University)"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.13996v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Reinforcement learning with verifiable rewards improves mathematical reasoning when a final answer can be checked, but a correct answer does not certify the derivation behind it, and proof problems offer no answer to check. Replacing the check with a reasoning model as an in-loop verifier faces a fundamental obstacle: the policy must already produce occasional correct attempts for any reward to exist, which it may never do at olympiad level. We instead move verification and repair out of the training loop and into offline data generation with SPLICE, a workflow in which a second model, given only a reference solution, edits a reasoning model's traces as they are generated: it verifies progress, truncates a failed trace at its last verified step, and splices in an adaptively strengthened hint until progress resumes. The resulting dataset includes repaired examples whose sampled unaided trajectory failed, with failed continuations removed and progress repeatedly checked against the reference solution. A model finetuned on SPLICE traces outperforms the same model distilled from the reasoning model's unedited traces on AIME and, under a grading protocol validated against human grades, on olympiad proofs. The trained model's own traces show a corresponding behavioral signature: at difficult points it announces a branch in the style of the spliced hints and takes riskier steps, with predictive entropy rising there and just after, a pattern absent from the model trained on unedited traces.
