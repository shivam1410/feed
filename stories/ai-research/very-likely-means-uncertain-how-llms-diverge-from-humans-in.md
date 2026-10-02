---
title: "\"very likely\" Means \"uncertain\"? How LLMs Diverge from Humans in Linguistic Uncertainty Quantification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00083"
authors: ["Jinhao Duan, Zicheng Liu, Zijie Liu, Kaidi Xu, Tianlong Chen"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2610.00083v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Humans express uncertainty verbally via markers (e.g., "possible," "likely"), yet most LLM uncertainty quantification (UQ) relies on costing likelihood- or consistency-based signals. From a cognitive perspective, accurate verbal uncertainty reflects metacognitive monitoring, representing knowledge boundaries ("knowing that you don't know") to support regulation and information seeking. In this paper, we investigate how LLMs diverge from humans in verbal uncertainty quantification and whether verbal markers can reliably quantify LLM uncertainty. We curate a corpus of human uncertainty markers from psychology and decision-science literature and benchmark LLMs against it. We observe that LLMs encode verbal uncertainty with numerical levels that differ substantially from those of humans. We then introduce METHODNAME, a novel optimization-based algorithm that learns an optimal uncertainty profile over uncertainty markers directly from LLM outputs. By fitting a marker-uncertainty mapping to best explain empirical correctness, METHODNAME discovers how much probability mass each verbal marker should convey, rather than estimating uncertainty via repeated sampling. METHODNAME enables a direct, marker-level comparison of confidence semantics between humans and LLMs, disentangling mismatch and revealing systematic confidence disparities in verbal expressions.
