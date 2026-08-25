---
title: "Reinforcement Learning on Benign Facts Amplifies Leakage of Memorized Private Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21727"
authors: ["Renfei Zhang, Niloofar Mireshghallah"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2608.21727v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

Reinforcement learning on benign factual data amplifies extraction of personally identifiable information (PII) that language models already memorized but rarely surface. On DeepSeek-V3.1, verbatim recall of name-email pairs increased 2.4× (0.155 to 0.370) after RL training on facts containing no PII. The effect scales with model size—absolute leakage largest in the 671B model—while reasoning ability and refusal rates remain unchanged. This reveals a novel attack vector: adversaries can extract memorized private data via fine-tuning on innocuous content, requiring neither access to original data nor privacy-relevant signals.
