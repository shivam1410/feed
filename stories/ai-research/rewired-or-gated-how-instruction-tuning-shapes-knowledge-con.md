---
title: "Rewired or Gated? How Instruction Tuning Shapes Knowledge-Conflict Circuits in LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25602"
authors: ["Shubham Santosh Pandere, Gautam Ranka, Ritika Varshney, Navya Deshmukh, Roushni Sareen, Roshan Kumar Singh"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.25602v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25602v1 Announce Type: new Abstract: In language models, the choice between believing the prompt and believing the weights is made by a handful of identifiable attention heads. Instruction tuning changes how models behave under conflict, but whether it rewires the underlying circuit or merely gates/reweights already present components, remains unknown. We provide the first mechanistic base-vs-instruct comparison of conflict-resolution circuits, across three families (Llama-3.2-3B, Qwen-2.5-3B, Gemma-3-4B). Five independent methods, node and edge attribution, superposition role analysis, causal ablation, and path patching, converge on gating, with the same heads, in the same late-layers, are found to be reweighted rather than replaced with a high node overlap (0.60-0.82). Behaviorally, tuning shifts models toward parametric memory, making instruct models reject a terse counterfactual context far more than base ones, the opposite of a naive user-following expectation. Yet this added skepticism is a factor of framing since it disappears when the same false claim is delivered as a coherent, evidential passage. The robustness that instruction tuning buys against terse injection is therefore real but narrow. More broadly, we believe that because the conflict circuit is preserved rather than rebuilt, interpretability and control tools calibrated on base models should transfer directly to their deployed instruct siblings.
