---
title: "Attention Manifolds: Steering or Blocking Language Models by Editing Learned B-Spline Surfaces"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00257"
authors: ["Naveen Mysore"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2610.00257v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

In standard transformer attention, a source token sends the same value vector to every receiver. The query determines \emph{how much} to attend but not \emph{what} to extract. This work introduces \textbf{attention manifolds}: learned 2D B-spline surfaces $S_d(q_d, k_d)$ that modulate each value dimension based on the query-key interaction. Each surface is a tensor-product cubic B-spline initialized to zero, preserving pretrained behavior. Applied to LLaMA 3.2-1B-Instruct and 3B-Instruct, attention manifolds reduce WikiText-2 validation perplexity by 2--2.5 points with 0.3\% parameter overhead. Across 112 diverse prompts, surfaces change greedy-decoded output for 69\% (1B) to 83\% (3B) of cases, with the strongest effects on ambiguous and polysemous inputs (94--100\% change rate). The surfaces improve output quality: correcting factual errors (\emph{``the CAP theorem has three main components''} $\to$ \emph{``it is impossible to guarantee all three''}), increasing precision (\emph{``impossible to know certain properties''} $\to$ \emph{``impossible to know both position and momentum''}), and adding specificity (a generic quote $\to$ an attributed Saint Augustine citation, consistently at both scales). The learned surfaces are also mechanically editable: inverting a layer's coefficients changes greedy output for 9/10 prompts (KL~0.010), providing a geometric mechanism for model steering. Setting surface coefficients to $-1$ creates ``attention walls'' that block value flow through specific dimensions. In a preliminary experiment, a layer-wide wall redirects an explosive-device prompt from specific instructions to general educational content, suggesting a path toward safety-oriented manifold shaping.
