---
title: "Simple Extensions of Single-Objective Acquisition Functions and Hedge Strategies for Multi-Objective Bayesian Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31940"
authors: ["Haris Moazam Sheikh"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.31940v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Multi-objective Bayesian optimization (MOBO) is commonly approached through specialized acquisition functions or scalarization schemes designed to explicitly account for trade-offs among non-preferential objectives. In this work, we show that such complexity might be unnecessary. We propose a framework that extends standard single-objective acquisition functions directly to the multi-objective setting through a hypervolume-based transformation. We further extend hedge strategies for acquisition functions, which are typically used only in single-objective optimization, to the multi-objective regime. Our approach requires minimal modification to existing Bayesian optimization pipelines and avoids the need for bespoke multi-objective formulations. We demonstrate how a broad class of commonly used single-objective acquisition functions and hedge strategies can be adapted in a principled manner to handle multiple objectives, while preserving their intuitive interpretation and computational efficiency. Empirically, we evaluate the proposed methods across a range of synthetic and real-world multi-objective benchmarks. Despite their simplicity, our extensions consistently match or outperform more complex state-of-the-art MOBO methods in terms of optimization performance and sample efficiency. These results suggest that effective multi-objective Bayesian optimization can be achieved by reusing and carefully extending well-established single-objective acquisition strategies, offering a simpler and more flexible alternative to existing approaches.
