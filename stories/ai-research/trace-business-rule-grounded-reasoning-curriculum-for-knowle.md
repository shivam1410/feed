---
title: "TRACE: Business Rule-Grounded Reasoning Curriculum for Knowledge-Preserving Parametric Tool Retrieval in Enterprise LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.22639"
authors: ["Sai Shruthi Sistla", "Ashutosh Hathidara", "Christopher Toukmaji", "Mayank Shrivastava", "Karthikeyan Asokkumar"]
date: "2026-06-21T20:00:00.000Z"
score: 65
guid: "2607.22639"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.22639.png"
generated: "2026-07-28T19:07:22+05:30"
---

Parametric retrieval enables LLMs to retrieve tools implicitly by assigning each API a unique virtual token and training the model to generate it via constrained beam search. Toolsense shows that this regime has two critical drawbacks: it destroys parametric tool knowledge during training, and its beam-search decoding is too slow for real-time deployment. We introduce TRACE (Tool Retrieval via Augmented Chain-of-thought and Enterprise rules), a two-stage curriculum that resolves this dissociation. Stage 1 reuses the multi-format memorization SFT from ToolSense to seed tool knowledge with LoRA. Stage 2 is our core contribution: the model is trained to emit a thinking trace before producing a JSON list of tool tokens, using two data sources -- RRB pairs from ToolSense and queries synthesized to target business rules curated by domain experts -- both augmented with reasoning traces. This training objective preserves Stage 1 MCQ and QA probing accuracy while enabling single-beam greedy decoding at production latency. Evaluated on a combined enterprise catalog of 8,300+ tools across two enterprise product lines, TRACE training for Stage 2 not only preserves but improves tool understanding: MCQ accuracy gains +3.2 pp and QA probing gains +9 pp over Stage 1. On retrieval, TRACE achieves ~86% recall on Domain A and ~60% on Domain B -- compared to embedding baseline performance of ~27% & ~52% -- both with single-beam greedy decoding, making it directly deployable at production latency.
