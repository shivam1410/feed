---
title: "Trust but Verify: Mitigating Medical Hallucinations via Post-Hoc Adversarial Auditing and Multi-Agent Feedback Loops"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14149"
authors: ["Muhammad Osama, Maheera Amjad, Zartasha Mustansar, Arslan Shaukat, Muhammad U. S. Khan"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 82
guid: "oai:arXiv.org:2606.14149v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

Large language models hallucinate by recommending banned or withdrawn pharmaceuticals when answering clinical questions, replicating drug names from training data patterns despite regulatory status. Researchers developed a "Trust but Verify" system—five specialized agents orchestrated on a single LLM backbone—and tested it against an adversarial dataset of 103 clinical multiple-choice questions featuring historically approved drugs now banned. Across open-access models (GPT-OSS, Llama-3, Falcon-3), the agentic approach reduced Hallucination Error Rate by approximately 53%, shifting pointwise safety scores from -0.25 (unsafe recommendation) toward 0.0 (appropriate refusal). This matters because clinical decision-support errors directly endanger patients; safety auditing must intercept dangerous outputs even when models favor incorrect but historically trained responses.
