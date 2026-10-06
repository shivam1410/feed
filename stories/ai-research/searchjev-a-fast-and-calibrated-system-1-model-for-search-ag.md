---
title: "SearchJev: A Fast and Calibrated System-1 Model for Search Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.05107"
authors: ["Congfeng Cao", "Lipeng Zuo", "Konstantinos Papakostas", "Qiwei Xu", "Songwei Xu", "Lun Zhou", "Zhaochun Ren", "Yougang Lyu", "Xiaohui Yan"]
date: "2026-10-03T20:00:00.000Z"
score: 75
guid: "2610.05107"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.05107.png"
generated: "2026-10-06T22:55:59+05:30"
---

Search agents repeatedly make short decisions about relevance, evidence sufficiency, and search actions. Using generative language models for these decisions introduces latency and unreliable confidence. We present SearchJev, a fast and calibrated System-1 model that separates search decisions from System-2 reasoning and generation. Given a search state and a decision schema, SearchJev directly scores legal options without autoregressive output generation. We propose Soft-Label Learning for Calibrated Decisions (SLCD) to learn decision probabilities from uncertain supervision and calibrate their confidence. In a dual-system search agent, SearchJev handles short decisions and delegates uncertain judgments to System 2, which retains planning, query generation, and answer composition. We also introduce SearchDecision-Bench, a benchmark unifying six types of search decisions for training and evaluation. On SearchDecision-Bench, SEARCHJEV improves decision quality over same-size Qwen3.5 autoregressive models, achieves 5.2-5.3 times faster decisions, and reduces average expected calibration error by 41-74%. On BrowseComp-Plus, the dual-system agents achieve a 3.7-4.7 times speedup in active search time while improving answer accuracy from 45% to up to 54%.
