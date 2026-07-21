---
title: "More Than Memory: Task-Conditioned Signed FFN Writes in Long-Context Retrieval"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16254"
authors: ["Zhibo Yang"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.16254v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16254v1 Announce Type: new Abstract: FFNs are often treated as parametric memories. In long-context retrieval, however, the sharper question is not only what they store, but whether their native residual writes push the current retrieval state toward or away from the correct answer. We test this by scaling the model's own FFN write one layer at a time, without editing weights or injecting external steering vectors. Across controlled literal and semantic retrieval suites, native FFN response surfaces are signed, layer-specific, and task-conditioned: the final FFN is a suppressor in 7 of 8 model-suite cases, and 60% of layers switch role between retrieval modes (95% CI [50%, 69%]). A local directional derivative along the native write separates the two monotone roles: suppressors have negative derivative in 34/35 cases, and amplifiers have positive derivative in 18/18 cases, so the roles are not reducible to write size. On a safety-filtered LongBench retrieval-QA probe, the same diagnostic predicts attenuation damage with raw R^2=0.796 on Qwen2.5-7B and 0.791 on Qwen3.5-9B; a held-out suppressor-attenuation policy improves retrieval margins over random and norm-matched controls. These results show that native FFN scaling exposes a signed, task-conditioned residual-write structure in retrieval, and that write-gradient alignment is a compact diagnostic for the two monotone roles.
