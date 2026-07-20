---
title: "GRASP: GRanularity-Aware Search Policy for Agentic RAG"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.10463"
authors: ["Varun Gandhi", "Jaewook Lee", "Shantanu Todmal", "Franck Dernoncourt", "Ryan Rossi", "Zichao Wang", "Andrew Lan"]
date: "2026-07-10T20:00:00.000Z"
score: 70
guid: "2607.10463"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.10463.png"
generated: "2026-07-20T19:05:49+05:30"
---

Agentic retrieval-augmented generation (RAG) extends static RAG by allowing language models to iteratively reason, generate search queries, retrieve evidence, and predict answers. However, it remains challenging for models to decide when to retrieve, whether to use lexical matching or semantic similarity, and how to control context granularity to prevent irrelevant tokens from interfering with agent reasoning. In this paper, we introduce GRASP, a reinforcement learning (RL) framework for training agents to adaptively coordinate complementary retrieval tools during multi-step reasoning. GRASP provides the agent with semantic search, keyword search, and paragraph-reading actions, enabling it to retrieve sentence-level evidence and expand further context only when needed. We train the policy with a reward that jointly accounts for answer accuracy, grounded reading, complementary search, and turn efficiency. Experiments on multi-hop reasoning benchmarks show that GRASP improves both retrieval recall and downstream question answering performance compared with single-step retrieval, prompting-based agentic RAG, and RL-based retrieval baselines. Qualitative and ablation analyses show that the learned policy develops interpretable skimming and scanning behavior: it uses semantic search for broad exploration, paragraph reading for local verification, and keyword search for entity-specific evidence. These results suggest that learning to coordinate retrieval signals and context granularity is critical for agent's correct reasoning.
