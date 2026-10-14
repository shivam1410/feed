---
title: "ExeWorldBench: Benchmarking Code-Based Executable 3D World Modeling"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.15166"
authors: ["Xinge Peng", "Zhen Fang", "Ruibing Wang", "Yongxuan Lv", "Haodong Li", "Guohui Zhang", "Xiaoxiao Ma", "Yiting Lu", "Lin Chen", "Zehui Che", "Feng Zhao"]
date: "2026-10-09T20:00:00.000Z"
score: ""
guid: "2610.15166"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.15166.png"
generated: "2026-10-14T19:00:21+05:30"
---

Coding agents are increasingly evolving beyond reproducing what a world looks like toward constructing executable worlds that capture how a world works. This shift calls for executable world modeling, which integrates two core capabilities: world understanding, reasoning about the underlying structural, mechanical, and causal principles of a world, and executable realization, translating that understanding into a code-based system whose behavior emerges from physical interactions. However, existing benchmarks provide only fragmented evaluations centered on physical reasoning, visual fidelity, or behavioral correctness, leaving the integration of these capabilities insufficiently assessed. To bridge this gap, we introduce ExeWorldBench, to our knowledge the first benchmark to comprehensively evaluate world understanding and executable realization through code-based 3D world construction. ExeWorldBench comprises three progressively challenging tasks: Mechanism Executability, which evaluates the realization of individual mechanisms from visual observations; Compositional Executability, which extends to multi-stage systems with spatial, mechanical, and causal dependencies; and Intent-Driven Executable World Synthesis, which requires constructing executable worlds from high-level goals and physical requirements. Extensive experiments on frontier models reveal substantial limitations in executable world modeling, offering insights into the development of more physically grounded and causally coherent world construction systems.
