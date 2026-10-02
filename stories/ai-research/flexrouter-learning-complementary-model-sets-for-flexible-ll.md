---
title: "FlexRouter: Learning Complementary Model Sets for Flexible LLM Routing"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.38585"
authors: ["Wang Wei", "Harry Yang", "Tiankai Yang", "Samyadeep Basu", "Hongjie Chen", "Andy Zhao", "Franck Dernoncourt", "Ryan A. Rossi", "Hoda Eldardiry"]
date: "2026-09-28T20:00:00.000Z"
score: 70
guid: "2609.38585"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.38585.png"
generated: "2026-10-02T21:40:09+05:30"
---

Existing Large Language Model (LLM) routing methods score LLMs independently to select top-k models. However, this ignores model correlations and enforces a rigid computational budget. Consequently, routers often select redundant models that share failure modes, limiting the overall probability of success. To address this, we propose FlexRouter, a routing framework that explicitly models model complementarity. FlexRouter optimizes for answer coverage, maximizing the probability that at least one selected model yields a correct response. This objective aligns with practical inference pipelines where multiple candidate outputs are generated and a downstream verifier or user selects the final one. We formulate routing as a coverage-oriented subset selection problem and model the routing policy using Determinantal Point Processes (DPPs), which naturally capture both model competence and redundancy. To directly optimize coverage without requiring a ground-truth target subset, we introduce a training objective based on marginalizing over failure sets. During inference, we employ a greedy strategy based on marginal log-determinant gains, enabling the router to adaptively determine subset sizes without a predefined budget. Extensive experiments on the large-scale RouterEval benchmark demonstrate that our proposed FlexRouter achieves higher coverage with lower redundancy across both in-domain and out-of-domain tasks than strong baselines while maintaining flexible inference cost.
