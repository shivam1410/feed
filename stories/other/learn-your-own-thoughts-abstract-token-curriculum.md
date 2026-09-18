---
title: "Learn Your Own Thoughts: Abstract Token Curriculum"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19717"
authors: ["Khashayar Gatmiry, Avrajit Ghosh, Parsa Mirtaheri, Jason D. Lee, Nika Haghtalab, Emmanuel Abbe, Peter Bartlett"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19717v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19717v1 Announce Type: new Abstract: Large Language Models (LLMs) have achieved remarkable reasoning capabilities by utilizing chain-of-thought (CoT) as a scratchpad for intermediate stages of thinking. However, CoT techniques require explicit supervision on thinking tokens, which requires rich, task-specific data. In this work, we propose Abstract Token Curriculum (ATC), a novel curriculum learning framework that elicits effective continuous intermediate representations without direct supervision or manual scratchpad design. ATC gradually increases problem complexity through a sequence of distributions, training the model to develop internal abstract ``thoughts'' in the continuous representation space. This paper provides both theoretical and experimental evidence for the benefits of ATC and its advantages over previous methods for training continuous thoughts. Theoretically, we show that for learning parity functions with single-layer softmax attention using ATC, attention naturally focuses on the CoT tokens in the context that provide the ``easiest path'' to predicting the next token. Experimentally, we show ATC's effectiveness on graph reachability and arithmetic learning tasks.
