---
title: "TokenRouter: Efficient Serving System for Token-Level LLM Routing"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.12242"
authors: ["Tianyu Fu", "Tengxuan Liu", "Ruoxi Wang", "Yixin Dong", "Yi Ge", "Yichen You", "Yu Wang"]
date: "2026-10-07T20:00:00.000Z"
score: 62
guid: "2610.12242"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.12242.png"
generated: "2026-10-10T00:52:03+05:30"
---

Large language model (LLM) routing distributes inference work across different models, advancing the cost-quality Pareto frontier of LLM serving. While coarse-grained routing at the session or query level has been widely adopted in production systems, recent algorithmic work shows that fine-grained token-level routing can yield substantial efficiency and quality gains. However, efficiently serving token-level routed inference poses significant challenges to existing systems. Built on single-LLM assumptions, current systems suffer from severe step desynchronization and frequent batch admission delays under token-level routing, and they also impose high implementation complexity on developers. To address these challenges, we design TokenRouter, an efficient and developer-friendly serving system for token-level routed LLM inference. TokenRouter follows the principle of request-centric programming, model-centric execution: developers describe routing logic from the perspective of a single request, while the runtime launches a subserver for each LLM and dispatches requests asynchronously. Each subserver employs a delayed-batching scheduler, whose optimal hyperparameters are derived from a mathematical throughput model of the system. Across diverse routing algorithms, workloads, and model pairs, TokenRouter achieves 2.01-64.15x higher decoding throughput than existing systems, substantially advancing the serving efficiency of token-level LLM routing. Our code is available at https://github.com/thu-nics/TokenRouter.
