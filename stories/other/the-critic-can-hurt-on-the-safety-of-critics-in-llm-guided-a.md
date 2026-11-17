---
title: "The Critic Can Hurt: On the Safety of Critics in LLM-Guided AutoML Search"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.19037"
authors: ["Gaoyuan Du, Xiaoyang Liu, Rex Zhou, Dengdu Jiang, Rong Fu, Meng Ding, Defu Cao"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.19037v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

LLM critics increasingly steer iterative search in agentic AutoML, prompt optimization, and self-refinement--evaluated for whether they help, but rarely for whether they can hurt. We isolate the critic's marginal effect through a four-arm audit and characterize the loop's tolerance through controlled fault injection. We show a naive 8B critic drives search below the no-critic random-search floor on 7 of 8 tabular datasets, losing up to 0.245 AUC in the worst case; the magnitude varies strongly with dataset, frontier, and budget. When: stronger critics attenuate the loss on the evaluated suite, without establishing a universal capability threshold. Why: controlled fault injection shows that non-directional errors are nearly costless under best-so-far search, whereas directional errors consume finite search opportunities; an idealized effective-sample calculation yields a necessary condition, $q(m-1) > \beta$, not a deployment certificate. How: a simple observable validation gate and a learned detector can reduce realized loss, but neither is guaranteed to preserve the full-budget no-critic baseline. We will release CRITFAULT, to our knowledge the first benchmark for detecting harmful critic feedback in AutoML. A critic is not a free addition: audit before trusting, and gate when capability or verification is insufficient.
