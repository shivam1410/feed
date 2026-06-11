---
title: "When Context Returns: Toward Robust Internalization in On-Policy Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11627"
authors: ["Xun Wang, Ruishuo Chen, Zhuoran Li, Yu Chen, Longbo Huang"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.11627v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11627v1 Announce Type: new Abstract: Recent work has shown that on-policy distillation can internalize privileged context, such as system prompts or task hints, into a student model so that the context is no longer needed at inference time. Although this approach successfully improves the student's no-context performance, we identify an interesting and previously unstudied phenomenon: in many settings, reintroducing the original privileged context to the distilled student actually degrades its performance, even on instances it already solves correctly without context. We term this context-induced degradation and argue that robust internalization demands not only matching the teacher's context-conditioned behavior, but also remaining stable when the context is reintroduced, a property we call context removability. Motivated by this observation, we propose a lightweight consistency regularizer that first anchors the student's no-context output via stop-gradient, then penalizes the context-conditioned output for deviating from it via forward KL divergence. This simple addition requires only one extra forward pass per training step, yet it effectively mitigates context-induced degradation and, in many cases, even improves no-context performance. Across 12 configurations spanning diverse domains and model families, our method improves context-conditioned accuracy in the majority of settings, reduces context-induced harm in 11 out of 12 settings, and effectively eliminates response-length inflation. A mechanistic case study further confirms that context removability is achieved at the representation level, with hidden states remaining nearly identical regardless of whether the context is present.
