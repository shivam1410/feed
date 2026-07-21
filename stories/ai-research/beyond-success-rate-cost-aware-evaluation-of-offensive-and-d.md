---
title: "Beyond Success Rate: Cost-Aware Evaluation of Offensive and Defensive Security Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15263"
authors: ["Paul Kassianik", "Blaine Nelson", "Yaron Singer"]
date: "2026-07-16T20:00:00.000Z"
score: 65
guid: "2607.15263"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15263.png"
generated: "2026-07-21T19:05:01+05:30"
---

Security-agent evaluations commonly measure peak offensive capability under generous inference budgets, emphasizing vulnerability discovery, exploit development, penetration testing, and CTF completion. Such measurements are useful but incomplete: in operational security, every reasoning step, tool call, telemetry query, and enrichment request consumes budget. We evaluate language-model security agents through this cost-success lens on offensive Cybench challenges and defensive Splunk BOTS v1 investigation challenges. Instead of reporting only best-case success, we compare models at fixed cost levels and decompose performance by inference spend and tool spend. Our results show distinct scalingregimes for red- and blue-team tasks. Offensive CTF performance improves with additional test-time compute, and scaled open-weight models can approach frontier proprietary systems while remaining cost-competitive. Defensive SOC investigation does not scale in the same way: success depends more heavily on disciplined tool use, telemetry navigation, and selective enrichment than on raw reasoning budget alone. We argue that security-agent benchmarks should measure economic efficiency and operational fit alongside task success. Cost-aware, SOC-native evaluations provide a clearer picture of which models are practically useful today and where defensive agents still need to improve. We present an interactive website with our results https://evals.frontier.security.
