---
title: "Reflection or Re-Generation? Why LLM Revision Fails Where Human Revision Succeeds"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.28908"
authors: ["Yefan Tao, Gerald Friedland, Madhusudhanan Chandrasekaran, Luyang Kong"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2607.28908v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.28908v1 Announce Type: new Abstract: Reflection, the ability to revisit and revise prior reasoning, is central to how humans improve their answers. Large language models (LLMs) are increasingly prompted to "reflect," yet whether this resembles human revision remains unclear. We introduce the Human-LLM Reflection Framework (HRF), a controlled two-pass protocol comparing human and LLM revision under identical conditions across self-, peer-, and cross-agent settings. Using an information-theoretic analysis based on per-iteration cross-entropy reduction, we find two failure modes of LLM reflection. On objective tasks with finite answer spaces, reflection yields near-zero information gain (Delta I approx 0), behaving as neutral re-generation indistinguishable from re-sampling. On subjective tasks, it yields significant negative gain (Delta I < 0), moving predictions away from the target. Human revision, by contrast, yields positive gain in both settings. Cross-agent experiments localize the failure to the revision step, not input quality: LLMs degrade even high-quality human responses. Diagnostic analyses (revision conditioned on first-pass correctness, and oracle-guided revision against a random-reshuffle baseline) show that which sub-step dominates varies by task and by model rather than reducing to a single mechanism: self-error detection is present on objective multiple-choice tasks but weak on subjective ones, and recovery under an oracle error signal exceeds the baseline for some models and falls below it for others. The unifying account is structural: without external information, self-conditioned revision cannot reduce uncertainty about the target, so LLM reflection is better understood as conditioned re-generation than as genuine error-driven revision.
