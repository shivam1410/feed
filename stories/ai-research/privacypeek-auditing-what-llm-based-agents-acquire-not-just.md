---
title: "PrivacyPeek: Auditing What LLM-Based Agents Acquire, Not Just What They Say"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.00152"
authors: ["Mingxuan Zhang", "Jiahui Han", "Dadi Guo", "Songze Li", "Guanchu Wang", "Na Zou", "Dongrui Liu", "Xia Hu"]
date: "2026-08-05T20:00:00.000Z"
score: 70
guid: "2606.00152"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.00152.png"
generated: "2026-08-10T19:05:52+05:30"
---

LLM-based agents are rapidly advancing, autonomously invoking external tools to complete multi-step tasks for users. However, agents often acquire more sensitive information than the task requires. Existing privacy benchmarks audit what the agent's response or outgoing actions disclose, but overlook the acquisition stage where data first enters the agent's context. The over-acquired information is then one careless action or one attack away from an outright leak. To assess its prevalence, we introduce PrivacyPeek, a benchmark for evaluating acquisition-stage privacy leakage of LLM-based agents, with 1{,}182 cases across 7 acquisition behaviours and 16 application domains. Specifically, Acquisition Inspection examines the agent's tool-call trajectory, both the tools it invokes and the data it receives, to detect when it acquires sensitive information beyond the task scope. Probe Elicitation then issues a follow-up probe and measures how readily an attacker could elicit sensitive information the agent acquired but did not disclose. Our experiments on 10 LLM-based agents across 4 model families show that the unnecessary acquisition of sensitive information is widespread. In addition, we observe a correlation between the task-completion capability and acquisition-stage leakage. Prompt-level defences reduce only a small fraction of acquisition-stage leakage, leaving the majority unmitigated. These results make auditing acquisition-stage privacy both urgent and necessary. Our dataset and code are available at https://github.com/Xuan269/PrivacyPeek-Resource.
