---
title: "What Else Needs Fixing? Exploring Cost-Effective Test-Time Compute for Revision Propagation in Artifacts Generated Through Conversation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.03254"
authors: ["Daisuke Kikuta"]
date: "2026-09-02T20:00:00.000Z"
score: 48
guid: "2609.03254"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.03254.png"
generated: "2026-09-08T19:05:47+05:30"
---

Large Language Models (LLMs) often help users generate artifacts through iterative cycles of generation and revision in conversation. A challenge here is that, when users specify only a local change during revision, LLMs must instead identify the relevant dependencies and propagate the revision to all affected parts of the artifact. This paper studies this ability of LLMs on conversationally generated artifacts, where the artifact context and its dependencies may be embedded in the conversation history. Toward practical use, we also explore cost-effective test-time compute for this new setting. Specifically, we introduce a new benchmark for this setting, and evaluate nine revision methods, including sequential reflection and parallel sampling variants, using gpt-oss-20b/120b, gpt-5.4-mini, and qwen3.5-9b/27b/122b on the benchmark. The results show that baselines achieve accuracies of 68.3--93%, and the most cost-effective method is selecting from three parallel samples using either LLM-based or medoid selection, which improves accuracy by 2.2--9.7%. Our code and dataset are available at https://github.com/ntt-dkiku/llm-revision-propagation.
