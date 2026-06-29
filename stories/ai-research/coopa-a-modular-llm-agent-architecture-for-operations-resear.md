---
title: "COOPA: A Modular LLM Agent Architecture for Operations Research Problems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27611"
authors: ["Chuanhao Li, Xiaoan Xu, Dirk Bergemann, Ethan X. Fang, Yehua Wei, Zhuoran Yang"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.27611v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27611v1 Announce Type: new Abstract: Operations Research (OR) provides a rigorous framework for high-stakes decision-making, but effective OR modeling requires substantial domain knowledge, mathematical abstraction, and solver expertise. Recent LLM-based systems automate parts of this pipeline, yet remain limited by low accuracy on complex problems, opaque outputs, and narrow solver support. We propose COOPA (COoperative OPerations Agent), a modular LLM-agent architecture for interpretable and scalable OR decision support. It combines three components: iterative confidence-based modeling, which generates multiple candidate formulations, self-evaluates them across modeling dimensions, and selects one using a max-min confidence criterion; element-level provenance and confidence explanations, which link variables, parameters, constraints, and objectives to quoted source text and provide an audit trail for human verification; and multi-solver routing to specialized optimizer agents for different OR problem classes. Across three OR benchmarks, eight LLM backbones, and four baselines under identical conditions, COOPA achieves the best macro-average accuracy on six of eight backbones and improves over the strongest baseline by up to 6.7 percentage points. A within-system ablation isolates the contribution of iterative confidence-based modeling, while additional analyses and case studies illustrate the value of source traceability and multi-solver dispatch.
