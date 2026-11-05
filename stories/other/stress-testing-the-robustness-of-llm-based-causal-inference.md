---
title: "Stress-Testing the Robustness of LLM-Based Causal Inference"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03656"
authors: ["Ankitkumar Patel, Jigarkumar Patel, Amit Kumar, Supreetha Sreeram, Venkatesh Kulkarni"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03656v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Why do some of the world's most powerful Artificial Intelligence (AI) systems still struggle to reason about cause and effect? Causal discovery, the ability to discern the underlying drivers of a system, is fundamental to scientific inquiry and has traditionally relied on structured data and statistical methods. Recently, Large Language Models (LLMs) have been explored as an alternative paradigm for causal inference, leveraging their broad knowledge and reasoning capabilities. Yet, despite their linguistic fluency, LLMs often rely on surface-level pattern recognition rather than genuine causal logic. While it is known that LLMs stumble in this domain, we lack a precise map of where, why, and how significantly these failures occur. In this paper, we propose a systematic stress-test framework across six critical dimensions: model scale, causal graph complexity, prompting strategy, metadata quality, data quality, and sensitivity to uncertainty. Our findings reveal a significant "optimism bias" in LLMs; models consistently overestimate causal links, leading to low precision across the board. Furthermore, we demonstrate that traditional evaluation metrics can be deceptive: while reasoning-heavy models lead in performance, the highest scores often occur when uncertainty in inference is overlooked. Once uncertainty is integrated into the evaluation, performance drops, providing a more honest reflection of causal reliability. We also find that, while scaling model size improves outcomes, these gains are fragile; performance degrades sharply as the quality of metadata decreases. This work serves as a practical guide to the blind spots of LLMs, offering a clear-eyed assessment of when these tools can be integrated into a causal discovery pipeline and when they are likely to lead researchers astray.
