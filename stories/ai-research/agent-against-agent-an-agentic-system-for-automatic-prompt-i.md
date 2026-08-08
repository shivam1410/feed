---
title: "Agent Against Agent: An Agentic System for Automatic Prompt Injection Red Teaming"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.05108"
authors: ["Yanting Wang", "Chenlong Yin", "Runpeng Geng", "Jinyuan Jia"]
date: "2026-08-04T20:00:00.000Z"
score: 65
guid: "2608.05108"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.05108.png"
generated: "2026-08-08T19:05:03+05:30"
---

Prompt injection poses significant security risks to LLM agents. Efficient and effective red-teaming is therefore critical, both for evaluating these risks and for collecting training data to improve defenses. Existing state-of-the-art prompt injection red-teaming methods primarily rely on reinforcement learning (RL), producing attacker models that often generalize poorly to new target LLMs. In this work, we develop PIMiner, an agentic system for prompt injection red-teaming. During training, PIMiner is trained on a sequence of (dataset, target model) pairs and builds a strategy library from scratch. At test time, the learned strategy library can be directly transferred to a previously unseen target LLM without additional training. PIMiner requires only a small number of queries to a target agent (e.g., 10) per test sample. Experimental results demonstrate that PIMiner achieves strong performance. On IPIArena, it attains a 76.2% ASR against Gemini-2.5-Pro, 61.9% ASR against GPT-5.1, and 42.9% ASR against Claude-Sonnet-4.5. On AgentDojo, it achieves an 86.7% ASR against Gemini-2.5-Pro, 53.3% ASR against GPT-5.1, and 40.0% ASR against Claude-Sonnet-4.5.
