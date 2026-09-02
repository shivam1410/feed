---
title: "Can LLMs Use Relational Transformer Embeddings?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00457"
authors: ["Francisco Galuppo Azevedo, Clarissa Lima Loures"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.00457v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00457v1 Announce Type: new Abstract: Injecting frozen relational-encoder embeddings as soft tokens into a large language model (LLM) is a conceptually appealing fusion strategy: the encoder handles multi-table structure, the LLM handles language and reasoning, and no lossy text serialization is required. We test this hypothesis concretely by injecting embeddings from a frozen Relational Transformer (RT) into Qwen3.5-4B via a learned MLP projection and LoRA adaptation, trained first with supervised fine-tuning (SFT) on chain-of-thought reasoning traces and then with group-based reinforcement learning (GSPO). We evaluate across 10 binary classification tasks on 6 relational databases from RelBench, under four supervision regimes: single-task (ST), within-dataset (WD), cross-dataset (CD), and all-task (ALL). The hybrid model does not consistently outperform standalone RT: it is frequently below random, highly sensitive to serialization format and relational-token budget, and unstable under RL training. We report these negative results and analyze the failure modes, arguing that soft-token fusion requires stronger alignment objectives and schema-aware design before it can serve as a reliable route to relational prediction.
