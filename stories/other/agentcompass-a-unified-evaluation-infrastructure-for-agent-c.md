---
title: "AgentCompass: A Unified Evaluation Infrastructure for Agent Capabilities"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13705"
authors: ["Zichen Ding", "Jiaye Ge", "Shufan Jiang", "Kai Chen", "Mo Li", "Qingqiu Li", "Zehao Li", "Zonglin Li", "Tiaohao Liang", "Shudong Liu", "Zerun Ma", "Zixing Shang", "Wenhui Tian", "Zun Wang", "Liwei Wu", "Zhenyu Wu", "Jun Xu", "Bowen Yang", "Dingbo Yuan", "Qi Zhang", "Songyang Zhang", "Peiheng Zhou", "Dongsheng Zhu"]
date: "2026-07-14T20:00:00.000Z"
score: ""
guid: "2607.13705"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13705.png"
generated: "2026-07-18T21:58:10+05:30"
---

As Large Language Models (LLMs) evolve into autonomous agents, the need for unified evaluation infrastructure becomes critical. However, current evaluation pipelines remain highly fragmented and tightly coupled, hindering reproducibility and causing redundant engineering. To address this, we introduce AgentCompass, an open-source, lightweight, and extensible infrastructure for evaluating LLM-based agents. AgentCompass organizes the evaluation process around three independent components, namely Benchmark, Harness, and Environment, thereby enabling flexible configurations without requiring the reimplementation of complex execution logic. Furthermore, it features a fault-tolerant asynchronous runtime and comprehensive trajectory analysis tools to transparently diagnose nuanced failure modes like reward-hacking. Natively supporting over 20 benchmarks across five capability dimensions, AgentCompass provides the community with a scalable and reproducible infrastructure for advancing agent research.
