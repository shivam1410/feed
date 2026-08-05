---
title: "AgentStream: How Well Do Self-Evolving LLM Agents Perform Under Streaming Tasks?"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.00155"
authors: ["Dong Yan", "Jian Liang", "Dapeng Hu", "Ran He", "Nicholas Jing Yuan", "Qi Zhang", "Tieniu Tan"]
date: "2026-07-30T20:00:00.000Z"
score: 70
guid: "2608.00155"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.00155.png"
generated: "2026-08-05T20:00:21+05:30"
---

Large language model (LLM) agents can self-evolve by continually improving from their own accumulated experience. However, existing studies predominantly adopt independent evaluation. Consequently, the behavior of self-evolving agents in realistic streaming settings, where agents adapt to diverse and complex task streams, remains poorly understood. To address this gap, we introduce AgentStream, a unified framework that evaluates self-evolving agents spanning diverse evolution components by organizing agentic benchmarks into a configurable task stream and instantiating the Isolated, Sequential, and Interleaved streaming scenarios at test time, which progressively vary the scope and domain composition of the stream. Over these scenarios, we combinatorially evaluate five representative self-evolving methods across three frontier foundation models, disentangling how model capability, method architecture, and streaming scenario jointly shape self-evolution. Our results show that self-evolution reliability varies across streaming scenarios, the benefit of self-evolution is gated by model capability and non-monotonic in model strength, and no single method dominates across models and scenarios. These findings offer concrete guidance for selecting self-evolving methods across models and streaming scenarios. Overall, we advocate that self-evolving agents should be evaluated under realistic task streams rather than isolated single-task settings.
