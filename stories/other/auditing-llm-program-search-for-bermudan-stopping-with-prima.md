---
title: "Auditing LLM Program Search for Bermudan Stopping with Primal--Dual Certificates"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14063"
authors: ["Yuhua Qian"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14063v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

LLM program-search agents are usually judged by the score that drives their search. We study LLM-driven search over Python exercise policies for Bermudan options, an optimal stopping problem where a trusted evaluator owns the simulation and a dual upper bound~$U$. For any policy, $0 \le V^\star - L_\pi \le U - L_\pi$; we report Monte Carlo estimates of both bounds with their sampling error. We audit 24 generation attempts from two pipelines, a six-pair feedback-representation ablation, and a holdout evaluated after selection was frozen. No selected generated program improves on Ridge LSMC consistently or by more than Monte Carlo uncertainty; holdout gap scores lie within $0.002$ of it. On six one-dimensional puts, a high-precision binomial reference places Ridge within Monte Carlo noise of optimal and attributes 99\% of the estimated gap to dual-bound looseness, so this dual audits validity but cannot certify progress at the search's scale. Structured memory showed no benefit over score-only memory in this ablation. Whether search ``worked'' depends on reporting rules: retaining the initial reference, freezing selection before holdout, and counting failures.
