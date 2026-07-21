---
title: "FlashRT: Agent Harness for Guiding Agents to Deploy Real-Time Multimodal Applications"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18171"
authors: ["Krish Agarwal", "Zhuoming Chen", "Yanyuan Qin", "Zhenyu Gu", "Atri Rudra", "Beidi Chen"]
date: "2026-07-19T20:00:00.000Z"
score: 65
guid: "2607.18171"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18171.png"
generated: "2026-07-21T19:05:01+05:30"
---

Real-time multimodal applications, including voice agents and interactive video generation, compose heterogeneous models into pipelines whose efficient deployment requires application-specific decisions about placement, streaming, and intra-model parallelism. Existing serving systems and auto-parallelism compilers commit to limited transformations and fixed workload assumptions, so achieving high performance on a new application requires hand-crafting an efficient implementation. We present FlashRT, an agent harness that guides coding agents to lift simple developer-written reference implementations into optimized multi-GPU deployments that flexibly weigh target metrics like latency and throughput. Using a new chain-of-program paradigm, FlashRT directs a generic coding agent through a multi-pass transformation process where an agent transforms the reference into an intermediate representation (IR) to capture data dependencies and persistent-state scopes, validates this IR via a sequential interpreter, and performs static analyses to identify candidate transformations. Then, the agent iteratively implements, verifies, and benchmarks each candidate under a measurement-gated optimization loop to produce effective deployments that span different hardware budgets. Across various applications, including video world models and multimodal LLMs, FlashRT converts reference implementations into highly efficient deployments, delivering up to ~70x latency reduction and 2.8x throughput improvement on NVIDIA B200 GPUs. On AMD MI355X GPUs, FlashRT matches the peak latency reduction while increasing peak throughput improvement to 3.6x, demonstrating that agent-driven optimization can be more scalable on platforms with less mature expert optimization. In fact, for Qwen3-Omni text-to-audio inference, FlashRT reduces response latency by 65% compared to the expert vLLM-Omni implementation on AMD MI355X.
