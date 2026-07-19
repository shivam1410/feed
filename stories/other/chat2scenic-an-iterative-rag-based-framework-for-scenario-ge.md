---
title: "Chat2Scenic: An Iterative RAG-Based Framework for Scenario Generation in Autonomous Driving"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14387"
authors: ["Yuan Gao", "Wenting Miao", "Mattia Piccinini", "Haoyu Wang", "Qunying Song", "Johannes Betz"]
date: "2026-07-14T20:00:00.000Z"
score: ""
guid: "2607.14387"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14387.png"
generated: "2026-07-19T19:52:10+05:30"
---

Validating autonomous driving systems requires diverse, regulation-compliant test scenarios. In simulation-based testing, scenarios are defined as executable scripts. Yet automatically generating such scripts from regulatory descriptions remains an open challenge, and existing approaches face fundamental trade-offs. Retrieval-assemble methods achieve reasonable compilation rates but lack scalability, whereas retrieval-based full-script generation suffers from low compilation success rates. We present Chat2Scenic, the first iterative retrieval-augmented framework to generate scenario scripts in Domain Specific Language (DSL). Specifically, Chat2Scenic provides a chatbot interface that supports interactive scenario refinement and integrates Retrieval-augmented Generation (RAG) to ground scenario generation in regulatory knowledge and DSL syntax. Furthermore, we propose an open benchmark for scenario generation comprising 123 scenarios from various regulations, including NHTSA and United Nations Vehicle Regulations, as well as other sources. Extensive evaluation with State-of-the-Art (SOTA) Large Language Models (LLMs) demonstrates that Chat2Scenic achieves 76.42% Compilation Success Rate (CSR) and 58.17% Framework Accuracy (FA), outperforming existing methods (Retrieval Assemble with 30.08% CSR, 11.03% FA and Retrieval full script generation with 16.26% CSR, 10.86% FA). To facilitate future research, we release our code as open source at https://github.com/TUM-AVS/chat2scenic.
