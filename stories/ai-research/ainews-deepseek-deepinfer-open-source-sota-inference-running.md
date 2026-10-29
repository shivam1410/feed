---
title: "[AINews] DeepSeek DeepInfer: Open Source SOTA Inference running 155T toks/day/cluster making $22m/day at ~80% margin for a 81 day payback"
category: "AI Research"
source: "Latent Space"
url: "https://latent.space/p/ainews-deepseek-deepinfer-open-source/"
authors: ["Latent Space"]
date: "Wed, 21 Oct 2026 06:54:09 GMT"
score: 62
guid: "https://www.latent.space/p/ainews-deepseek-deepinfer-open-source"
image: "https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/0ec35ae9-34c4-4317-964f-b6b0837dc76f/07a949cd-f727-48e2-9bd4-c4d110bf94e9_1326x1362.jpg?t=1792620904"
generated: "2026-10-29T14:26:40+05:30"
---

DeepSeek open sourced DeepInfer, its production inference stack. It is a customized vLLM that credits SGLang and TRT-LLM. DeepSeek says it serves 155 trillion tokens a day per cluster. Prompt caching can last up to 72 hours. Production data shows 1.5 million input tokens per second per prefill GPU and a 96% cache hit rate. DeepSeek kept its KV cache, disaggregation and load balancing code private. It matters because most advanced inference work has come from closed companies.
